
var index = 0;
slide();
window.onscroll = function() {scroll()};
function slide(){
    var i=0;
    var slides = document.getElementsByClassName("slide");
    for(i=0;i<slides.length;i++){
        slides[i].style.display = "none";
        
    }
    
    index = index+1;
    if(index>slides.length){
        index=1;
    }
    slides[index-1].style.display = "block";
    setTimeout(slide, 2000);
}
function show(){
    document.getElementById("services").style.display = "block";
    document.getElementById("more").style.display = "none";
}
function hide(){
    document.getElementById("services").style.display = "none";
    document.getElementById("more").style.display = "block";
}
function scroll(){
    if (document.body.scrollTop>20  || document.documentElement.scrollTop > 20){
        document.getElementById("last").style.display = "flex";
    }
    else{
        document.getElementById("last").style.display = "none";
    }
}
function toTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}