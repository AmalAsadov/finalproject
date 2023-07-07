const allInput = document.querySelectorAll('input')
const users = JSON.parse(localStorage.getItem('users'))
const currentUser = localStorage.getItem('currentUser')
const tbody = document.querySelector('tbody')
const saveBtn = document.querySelector('#save')
let computers = []
let change = false

function updateTable(){
   for (let users of users) {
     if(user.name === currentUser) {
        computers = user.computers;
     }
   }
   tbody.innerHTML = ''

   for(let comp of computers){
       tbody.innerHTML += `</tr>
       <td>${comp.id}</td>
       <td>${comp.mark}</td>
       <td><img class ="img" src="${comp.img}" alt=""/></td>
       <td>${comp.price}</td>
       <td>
       <button id='${comp.id}' class="btn btn-danger">Delete</button>
       <button id='${comp.id}' class="btn btn-primary">Change</button>
       </td>
      </tr> `
   }
}

updateTable()


function createComputer(){
    if(!chage){
           let newComputer = {
            Model:allInput[1].value,
            Name:allInput[2].value,
            Price:allInput[3].value,
           Description:allInput[4].value,
           New:allInput[5].value,
            Img:allInput[6].value,
           Ram:allInput[7].value,
           Cpu:allInput[8].value,
           HDD:allInput[9].value,
           OS:allInput[10].value,
           VGA:allInput[11].value,
        }
        for(let user of users) {
            if(user.name === currentUser) {
                user.computers = computers;
            }
        }

            localStorage.setItem('users', JSON.stringify(users))
            updateTable()
            for(let input of allInputs){
                input.value = ''
            }


    }
}

function deleteComputer(id){
    computers == computers.filter((comp) => comp.id != id)
    for(let user of users) {
        if(user.name === currentUser) {
            user.computers = computers;
        }
    }

        localStorage.setItem('users', JSON.stringify(users))
        updateTable()
}

let id 

function handleClick(){
    id = parseInt(e.target.id)
    if(e.target.innerHTML == 'Delete'){
         deleteComputer(id)
    }
}


saveBtn.addEventListener('click',() => createComputer());
tbody.addEventListener('click', handleClick)