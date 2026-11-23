import urllib.request
import re

urls_to_try = [
    'https://www.pexels.com/search/arm%20waxing/',
    'https://www.pexels.com/search/waxing%20arm/',
    'https://www.pexels.com/search/waxing/'
]

for url in urls_to_try:
    print("=== Fetching:", url)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')
        matches = re.findall(r'<img[^>]+src=["\'](https://images\.pexels\.com/photos/(\d+)/[^"\']+)["\'][^>]*alt=["\']([^"\']*)["\']', html)
        for src, pid, alt in matches:
            if any(k in alt.lower() for k in ['wax', 'depilation', 'arm', 'hand', 'salon']):
                print(f"ID: {pid} | Alt: {alt[:70]} | URL: {src}")
    except Exception as e:
        print("Error:", e)
