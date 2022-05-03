var div_fontsize = parseFloat(window.getComputedStyle(document.querySelector("div.content")).fontSize);
var h1_fontsize = parseFloat(window.getComputedStyle(document.querySelector("h1")).fontSize);

const makeBigger = () => {
   //alert('make bigger!');
   div_fontsize *= 1.1;
   h1_fontsize *= 1.1;
   document.querySelector("div.content").style.fontSize=div_fontsize+"px";
   document.querySelector("h1").style.fontSize=h1_fontsize+"px";
};

const makeSmaller = () => {
   //alert('make smaller!');
   div_fontsize /= 1.1;
   h1_fontsize /= 1.1;
   document.querySelector("div.content").style.fontSize=div_fontsize+"px";
   document.querySelector("h1").style.fontSize=h1_fontsize+"px";
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

