import json
import requests
from bs4 import BeautifulSoup
headers = {"Accept": "application/json"}
response = requests.get(
    'https://hp-api.onrender.com/api/characters', headers=headers)

chars = response.json()
print(chars[0])
