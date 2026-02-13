window.addEventListener('scroll',reveal);

function reveal (){
    var reveal = document.querySelectorAll('.reveal');
    for(var i = 0; i < reveal.length;i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveal[i].getBoundingClientRect().top;
        var revealpoint = 150;
        
        if (revealtop < windowheight - revealpoint) {
            reveal[i].classList.add('buka');
        }
        else {
            reveal[i].classList.remove('buka');

        }
    }
}

setInterval (()=> {
    let secon = document.querySelector(".time.sec");
    let minut = document.querySelector(".time.min");
    let hours = document.querySelector(".time.hr");

    let hh = new Date().getHours();
    let mm = new Date().getMinutes();
    let ss = new Date().getSeconds();
    let hd = hh * 30;
    let md = mm * 6;
    let sd = ss * 6;
     hours.innerHTML = hh;
     minut.innerHTML = mm;
     secon.innerHTML = ss;

    hours.style.transform = `rotate(${hd}deg)`;
    minut.style.transform = `rotate(${md}deg)` ;
    secon.style.transform = `rotate(${sd}deg)`;
});
let homepageH1 = document.querySelector(".homepage h1");
homepageH1.onclick = function () {
  homepageH1.classList.toggle("active");
}
let homepageP = document.querySelector(".homepage p");
homepageP.onclick = function () {
homepageP.classList.toggle("active");
}

let intro = document.querySelector('.intro');
let logo =document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=> {
    
    setTimeout (()=>{
       
        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx +1) * 300)
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                },(idx +1)*30)
            })
        },1700)

        setTimeout(()=>{
            intro.style.top ='-100vh';
        },2000)
    })
}) 