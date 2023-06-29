const h1 = document.querySelector('h1')
const logOut = document.querySelector('.bnt')
const login = document.querySelector('.login')

if(localStorage.getItem('currentUser')){
  h1.innerHTML += localStorage.getItem('currentUser')
  if(localStorage.getItem('currentUser') != ''){
     logOut.style.display = 'inline'
     login.style.display = 'none'

  }
}

logOut.addEventListener('click', () => {
    localStorage.setItem('surrentUser', '')
    h1.innerHTML = 'User:'
    logOut.style.display = 'none'
    login.style.display = 'inline'
})

login.addEventListener('click', () =>{
 location.href = '../../lgn/login.html'
})