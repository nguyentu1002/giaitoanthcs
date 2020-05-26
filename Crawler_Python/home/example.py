from requests_html import HTML

with open('templates/pages/Giaitoan_API/giaitoan.html') as html_file:
    source = html_file.read()
    html = HTML(html=source)

print(html.html)