*{

margin:0;

padding:0;

box-sizing:border-box;

}

body{

font-family:'Poppins',sans-serif;

background:linear-gradient(135deg,#ffe5ec,#ffd6e8,#fff0f5);

overflow-x:hidden;

}

/* HERO */

.hero{

height:100vh;

display:flex;

justify-content:center;

align-items:center;

text-align:center;

position:relative;

}

.overlay{

width:100%;

padding:25px;

}

.card{

background:rgba(255,255,255,.75);

backdrop-filter:blur(15px);

padding:45px;

border-radius:25px;

max-width:420px;

margin:auto;

box-shadow:0 20px 60px rgba(0,0,0,.15);

animation:fade 2s;

}

.card h3{

font-weight:300;

margin-bottom:10px;

}

.card h1{

font-family:'Cormorant Garamond',serif;

font-size:60px;

color:#d6336c;

}

.card span{

color:#ff4081;

}

.card h2{

letter-spacing:4px;

margin:15px 0;

font-size:20px;

}

.card p{

margin:20px 0;

line-height:1.8;

}

button{

padding:15px 35px;

border:none;

border-radius:40px;

background:#ff4d88;

color:white;

font-size:16px;

cursor:pointer;

transition:.4s;

}

button:hover{

transform:scale(1.07);

box-shadow:0 10px 30px rgba(255,77,136,.4);

}

/* Invitation */

.invite{

height:100vh;

display:flex;

justify-content:center;

align-items:center;

padding:20px;

}

.invite-card{

background:white;

padding:40px;

border-radius:25px;

max-width:430px;

box-shadow:0 20px 50px rgba(0,0,0,.15);

text-align:center;

animation:zoom .8s;

}

.invite-card h1{

font-family:'Cormorant Garamond',serif;

color:#d6336c;

margin:20px 0;

}

.hidden{

display:none;

}

/* Scroll */

.scroll{

margin-top:50px;

font-size:30px;

animation:bounce 2s infinite;

color:#ff4081;

}

/* Animations */

@keyframes bounce{

50%{

transform:translateY(10px);

}

}

@keyframes fade{

from{

opacity:0;

transform:translateY(50px);

}

to{

opacity:1;

transform:translateY(0);

}

}

@keyframes zoom{

from{

transform:scale(.7);

opacity:0;

}

to{

transform:scale(1);

opacity:1;

}

}

/* Hearts */

.hearts::before,

.hearts::after{

content:"❤";

position:fixed;

font-size:25px;

color:pink;

animation:float 8s linear infinite;

left:20%;

}

.hearts::after{

left:80%;

animation-delay:4s;

}

@keyframes float{

0%{

bottom:-50px;

opacity:0;

}

20%{

opacity:.8;

}

100%{

bottom:110%;

opacity:0;

}

}

/* Mobile */

@media(max-width:500px){

.card h1{

font-size:45px;

}

.card{

padding:30px;

}

.invite-card{

padding:30px;

}

}
