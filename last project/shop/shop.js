const users = JSON.parse(localStorage.getItem("users"));
const nav = document.querySelector(".nav")
const tabContent = document.querySelector(".tab-content")

let marks = [];
let computers = [];

for (let user of users) {
   for( let comp of user.computers) {
     computers.push(comp);
     if (!marks.includes(comp.mark)) {
        marks.push(comp.mark)

     }   }
}

for (let mark of marks){
  nav.innerHTML += `
  <button class="nav-link" id="v-pills-${mark}-tab" data-bs-toggle="pill" data-bs-target="#v-pills-${mark}" type="button" role="tab" aria-controls="v-pills-${mark}" aria-selected="true">${mark}</button>
  `

    tabContent.innerHTML += `
    <div class="tab-pane fade" id="v-pills-${mark}" role="tabpanel" aria-labelledby="v-pills-${mark}-tab"></div>
    `
}

const tabPanes = document.querySelectorAll(".tab-pane")

for (let pane of tabPanes) {
   for( let comp of computers) {
     if(pane.id == `v-pills-${mark}`) {
       pane.innerHTML += `
       <div class="card" style="width: 18rem;">
         <img src="/shop/download.jpg" class="card-img-top" alt="...">
         <div class="card-body">
           <h5 class="card-title">Info</h5>
           <p class="card-text">Mark: ${comp.mark}</p>
           <p class="card-text">Price:${comp.price}</p>
           <p class="card-text">Ram:${comp.ram}</p>
           <a href="#"  data-bs-toggle="modal" data-bs-target="#exampleModal${comp.id}" class="card-link">Details</a>
 
         </div>
       </div>
       <div class="modal fade" id="exampleModal${comp.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img class = "w-50" src="${comp.img}">
      <p>Model: ${comp.mark}</p>
      <p>Name:  ${comp.name}</p>
      <p>Price:  ${comp.price}</p>
      <p>New:  ${comp.new}</p>
      <p>Ram:  ${comp.ram}</p>
      <p>Cpu  ${comp.Cpu}:</p>
      <p>HDD  ${comp.HDD}:</p>
      <p>OS  ${comp.OS}:</p>
      <p>VGA  ${comp.VGA}:</p>
    
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
         `
     }
   }
}