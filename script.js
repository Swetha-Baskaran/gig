let nav = document.getElementById("nvv");
let hide = document.getElementById("hidden");

function goDown() {
    if (nav.checked == true) {
        hide.style.top = "40px";
    } else {
        hide.style.top = "-160px";
    }
}


let media = document.getElementById("media");
let rot = document.getElementById("rotate");

function mediaGo() {

    if (med.checked == true) {
        media.style.right = "0px";
       
    } else {
        media.style.right = "-20px";
      
    }
}

let container = document.querySelector(".container");

let aboutpage = document.querySelector(".aboutpage");

let about = document.querySelector(".aboutp");
let about2 = document.querySelector(".aboutp2");
let about3 = document.querySelector(".about3");

let blg = document.querySelector(".blogs");

function contacts(para){
para.addEventListener("click", () => {
    container.style.display = "none";
    blg.style.display ="none";
    aboutpage.style.display = "block";
  

    hide.style.top = "-160px";
    nav.checked = true;
})
};

contacts(about);
contacts(about2);
contacts(about3);
// =============================================
let home = document.querySelector(".hhoom");
let home2 = document.querySelector(".hhoom2");
let hoo = document.querySelector(".hoo");


function homefun(para){
para.addEventListener("click", () => {
    
    aboutpage.style.display = "none";
    container.style.display = "block";
    blg.style.display ="none";

    hide.style.top = "-160px";
    nav.checked = true;
})
}
homefun(home);
homefun(home2);
homefun(hoo);



// ===================================
let b1 = document.querySelector(".b1");
let b2 = document.querySelector(".b2");
let b3 = document.querySelector(".b3");



function blog(para){
para.addEventListener("click",()=>{

    aboutpage.style.display = "none";
    container.style.display = "none";
    blg.style.display ="block";

    hide.style.top = "-160px";
    nav.checked = true;

})
}

blog(b1);
blog(b2);
blog(b3);

// ==================================
co1=document.querySelector(".co1");
co2=document.querySelector(".co2");
co3=document.querySelector(".co3");




function coo(para){
para.addEventListener("click",()=>{
    hide.style.top="-160px";
    nav.checked = true;

})
}
coo(co1);
coo(co2);
coo(co3);
