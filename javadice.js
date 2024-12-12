

var random=Math.floor(Math.random()*6 )+1;
var changeimg = "./dice"+random+".png";
var img5 = document.querySelectorAll("img")[0];
img5.setAttribute("src",changeimg);

var random5=Math.floor(Math.random()*6 )+1;
var changeimg = "./dice"+random5+".png";
var img5 = document.querySelectorAll("img")[1];
img5.setAttribute("src",changeimg);

if(random>random5){
    document.querySelector("h2").innerText=" <= Left palyer jeet gaya";
}else if(random<random5){
 document.querySelector("h2").innerText="Right palyer jeet gaya =>";
}else{
     document.querySelector("h2").innerText="game is pending";
}