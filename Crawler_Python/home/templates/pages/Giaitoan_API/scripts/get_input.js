var fs = require('fs');

//var debai = document.getElementById('debai');
var content = 'áđâsdâsd';
//sử dụng phương thức writeFile để ghi nội dung vào file
fs.writeFile('input.txt', content, 'utf8', function (err) {
    //Kiểm tra nếu có lỗi thì xuất ra lỗi
    if (err)
        throw err;
    else //nếu không thì hiển thị nội dung ghi file thành công
        console.log('Ghi file thanh cong!');
});