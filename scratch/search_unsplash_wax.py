import urllib.request
import re

req = urllib.request.Request(
    'https://html.duckduckgo.com/html/?q=site%3Aunsplash.com%2Fphotos%2F+waxing',
    headers={'User-Agent': 'Mozilla/5.0'}
)
html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')
matches = re.findall(r'unsplash\.com/photos/([a-zA-Z0-9_-]+)', html)
print("Unsplash IDs:", list(set(matches))[:15])
