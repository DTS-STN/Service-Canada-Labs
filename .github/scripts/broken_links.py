import os
import requests
from bs4 import BeautifulSoup

try:
    # collect broken URLS using a synchronous stack based approach (good enough since there aren't many links)
    BASE_URL = 'https://alpha.service.canada.ca'
    HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36'}
    MAX_DEPTH = 10

    stack = [(BASE_URL, True, 0)]
    seen = set()
    out = set()

    while stack:
        url, follow, depth = stack.pop()

        if url in seen:
            continue

        seen.add(url) 

        r = requests.get(url, headers=HEADERS)

        if not r.ok:
            out.add(url)

        if not follow or depth>MAX_DEPTH:
            continue
        
        soup = BeautifulSoup(r.text, 'html.parser')
        body = soup.find('body')
        for e in body.find_all('a'):
            href = e.get('href')
            if href.startswith('http') and BASE_URL not in href:
                stack.append((href, False, depth+1))
            elif BASE_URL in href:
                stack.append((href, True, depth+1))
            elif href.startswith('/'):
                stack.append((f'{BASE_URL}{href}', True, depth+1))


    # if broken links are found send an email via GC Notify
    if out:
        r = requests.post(
            f"{os.environ.get('NOTIFY_BASE_API_URL')}/v2/notifications/email",
            headers={
                **HEADERS,
                'Content-Type': 'application/json',
                'Authorization': f"ApiKey-v1 {os.environ.get('BROKEN_LINKS_API_KEY')}"
            },
            json={
                'email_address': os.environ.get('BROKEN_LINKS_EMAIL'),
                'template_id': os.environ.get('BROKEN_LINKS_TEMPLATE_ID'),
                'personalisation': {
                    'links': list(out)
                }
            }
        )

except Exception as e:
    print('something went wrong...')
    print(e)