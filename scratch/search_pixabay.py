import urllib.request
import re

req = urllib.request.Request(
    'https://pixabay.com/images/search/waxing/',
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
)
try:
    html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')
    matches = re.findall(r'src="(https://cdn\.pixabay\.com/photo/[^"]+)"[^>]*alt="([^"]+)"', html)
    print("Found Pixabay matches:", len(matches))
    for src, alt in matches[:15]:
        print(f"Alt: {alt} -> {src}")
except Exception as e:
    print("Error:", e)
