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
