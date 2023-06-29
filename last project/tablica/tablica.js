const tbody = document.querySelector("body");
const users = JSON.parse.localstorage.getItem("users") ;
const currentusar = localstorage. getirent ("currentuser"); const alllInputs = document.querySelectorAll("input"); 
let change = falce

let computers = [];
function updateTable() {
   for (let user of users) 
      if(user.username === currentUser) {
         computers = user.computers;
      }
    }

    console.log(alllInputs[0].value)

    tbody.innerHTML = '';
        
        computers.forEach((comp) => {
     tbody.innerHTML +=
     `<tr>
        <td>$(comp.id)</td>
        <td>$(comp.mark)</td>
        <td><img src = '$(comp.url) class = "img"</td>
        <td>$(comp.price)</td>
 
        <td>
        button id = '$(comp.id)class"btn btn-danger">Delete</buttons>

        button data-bs-toggle"modal" data-ba-target="leVodal" id = "$(comp.id)" class = btn btn-primary">Change</button>
     </td>`;
        })

        change = false

        updateTable();

        const saveBtn = document.querySelector("$save");
        const table = document.querySelector("table");

        function createComputer(id) {
          if(!change)  {
         id: computers.at(-1) ? computers.at(-1).id + : 1.
         category: alllInputs[0].value.
         mark: alllInputs[1].value.
         price: alllInputs[2].value.
         decription: alllInputs[3].value.
         used: alllInputs[4].value.
         url: alllInputs[5].value.
         ran: alllInputs[6].value.
        cpu: alllInputs[7].value.
        ron: alllInputs[8].value
        rontype: alllInputs[9].value
        05: alllInputs[10].value
        gpu: alllInputs[11].value
          };
      computers.push(newComputer);
      for (let user of users) {
      if (user.username === currentUser) {
           user.computers = computers;
      }
    }
   localStorage.setItem("users". JSON.stringify(users))
   updateTable();
};
           else {
        for( let comp of computers) {
            if(comp.id == id) {

                category: alllInputs[0].value.
                mark: alllInputs[1].value.
                price: alllInputs[2].value.
                decription: alllInputs[3].value.
                used: alllInputs[4].value.
                url: alllInputs[5].value.
                ran: alllInputs[6].value.
               cpu: alllInputs[7].value.
               ron: alllInputs[8].value
               rontype: alllInputs[9].value
               05: alllInputs[10].value
               gpu: alllInputs[11].value
            }
        }
        
    }else 
            for( let comp of computers) {
                if(comp.id == id) {
           
           category: alllInputs[0].value.
           mark: alllInputs[1].value.
           price: alllInputs[2].value.
           decription: alllInputs[3].value.
           used: alllInputs[4].value.
           url: alllInputs[5].value.
           ran: alllInputs[6].value.
          cpu: alllInputs[7].value.
          ron: alllInputs[8].value
          rontype: alllInputs[9].value
          05: alllInputs[10].value
          gpu: alllInputs[11].value
        }
    }
             for(let user of users) {
                   if(user.username === currentUser)  {
         user.computers = computers;

    localStorage.setItem("users", JSON.stringify(users));

     }}



   function changeComputers(id)  {
     change = true;
       let computers = computers.find(comp) => comp.id == id;
       alllInputs[0].value.  =   computer.category
        alllInputs[1].value. =   computer.mark
      alllInputs[2].value.   =    computer.price
       alllInputs[3].value   =    computer.decription
       alllInputs[4].value.  =    computer.used
        alllInputs[5].value. =   computer.url
       alllInputs[6].value.  =   computer.ran
       alllInputs[7].value.  =    computer.cpu
       alllInputs[8].value   =   computer.ron
       alllInputs[9].value   =    computer.rontype
       alllInputs[10].value  =    computer.05
       alllInputs[11].value  =    computer.gpu
   }

   let id;
   function handleClick(e) {
     id = parseInt(e.target.id);
        if(e.target.innerHTML == "Delete")
      deleteComputer(ParseInt(e.target.id));
   }      else if(e.target.innerHTML == "Change") {
       changeComputer(parseInt(e.target.id));
   }



   saveBtn.addEventListener("click", () => createComputer(id));
   table.addEventListener("click", handleClick);