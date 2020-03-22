import urllib2
from bs4 import BeautifulSoup
import requests
"""
with open('./twitter.txt') as f:
    lines = f.readlines()

headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'}

for tweet_url in lines:
    page = requests.get(tweet_url, headers=headers)
    print(page.text)

    soup = BeautifulSoup(page.text, 'html.parser')
    
    print(soup)
    
    tweet_name = soup.find_all("div", class_="css-901oao")
    #for i in tweet_name:
    #    print(i)
    print(tweet_name)
"""

test = requests.get("https://twitter.com/WSJ/status/1235692304624685056")
soup = BeautifulSoup(test.text, 'html.parser')
# Get HRED and TITLE form this one.
tweet_profile = soup.find_all("a", class_="ProfileAvatar-container u-block js-tooltip profile-picture")

# Get inner text of this.
username = soup.find_all("a", class_="pretty-link js-user-profile-link")[0]

text = soup.find("meta",  property="og:description")

print(text)