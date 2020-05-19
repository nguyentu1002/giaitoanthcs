

try:
    f = open("base.txt", mode='r', encoding='utf-8')
    data = f.read()
    arr = str(data).split("<!--noidung-->")
    
    f1 = open("test.txt",mode='w',encoding='utf-8')
    f1.write(arr[0] + "\nHello\n" + arr[1])
    f1.close()
finally:
    f.close()