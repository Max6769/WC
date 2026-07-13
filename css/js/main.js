const SAVE_KEY="worldCupManagerSave";

const views=document.querySelectorAll(".view");

const navButtons=document.querySelectorAll("nav button");

function showView(id){

views.forEach(v=>{

v.classList.remove("active");

});

document.getElementById(id).classList.add("active");

}

navButtons.forEach(btn=>{

btn.onclick=()=>{

showView(btn.dataset.view);

};

});

const continueButton=document.getElementById("continueGame");

if(!localStorage.getItem(SAVE_KEY)){

continueButton.disabled=true;

continueButton.style.opacity=.4;

}

document.getElementById("newGame").onclick=()=>{

const save={

created:new Date(),

budget:50000000,

team:null

};

localStorage.setItem(SAVE_KEY,JSON.stringify(save));

alert("Neues Spiel erstellt.");

continueButton.disabled=false;

continueButton.style.opacity=1;

};

continueButton.onclick=()=>{

alert("Spiel geladen.");

};

document.getElementById("resetSave").onclick=()=>{

if(confirm("Spielstand löschen?")){

localStorage.removeItem(SAVE_KEY);

location.reload();

}

};
