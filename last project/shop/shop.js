const users = JSON.parse(localStorage.getItem("users"));
const nav = document.querySelector(".nav")
const tabContent = document.querySelector(".tab-content")

let marks = [];
let computers = [];

for (let user of users) {
   for( let comp of user.computers) {
     computers.push(comp);
     if (!marks.includes(comp.mark)) {


     }   }
}

for (let mark of marks){
   nav.innerHTML +=`<button class="nav-link " id="${mark}" data-bs-toggle="pill" data-bs-target="${mark}tab"
    type="button" role="tab" aria-controls="${mark}" aria-selected="true"></button>`;

    tabContent.innerHTML += `<div class="tab-pane fade" id="${mark}tab" role="tabpanel" aria-labelledby="${mark}" tabindex="0">${mark}</div>`
}

const tabPanes = document.querySelectorAll(".tab-pane")

for (let pane of tabPanes) {
   for( let comp of computers) {
     if(pane.id == comp.mark + "tab") {
       pane.innerHTML += `<div class="card" style="width: 10rem">
       <img
         class="card-img-top"
         src="$(comp.url)"
         alt="Card image cap"/>
         
         <div class="card-body">
         <p class="card-text m-0">Ad: $(comp.mark)</p>
         <p class="card-text m-0">Tesvir: qwe </p>
         <p class="card-text m-0">Tesvir: qwe </p>
         <p class="card-text m-0">Tesvir: qwe </p>
         <p class="card-text m-0">Tesvir: qwe </p>
         `
       
       
       
       
       


     }
   }
}