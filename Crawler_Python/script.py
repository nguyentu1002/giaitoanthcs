import bs4
import pandas
import requests

# các bạn thay link của trang mình cần lấy dữ liệu tại đây
url = 'https://hoc247.net/chuong-1-on-tap-va-bo-tuc-ve-so-tu-nhien-ct24.html'


def get_page_content(url):
    page = requests.get(url, headers={"Accept-Language": "en-US"})
    return bs4.BeautifulSoup(page.text, "html.parser")


soup = get_page_content(url)
urls = soup.findAll('h3', class_="item-title")
link = [url.find('a')['href'] for url in urls]
link.pop()
#print(link)

for url_bai in link:
    soup1 = get_page_content(str(url_bai))
    title = soup1.find('h1', class_='cate-h1')
    detail = soup1.find('div', class_="box-content")
    content = soup1.findAll('div', class_="box-1")[2]
    bai = "<section class=\"wrapbanner\"><div class=\"container\">" + str(title) + "</div></section>"
    noidung = "<section class=\"main\"><div class=\"container\"><div class=\"detail-col-left\"><div class=\"box-1\">" + str(detail) + "</div>" + str(content) + "</div></div></section>"
    size = "https://hoc247.net/toan-6/"
    tenbai = url_bai[len(size):-10]
    try:
        f = open("base-Tu.txt", mode='r', encoding='utf-8')
        data = f.read()
        arr = str(data).split("<!-- Nội dung -->")
        f1 = open("lop6/chuong-1-on-tap-va-bo-tuc-ve-so-tu-nhien/"+tenbai+".html", mode='w', encoding='utf-8')
        f1.write(arr[0] + "\n" + bai + "\n" + noidung + arr[1])
        f1.close()

    finally:
        f.close()
        f1.close()


# titles = [chuong.find('a').text for chuong in chuongs]

# contents = [cnt.find('a').text for cnt in soup.findAll('p', class_="i-des")]

# try:
#     f = open("base.txt", mode='r', encoding='utf-8')
#     f1 = open("test.txt", mode='w', encoding='utf-8')
#     data = f.read()
#     f1.write(data)
#     index = str(data).index("noidung-->")
#     f1.seek(index + 26)
#     f1.write("Hello\n")
# finally:
#     f.close()
#     f1.close()
