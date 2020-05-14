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
//Hàm chuyển số sang chữ số La mã
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
//Tìm * để số a chia hết cho b
function timSao(){
    var so1 =document.getElementById("so1").value;
    var so2=document.getElementById("so2").value;
    var kq="";
    if( parseInt(so2) == 3|| parseInt(so2) == 9){
        var arr = so1.split('*');
        var k ="";
        for(i = 0; i < arr.length; i++)
        k += arr[i];
        arr= k.split('');
        //Xử lý tổng
        var sum=0;
        for( var i=0 ;i < arr.length; i++){
            sum += parseInt(arr[i]);
        }
        kq=" Ta có " + so1 +" ⋮ "+ so2 + " <=> " + sum + "+ * ⋮ "+so2 +" <=> * = "  ;
        for( var i=0; i<10;i++){
            if((sum +i)% parseInt(so2) ==0)
                kq += i.toString() +","; 
        }
    }
    if(parseInt(so2) == 5){
        var arr= so1.split('');
        if(parseInt(arr[arr.length-1])== 5 || arr[arr.length-1]== 0){
            kq += so1 +" ⋮ 5 với mọi * <=> * = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9";   
        }
        if(arr[arr.length-1]=="*"){
            kq += so1 +"⋮ 5 <=> * ⋮ 5 <=> * ={ 0, 5}"
        }
        else{
            kq += "Không tồn tại * nào thõa mãn yêu cầu vì chữ số cuối cùng không thuộc tập {0, 5}."
        }
    }
    if(parseInt(so2) == 2){
        var arr= so1.split('');
        if(parseInt(arr[arr.length-1])== 0 || parseInt(arr[arr.length-1])== 2 ||parseInt(arr[arr.length-1])== 4 ||parseInt(arr[arr.length-1])== 6 ||parseInt(arr[arr.length-1])== 8 ){
            kq += so1 +" ⋮ 2 với mọi * <=> * = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9";   
        }
        if(arr[arr.length-1]=="*"){
            kq += so1 +"⋮ 2 <=> * ⋮ 2 <=> * ={ 0, 2, 4, 6, 8}"
        }
        else{
            kq += "Không tồn tại * nào thõa mãn yêu cầu vì chữ số cuối cùng không thuộc tập {0, 2, 4, 6, 8}."
        }
    }
    if(parseInt(so2) == 10){
        var arr= so1.split('');
        if(parseInt(arr[arr.length-1])== 0){
            kq += so1 +" ⋮ 10 với mọi * <=> * = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9";   
        }
        if(arr[arr.length-1]=="*"){
            kq += so1 +"⋮ 10 <=> * ⋮ 2 <=> * ={ 0}"
        }
        else{
            kq += "Không tồn tại * nào thõa mãn yêu cầu vì chữ số cuối cùng không thuộc tập {0}."
        }
    }
    
    document.getElementById("so3").innerHTML=kq;
}
//Tìm bội của 1 số N đã biết
function timBoiN(){
    var boi = document.getElementById("tim_boin").value;
    var arr= document.getElementById("khoang").value;
    var mang = arr.slice(1,arr.length-1).split(",");
    var kq="";
    var d=parseInt(mang[0]);
    var c=parseInt(mang[1]);
    if(d>c || boi>c)
        kq += "Nhập khoảng giá trị sai. ";
    else{
        if(boi > d-c)
            kq="Không tồn tại bội nào thõa mãn.";
        else{
            kq += "Nhân "+boi+" lần lượt với các số 0, 1, 2, 3, ... ta được các bội của "+boi +". Trong khoảng "+arr+ " thì tập bội thõa mãn là: ";
            for(var i=d;i<=c;i++){
                if(i% (parseInt(boi))== 0)
                    kq +=i.toString() +", ";
        }
        }
    }
    document.getElementById("kq_boin").innerHTML=kq.substring(0, kq.length - 1);
}
//Hàm tìm ước của 1 số N đã biết và xuất tổng các ước
function timUocN(){
    var n= document.getElementById("tim_uocn").value;
    var kq="";
    var sum=0;
    for( var i=1; i<= n;i++){
        if(n % i== 0){
            kq +=i.toString()+", ";
            sum +=i;
        }
    }
    kq=kq.slice(0,kq.length-2);
    document.getElementById("kq_uocn").innerHTML="Các ước của "+n+" là: "+kq +". Tổng các ước của "+n +" là :"+sum;
}
//Hàm tìm n để biểu thức chia hết:
function tim_SoN(){
    var kq="";
    var vt= document.getElementById("vetrai").value;
    var vp= document.getElementById("vephai").value;
    var regexObj = new RegExp(/(?:[+\-]|\d[a-z]|\d|[a-z])/g);

    document.getElementById("kq_timson").innerHTML=kq;
}
// Hàm tìm x,y thuoc N
function tim_XY(){
    var kq="";
    var ip=document.getElementById("bt_xy").value;

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
function phanTichThuaSoNguyenTo(n){
    //var n= document.getElementById("sophantich").value;
    var i= 2;
    var kq="";
    var dem=0;
    let arr_so = [];
    let arr_dem= [];
    while(n!=1){       
        if(n%i == 0){
            n /= i;
            dem++;
            if(arr_so.indexOf(i) < 0){
                arr_so.push(i);
            }
        }             
        else{ 
            i++; 
            if(dem!=0){
                arr_dem.push(dem);
            }            
            dem=0;
        }
        if(n==1){
            arr_dem.push(dem);
        }
    }  
     for(let i=0;i<arr_so.length;i++){
         kq += `${arr_so[i]}${arr_dem[i]==1?"":"^"+arr_dem[i]} * `;
     }
    kq = kq.slice(0,kq.length-3);
    //document.getElementById("phantich").innerHTML = "<p>" + kq +"<p>";
    return kq;
}

//Hàm tìm UCLN
function UCLN(x,y){
    while(x!=y)   {
        if(x>y) x=x-y;
        else y=y-x;
    }
    return x;

}
//Hàm tìm BCNN
function BCNN(a,b){
    return (a*b/UCLN(a,b) );
}
//Tìm BCNN của nhiều số
function BCNN_Mang(arr){
    var ketqua = BCNN(arr[0], arr[1] );
        for(let i=2;i<arr.length;i++){
            ketqua = BCNN(ketqua, arr[i]);    
        }
        return ketqua;
}
//Bieu dien phan so
function frac(x){
    let a = x.split("/")[0].replace(/\s+/g, '');
    let b = x.split("/")[1].replace(/\s+/g, '');
    var span = document.createElement("span");         
        span.className = "frac1";
        span.setAttribute("a",`${a}`);
        span.setAttribute("b",`${b}`);         
        span.innerHTML = "<span class=\"frac\"><span>"+ span.getAttribute("a") +"</span><span class\=\"symbol\">/</span\><span class=\"bottom\">"+ span.getAttribute("b") + "</span></span>";
    return span;
}
function RutGon_PhanSo(n){
    n = n.toString();
    var a = n.split("/")[0].replace(/\s+/g, '');
    var b = n.split("/")[1].replace(/\s+/g, '');
    if(a % b==0){
        return a/b;
    }
    else{
        var ucln = UCLN(Number(a),Number(b));
        a = a/ucln;
        b = b/ucln;      
        return `${a}/${b}`;
    }
}
//Rút gọn phân số
function RutGonPhanSo(){
    var p = document.getElementById("Rutgonphanso");
    p.innerHTML = "";
    var input = document.getElementById("rutgon_phanso").value;
    var a = input.split("/")[0].replace(/\s+/g, '');
    var b = input.split("/")[1].replace(/\s+/g, '');
    
    var string = "Kết quả rút gọn là:  ";
    p.innerHTML = string;
    
    if(a % b==0){
        p.innerHTML += a/b;
    } 
    else{        
        var ucln = UCLN(Number(a),Number(b));
        a = a/ucln;
        b = b/ucln;      
        var span = frac(`${a}/${b}`);
        p.appendChild(span);
        (ucln!=1? p.innerHTML += " (Chia tử và mẫu cho "+ ucln + ")":"");   
    }   
}

function SoSanhPhanSo(){
    let p_tag = document.getElementById("sosanhphanso");
    p_tag.innerHTML = "";
    
    let input = document.getElementById("sosanh_phanso").value;
    let a = input.split(";")[0].replace(/\s+/g, '');
    let b = input.split(";")[1].replace(/\s+/g, '');
    

    var string = "Kết quả so sánh là:  ";
    p_tag.innerHTML = string;

    var float_a = parseFloat(Number(a.split('/')[0]) / Number(a.split('/')[1]));
    var float_b = parseFloat(Number(b.split('/')[0]) / Number(b.split('/')[1]));

    if(float_a > float_b){
        p_tag.appendChild(frac(a));
        p_tag.innerHTML += `(${float_a.toFixed(2)}) > `;
        p_tag.appendChild(frac(b));
        p_tag.innerHTML += `(${float_b.toFixed(2)})`;
    }
    else if(float_a < float_b){
        p_tag.appendChild(frac(a));
        p_tag.innerHTML += `(${float_a.toFixed(2)}) < `;
        p_tag.appendChild(frac(b));
        p_tag.innerHTML += `(${float_b.toFixed(2)})`;
    }
    else{
        p_tag.appendChild(frac(a));
        p_tag.innerHTML += " = ";
        p_tag.appendChild(frac(b));
    }
}

function QuyDongPhanSo(){
    let input = document.getElementById("quydong_phanso").value;
    let p_tag = document.getElementById("quydongphanso");
    let arr_input = input.split(';'); //mảng chứa các phân số
    let arr_mauso =[];
    let arr_tuso = [];
    let arr_thuaso = []
    let flag = false;
    p_tag.innerHTML = "";
    for(let i=0;i<arr_input.length;i++){
        arr_input[i] = arr_input[i].replace(/\s+/g,'');
        var x = arr_input[i];
        arr_input[i] = RutGon_PhanSo(arr_input[i]);
        if(x != arr_input[i]){
            flag=true;
        }
        arr_mauso[i] = arr_input[i].split('/')[1];
        arr_tuso[i] = arr_input[i].split('/')[0];
    }
    let mau_chung = BCNN_Mang(arr_mauso);
    
    if(flag){
        p_tag.innerHTML += "Rút gọn phân số: ";
        for(let i=0;i<arr_input.length;i++){
            arr_thuaso[i] = mau_chung / arr_mauso[i];
            p_tag.appendChild(frac(`${arr_tuso[i]}/${arr_mauso[i]}`));
            (i==arr_input.length-1? "" : p_tag.innerHTML += " ; ");       
        }
        p_tag.innerHTML += "<br>";
    }

    p_tag.innerHTML += "Kết quả quy đồng là : " 
    for(let i=0;i<arr_input.length;i++){
        arr_thuaso[i] = mau_chung / arr_mauso[i];
        p_tag.appendChild(frac(`${arr_tuso[i]}*${arr_thuaso[i]}/${arr_mauso[i]}*${arr_thuaso[i]}`));
        (i==arr_input.length-1? "" : p_tag.innerHTML += " ; ");       
    }
    p_tag.innerHTML += `(Mẫu số chung là ${mau_chung})`;
    p_tag.innerHTML += "<br> => "
    for(let i=0;i<arr_input.length;i++){
        p_tag.appendChild(frac(`${arr_tuso[i]*arr_thuaso[i]}/${arr_mauso[i]*arr_thuaso[i]}`));
        (i==arr_input.length-1? "" : p_tag.innerHTML += " ; ");   
    }  
}
