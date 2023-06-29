 const allInputs = document.querySelectorAll("inputs")
 const btn = document.querySelectorA(".btn")


 const users = JSON.parce(localStorage.getItem('users'))



 btn.addEventlistener("click", (e) => {
   if(allInputs[1].checkValidaty()){
   e.preventDefault();
    let newUser = {
     name:allInputs[0].value,
     phone :allInputs[1].value,
     username: allInputs[2].value,
     password:allInputs[3].value
    }

      users.push(newUser)


      localStorage.setItem('users', JSON.stringify(users))
      

      location.href = ' ../login/log.html'} 
      else {

        alert('This number is wrong')
      }
    
    })
      