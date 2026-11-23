import urllib.request
import json

# Search Wikimedia Commons for waxing arm or epilation
url = "https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=waxing+arm+OR+depilation&gsrnamespace=6&gsrlimit=20&prop=imageinfo&iiprop=url|mime&format=json"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    data = json.loads(urllib.request.urlopen(req).read().decode())
    pages = data.get('query', {}).get('pages', {})
    for pid, page in pages.items():
        title = page.get('title', '')
        info = page.get('imageinfo', [{}])[0]
        if 'image' in info.get('mime', ''):
            print(title, "->", info.get('url'))
except Exception as e:
    print(e)
