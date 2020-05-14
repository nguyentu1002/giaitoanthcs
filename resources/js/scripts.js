$(document).ready(
    function(){
        /*Sticky nav */
        $('.khoilop').waypoint(
            function(direction){
                if(direction=="down"){
                    $('nav').addClass('sticky');
                }else{
                    $('nav').removeClass('sticky');
                }
            },{
                offset:'100px'
            }
        )
        //Scroll
        $('a').click(function(event){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
            event.preventDefault();
        });
    }
)

//Phân số
var ele_frac = document.getElementsByClassName("frac1")
            
for(let i=0;i<ele_frac.length;i++){
    var string = "<span class=\"frac\"><span>"+ ele_frac[i].getAttribute("a") +"</span><span class\=\"symbol\">/</span\><span class=\"bottom\">"+ ele_frac[i].getAttribute("b") + "</span></span>";
    ele_frac[i].innerHTML = string;
} 
