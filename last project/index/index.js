const h1 = document.querySelector('h1')
const logOut = document.querySelector('#exit')
const login = document.querySelector('#login')
const buyBtn = document.querySelector('#buy')
const tableBtn = document.querySelector('#table')

if(localStorage.getItem('currentUser')){
  h1.innerHTML += localStorage.getItem('currentUser')
  if(localStorage.getItem('currentUser') != ''){
     logOut.style.display = 'inline'
     login.style.display = 'none'
     buyBtn.style.display = 'inline'
     tableBtn.style.display = 'inline'
  }
}

logOut.addEventListener('click', () => {
    localStorage.setItem('currentUser', '')
    h1.innerHTML = 'User:'
    logOut.style.display = 'none'
    login.style.display = 'inline'
    buyBtn.style.display = 'inline'
     tableBtn.style.display = 'none'
})

login.addEventListener('click', () =>{
 location.href = '../../lgn/login.html'
})