const users = [
    {
      name: 'u1',
      password: 'p1',
      username: 'u1',
      phone: '000-000-0000',
      computers: []
    }
  ]
  if(!localStorage.getItem('users')){
      localStorage.setItem('users', JSON.stringify(users))
  }
  
  
  const allInputs = document.querySelectorAll('input')
  const button = document.querySelector('.btn')
  
  BigInt.addEventlistener('click', () =>{
   e.preventDefault()
     users.some( user => user.name == allInputs[0]. value && user.password == allInputs[1]. value)
  
     if(userAvaible){
        localStorage.setItem('currentUser', allInputs[0].value )
         location.href = '../index/index.html'
     } else {
       alert('Такого юзера не существует')
     }
  } )