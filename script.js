const text1 = "Web Sitesine";
const text2 = "Hoşgeldiniz"

let i = 0;
let j= 0;
const speed =50;

function typeWriter1() {
    if(i < text1.length) {
        document.getElementById("text1").innerHTML += text1.charAt(i);
        i++;
        setTimeout(typeWriter1,speed);
    }
    else{
        setTimeout(typeWriter2,200);
    }
}
function typeWriter2() {
    if(j< text2.length) {
        document.getElementById("text2").innerHTML += text2.charAt(j);
        j++;
        setTimeout(typeWriter2,speed);
    }
}
window.onload =typeWriter1


