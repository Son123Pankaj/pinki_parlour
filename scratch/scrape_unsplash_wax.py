import urllib.request
import re

req = urllib.request.Request(
    'https://unsplash.com/s/photos/waxing',
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
)
try:
    html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')
    # Unsplash image URLs look like: https://images.unsplash.com/photo-[a-z0-9-]+
    matches = re.findall(r'https://images\.unsplash\.com/photo-([0-9a-zA-Z_-]+)\?[^"\'\s]+', html)
    print("Found Unsplash IDs on waxing page:", list(dict.fromkeys(matches))[:15])
except Exception as e:
    print(e)
