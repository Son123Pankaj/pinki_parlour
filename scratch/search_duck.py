import urllib.request
import re

query = 'site:unsplash.com "waxing" ("arm" OR "hand" OR "wrist")'
url = f"https://html.duckduckgo.com/html/?q={urllib.parse.quote(query)}"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
try:
    html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')
    links = re.findall(r'href="//duckduckgo\.com/l/\?uddg=([^"&]+)', html)
    for l in links:
        decoded = urllib.parse.unquote(l)
        if 'unsplash.com/photos/' in decoded:
            print("Found Unsplash photo URL:", decoded)
except Exception as e:
    print("Error:", e)
