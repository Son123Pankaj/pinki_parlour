import urllib.request
import json

url = "https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=depilation+OR+waxing&gsrnamespace=6&gsrlimit=50&prop=imageinfo&iiprop=url|mime|extmetadata&format=json"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
try:
    data = json.loads(urllib.request.urlopen(req).read().decode())
    pages = data.get('query', {}).get('pages', {})
    for pid, page in pages.items():
        title = page.get('title', '')
        info = page.get('imageinfo', [{}])[0]
        if 'image' in info.get('mime', ''):
            meta = info.get('extmetadata', {})
            desc = meta.get('ImageDescription', {}).get('value', '')
            print(f"TITLE: {title}\nURL: {info.get('url')}\nDESC: {desc[:100]}\n---")
except Exception as e:
    print(e)
