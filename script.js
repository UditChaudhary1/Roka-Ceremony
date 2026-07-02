const openBtn = document.getElementById("openBtn");

const invite = document.getElementById("invite");

const hero = document.querySelector(".hero");

openBtn.onclick = ()=>{

hero.style.display="none";

invite.classList.remove("hidden");

};

document.getElementById("continueBtn").onclick=()=>{

alert("Part 2 will open from here ❤️");

};

/* =====================================
   PART 2 - COUNTDOWN + REVEAL ANIMATION
===================================== */

/* ---------- Countdown ---------- */

// Change year if needed
const eventDate = new Date("July 12, 2026 14:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = eventDate - now;

    if (distance < 0) {

        document.getElementById("countdown").innerHTML =
        "<h2>💍 The Celebration Has Begun! 💕</h2>";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    document.getElementById("days").innerHTML =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerHTML =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerHTML =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerHTML =
        String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);


/* ---------- Reveal Animation ---------- */

const revealElements = document.querySelectorAll(
".gallery-section, .countdown-section, .timeline-section, .photo-card, .timeline-item"
);

revealElements.forEach(item => {

    item.classList.add("reveal");

});

function revealOnScroll() {

    revealElements.forEach(item => {

        const top = item.getBoundingClientRect().top;

        const screen = window.innerHeight * 0.85;

        if(top < screen){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* ---------- Floating Petals ---------- */

const petals = 20;

for(let i=0;i<petals;i++){

    const petal = document.createElement("div");

    petal.innerHTML = "🌸";

    petal.style.position="fixed";

    petal.style.left=Math.random()*100+"vw";

    petal.style.top="-10vh";

    petal.style.fontSize=(18+Math.random()*18)+"px";

    petal.style.opacity=Math.random();

    petal.style.pointerEvents="none";

    petal.style.animation=
        `fall ${8+Math.random()*8}s linear infinite`;

    petal.style.animationDelay=
        Math.random()*8+"s";

    document.body.appendChild(petal);

}


/* ---------- Add Falling Animation ---------- */

const style=document.createElement("style");

style.innerHTML=`

@keyframes fall{

0%{

transform:
translateY(-10vh)
rotate(0deg);

}

100%{

transform:
translateY(120vh)
translateX(120px)
rotate(360deg);

}

}

`;

document.head.appendChild(style);


/* ---------- Smooth Scroll ---------- */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({

behavior:"smooth"

});

});

});


/* ---------- Gallery Hover Glow ---------- */

const cards=document.querySelectorAll(".photo-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow=
"0 25px 60px rgba(255,77,136,.35)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow=
"0 15px 40px rgba(0,0,0,.12)";

});

});


/* ---------- Floating Effect on Countdown ---------- */

const boxes=document.querySelectorAll(".time-box");

boxes.forEach((box,index)=>{

box.animate(

[
{transform:"translateY(0px)"},
{transform:"translateY(-10px)"},
{transform:"translateY(0px)"}
],

{

duration:2500+(index*300),

iterations:Infinity

}

);

});


/* ---------- Timeline Card Animation ---------- */

const timeline=document.querySelectorAll(".content");

timeline.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="scale(1)";

});

});
