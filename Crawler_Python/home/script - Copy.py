import bs4
import pandas
import requests

# các bạn thay link của trang mình cần lấy dữ liệu tại đây
url = 'https://hoc247.net/chuong-4-phuong-trinh-bac-hai-mot-an-ct47.html'


def get_page_content(url):
    page = requests.get(url, headers={"Accept-Language": "en-US"})
    return bs4.BeautifulSoup(page.text, "html.parser")


soup = get_page_content(url)

list_bai = soup.findAll('ul', class_="list-content-chuong")

print(list_bai[0])
# titles = [chuong.find('a').text for chuong in chuongs]

# contents = [cnt.find('a').text for cnt in soup.findAll('p', class_="i-des")]


