 const allInputs = document.querySelectorAll("input")
 const btn = document.querySelector("#btn")


 const users = JSON.parse(localStorage.getItem('users'))



 btn.addEventListener("click", (e) => {
   e.preventDefault();
    let newUser = {
     name:allInputs[0].value,
     phone :allInputs[1].value,
     password:allInputs[3].value,
     computers: []
    }

      users.push(newUser)


      localStorage.setItem('users', JSON.stringify(users))
      

      location.href = ' ../login/log.html';

  });
      