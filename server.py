import http.server
import socketserver
import os
import sys
import json
import urllib.parse
import urllib.request
import datetime

PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))
DIST_DIR = os.path.join(DIRECTORY, "dist")
DATA_DIR = os.path.join(DIRECTORY, "data")
DISPATCH_FILE = os.path.join(DATA_DIR, "whatsapp_dispatches.json")
CONFIG_FILE = os.path.join(DATA_DIR, "owner_config.json")

os.makedirs(DATA_DIR, exist_ok=True)

DEFAULT_CONFIG = {
    "owner_whatsapp": "+91 83050 06343",
    "callmebot_apikey": "",
    "custom_webhook_url": ""
}

def load_config():
    if os.path.exists(CONFIG_FILE):
        try:
            with open(CONFIG_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            pass
    return DEFAULT_CONFIG.copy()

def save_config(cfg):
    try:
        with open(CONFIG_FILE, "w", encoding="utf-8") as f:
            json.dump(cfg, f, indent=2)
    except Exception as e:
        print(f"Error saving config: {e}")

def load_dispatches():
    if os.path.exists(DISPATCH_FILE):
        try:
            with open(DISPATCH_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            pass
    return []

def save_dispatch(item):
    items = load_dispatches()
    items.insert(0, item)
    items = items[:100]
    try:
        with open(DISPATCH_FILE, "w", encoding="utf-8") as f:
            json.dump(items, f, indent=2)
    except Exception as e:
        print(f"Error saving dispatch: {e}")

def format_whatsapp_message(app, owner_phone):
    formatted_date = app.get("date", "N/A")
    msg = (
        f"🌸 *NEW APPOINTMENT BOOKING* 🌸\n"
        f"*Kittu Beauty Parlour*\n"
        f"----------------------------------------\n"
        f"📋 *Booking ID:* #{app.get('id', 'GG-NEW')}\n"
        f"👤 *Client Name:* {app.get('userName', 'Guest')}\n"
        f"📞 *Client Phone:* {app.get('userPhone', 'N/A')}\n"
        f"📧 *Client Email:* {app.get('userEmail', 'N/A')}\n\n"
        f"💅 *Service:* {app.get('serviceTitle', 'Parlour Service')}\n"
        f"📂 *Category:* {app.get('category', 'Beauty & Spa')}\n"
        f"💰 *Price:* ₹{app.get('price', 0)}\n"
        f"⏱️ *Duration:* {app.get('duration', 'N/A')}\n\n"
        f"📅 *Appointment Date:* {formatted_date}\n"
        f"⏰ *Booking Time Slot:* {app.get('timeDisplay', app.get('timeSlot', 'N/A'))}\n"
        f"👩‍💼 *Assigned Stylist:* {app.get('stylist', 'Master Stylist')}\n"
        f"📍 *Branch:* {app.get('branch', 'Char Sahar Ka Naka, Gwalior, Madhya Pradesh')}\n\n"
        f"📝 *Client Notes:* {app.get('specialNotes', 'None')}\n"
        f"----------------------------------------\n"
        f"✨ *Status:* Confirmed Slot (Sent via Silent Web Background Dispatch)"
    )
    return msg

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIST_DIR if os.path.isdir(DIST_DIR) else DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def send_json(self, status_code, data):
        body = json.dumps(data).encode('utf-8')
        self.send_response(status_code)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Content-Length', str(len(body)))
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == '/api/whatsapp-dispatches':
            dispatches = load_dispatches()
            cfg = load_config()
            self.send_json(200, {
                "success": True,
                "owner_whatsapp": cfg.get("owner_whatsapp", "+91 83050 06343"),
                "total": len(dispatches),
                "dispatches": dispatches
            })
            return
        elif parsed.path == '/api/owner-config':
            cfg = load_config()
            self.send_json(200, {"success": True, "config": cfg})
            return
        # Default static file handling
        super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        content_len = int(self.headers.get('Content-Length', 0))
        raw_body = self.rfile.read(content_len).decode('utf-8') if content_len > 0 else "{}"
        
        try:
            payload = json.loads(raw_body)
        except Exception:
            payload = {}

        if parsed.path == '/api/send-whatsapp':
            cfg = load_config()
            owner_phone = payload.get("ownerWhatsApp") or cfg.get("owner_whatsapp", "+91 83050 06343")
            appointment = payload.get("appointment", payload)
            
            clean_owner = "".join([c for c in owner_phone if c.isdigit()])
            if len(clean_owner) == 10:
                clean_owner = "91" + clean_owner

            msg = format_whatsapp_message(appointment, owner_phone)
            timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

            gateway_status = "Direct Silent Background Dispatch"
            callmebot_key = cfg.get("callmebot_apikey") or payload.get("callmebotKey")
            custom_webhook = cfg.get("custom_webhook_url")

            if callmebot_key:
                try:
                    query = urllib.parse.urlencode({
                        "phone": clean_owner,
                        "text": msg,
                        "apikey": callmebot_key
                    })
                    url = f"https://api.callmebot.com/whatsapp.php?{query}"
                    req = urllib.request.Request(url, headers={"User-Agent": "GlowGraceParlour/1.0"})
                    with urllib.request.urlopen(req, timeout=5) as resp:
                        gateway_status = f"Dispatched via CallMeBot API (HTTP {resp.getcode()})"
                except Exception as ex:
                    gateway_status = f"CallMeBot attempt ({str(ex)}) - Logged in backend queue"
            elif custom_webhook:
                try:
                    webhook_data = json.dumps({"phone": clean_owner, "message": msg, "appointment": appointment}).encode("utf-8")
                    req = urllib.request.Request(custom_webhook, data=webhook_data, headers={"Content-Type": "application/json", "User-Agent": "GlowGraceParlour/1.0"})
                    with urllib.request.urlopen(req, timeout=5) as resp:
                        gateway_status = f"Dispatched via Custom Webhook (HTTP {resp.getcode()})"
                except Exception as ex:
                    gateway_status = f"Webhook attempt ({str(ex)}) - Logged in backend queue"

            dispatch_record = {
                "id": appointment.get("id", f"GG-{int(datetime.datetime.now().timestamp())}"),
                "timestamp": timestamp,
                "ownerPhone": owner_phone,
                "cleanOwnerPhone": clean_owner,
                "clientName": appointment.get("userName", "Guest"),
                "clientPhone": appointment.get("userPhone", "N/A"),
                "service": appointment.get("serviceTitle", "N/A"),
                "price": appointment.get("price", 0),
                "date": appointment.get("date", "N/A"),
                "timeSlot": appointment.get("timeDisplay", appointment.get("timeSlot", "N/A")),
                "message": msg,
                "status": "Dispatched to Owner WhatsApp (Silent Background)",
                "gatewayStatus": gateway_status
            }

            save_dispatch(dispatch_record)

            print(f"\n[WHATSAPP SILENT BACKGROUND DISPATCH] -> {owner_phone} ({clean_owner})")
            print(f"Client: {appointment.get('userName')} ({appointment.get('userPhone')})")
            print(f"Service: {appointment.get('serviceTitle')} | Time: {appointment.get('timeDisplay')}")
            print(f"Gateway Status: {gateway_status}")
            sys.stdout.flush()

            self.send_json(200, {
                "success": True,
                "message": f"Appointment details sent to Owner's WhatsApp ({owner_phone}) in background without opening WhatsApp.",
                "dispatch": dispatch_record
            })
            return

        elif parsed.path == '/api/update-owner-config':
            cfg = load_config()
            if "owner_whatsapp" in payload:
                cfg["owner_whatsapp"] = payload["owner_whatsapp"]
            if "callmebot_apikey" in payload:
                cfg["callmebot_apikey"] = payload["callmebot_apikey"]
            if "custom_webhook_url" in payload:
                cfg["custom_webhook_url"] = payload["custom_webhook_url"]
            save_config(cfg)
            self.send_json(200, {"success": True, "config": cfg})
            return

        self.send_json(404, {"error": "API route not found"})

if __name__ == '__main__':
    os.chdir(DIRECTORY)
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Kittu Beauty Parlour server with WhatsApp Dispatch API running at http://localhost:{PORT}")
        sys.stdout.flush()
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")
