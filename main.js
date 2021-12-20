import './style.css'

document.querySelector('#app').innerHTML = `
  <div class='container center fullview'>
    <div class='card gid shadow'>
      
      <form>
        <h1>Sing Up</h1>
        <div class='card__container-input'>
          <i class='bx bx-user bx-flip-horizontal' ></i>
          <input type='text' placeholder='Name' class='shadow'/>
        </div>
        <div class='card__container-input'>
          <i class='bx bx-mail-send' ></i>
          <input type='email' placeholder='E-mail' class='shadow'/>
        </div>
        <div class='card__container-input'>
          <i class='bx bx-lock' ></i>
          <input type='password' placeholder='Password' class='shadow'/> 
          <i class='bx bx-hide card__show-password'></i>
        </div>
       
        <div class='center'>
          <input type='checkbox' />
          <label class='card__conditions'> I read and agree to 
            <a href='#'> 
              Terms & Conditions
            </a>
          </label>
        </div>
          <button class='shadow'>CREATE ACCOUNT </button>
        <div class='card__sign-in grid'> 
          <p>Already have a account?
            <a href='#'> Sign in </a>
          </p>
        <div>  
      </form>
    
    </div>
  </div>
`

const $iconPassword = document.querySelector('.card__show-password')
const $inputPassword = document.querySelector('input[type = "password"]')

$iconPassword.addEventListener('click', () => {

  if ($iconPassword.classList.contains('bx-hide')) {
    console.log('hide');
    $iconPassword.classList.replace('bx-hide', 'bx-show')
    $inputPassword.setAttribute('type', 'text')
  } else {
    console.log('show');
    $iconPassword.classList.replace('bx-show', 'bx-hide')
    $inputPassword.setAttribute('type', 'password')
  }

})