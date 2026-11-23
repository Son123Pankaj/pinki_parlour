import urllib.request
import re

req = urllib.request.Request(
    'https://www.pexels.com/search/arm%20waxing/',
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
)
try:
    html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')
    # Match images
    img_matches = re.findall(r'https://images\.pexels\.com/photos/(\d+)/[^\s"\']+', html)
    # Deduplicate while preserving order
    seen = set()
    unique_ids = []
    for img_id in img_matches:
        if img_id not in seen:
            seen.add(img_id)
            unique_ids.append(img_id)
    print("Found Pexels Photo IDs:", unique_ids[:20])

    # Also search for alt tags or descriptions
    for item in re.finditer(r'<img[^>]+src=["\'](https://images\.pexels\.com/photos/(\d+)/[^"\']+)["\'][^>]*alt=["\']([^"\']*)["\']', html):
        print(f"ID {item.group(2)}: {item.group(3)}")
except Exception as e:
    print("Error:", e)
