//Viết tập hợp các chữ với từ được đưa vào
function tapHopChuCai(){
    var kq= document.getElementById("cumtu").value;
    //xóa khoảng trắng
    var mangtu = kq.split(" ");
    var kq ="";
    for(i = 0; i < mangtu.length; i++)
    kq += mangtu[i];
    var arr= kq.split('');
    //Loại bỏ ký tự trùng nhau
    arr = arr.filter((item, index) => arr.indexOf(item) === index);
    document.getElementById("kq_cumtu").innerHTML= arr;
}
//Tìm số tự nhiên liền sau/ liền trước
function timSoLienST(){
    var liensau= document.getElementById("liensau").value;
    var lientruoc=document.getElementById("lientruoc").value;
    var kq_ls= parseInt(liensau)+1;
    var kq_lt= parseInt(lientruoc)-1;
    document.getElementById("tim_ls").innerHTML=kq_ls;
    document.getElementById("tim_lt").innerHTML=kq_lt;
}
//Viết tập hợp bằng cách liệt kê các phần tử
//Input : 1 <= x <5 Output 1, 2, 3, 4

//Đếm số phần tử
function demSoPhanTuTapHop(){
    var taphop= document.getElementById("phantu").value;
    var arr= taphop.split(',');
    document.getElementById("dem_th").innerHTML=arr.length;
}
//Bài 3.Hàm chuyển số sang chữ số La mã
function convertToRoman() {
  var num = document.getElementById("num").value;
  var roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  var str = '';

  for (var i of Object.keys(roman)) {
    var q = Math.floor(num / roman[i]);
    num -= q * roman[i];
    str += i.repeat(q);
  }
  document.getElementById("lama").innerHTML = str;
}

//Bài 3. Hàm chuyển chữ số La mã sang số
//Hàm giá trị các chữ 
function valuerRoman(char) {
  if(char == 'I' || char == 'i') 
      return 1;
  if(char == 'V' || char == 'v') 
      return 5;
  if(char == 'X' || char == 'x') 
      return 10;
  if(char == 'L' || char == 'l') 
      return 50;
  if(char == 'C' || char == 'c') 
      return 100;
  if(char == 'D' || char == 'd') 
      return 500;
  if(char == 'M' || char == 'm') 
      return 1000;

  return -1;
}
function RomanToDec() {
  var str = document.getElementById("lm").value;
  var sum = 0;

  for(var i = 0; i < str.length; i++) {
      var s1 = valuerRoman(str[i]);

      if (i + 1 < str.length) {
          var s2 =  valuerRoman(str[i+1]);

          if(s1 >= s2) {
              sum += s1;
          }
          else {
              sum += s2 - s1;
              i++;
          }
      }
      else {
          sum += s1;
          i++;
      }
  }
  document.getElementById("dec").innerHTML = sum;
}
//Hàm kiểm tra số nguyên tố
function kiemTraSoNguyenTo(n){
    if(n<=1)
        return 0;
    for( var i=2; i<=n; i++){
        if(n%i==0)
            return 0;
    }
    return 1;
}
//Hàm phân tích thừa số nguyên tố
function phanTichThuaSoNguyenTo(){
    var n= document.getElementById("sophantich").value;
    var i= 2;
    var kq="";
    var tmp;
    while(n!=1){
        var dem=0;
        if(n%i == 0){
            n /= i;
            dem++;
            kq += i.toString()+" * ";
        }
        else
            i++;
    }
    kq=kq.slice(0,kq.length-2);
    document.getElementById("phantich").innerHTML = kq;
}
//Hàm tìm xuất ước của 1 số
function xuatUoc(){
    var n= document.getElementById("timuoc").value;
    var kq="";
    for( var i=1; i<= n;i++){
        if(n % i== 0)
            kq +=i.toString()+", ";
    }
    kq=kq.slice(0,kq.length-2);
    document.getElementById("xuatuoc").innerHTML=kq;
}
//Hàm tìm UCLN
function timUCLN(){
    

}
//Hàm tìm BCNN
function timBCNN(){
    var x= document.getElementById("boi1").value;
    var y= document.getElementById("boi2").value;
    var s
}
