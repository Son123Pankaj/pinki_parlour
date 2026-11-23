import urllib.request
import json
import os

ids = ['6763570', '35103884', '7446659', '8092949', '3852167', '7321544', '36930637', '30282121']

for i in ids:
    url = f"https://images.pexels.com/photos/{i}/pexels-photo-{i}.jpeg?auto=compress&cs=tinysrgb&w=600"
    path = f"assets/images/wax_{i}.jpg"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        data = urllib.request.urlopen(req, timeout=5).read()
        with open(path, 'wb') as f:
            f.write(data)
        print(f"Downloaded {i}: {len(data)} bytes")
    except Exception as e:
        print(f"Error {i}: {e}")
