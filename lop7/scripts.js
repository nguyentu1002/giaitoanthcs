
//Phân số
var ele_frac = document.getElementsByClassName("frac1")
            
for(let i=0;i<ele_frac.length;i++){
    var string = "<span class=\"frac\"><span>"+ ele_frac[i].getAttribute("a") +"</span><span class\=\"symbol\">/</span\><span class=\"bottom\">"+ ele_frac[i].getAttribute("b") + "</span></span>";
    ele_frac[i].innerHTML = string;
} 
