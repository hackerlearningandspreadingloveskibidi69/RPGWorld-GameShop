/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (loginPass, loginEye) =>{
    const input = document.getElementById(loginPass),
          iconEye = document.getElementById(loginEye)
 
    iconEye.addEventListener('click', () =>{
       // Change password to text
       if(input.type === 'password'){
          // Switch to text
          input.type = 'text'
 
          // Icon change
          iconEye.classList.add('ri-eye-line')
          iconEye.classList.remove('ri-eye-off-line')
       } else{
          // Change to password
          input.type = 'password'
 
          // Icon change
          iconEye.classList.remove('ri-eye-line')
          iconEye.classList.add('ri-eye-off-line')
       }
    })
 }
 
 showHiddenPass('login-pass','login-eye')

 function showRegisterForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
  }
  
  function showLoginForm() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
  }

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => { 
    wrapper.classList.add('active'); 
});

loginLink.addEventListener('click', () => { 
    wrapper.classList.remove('active'); 
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

function toggleLoginForm() {
  var form = document.getElementById('loginForm');
  form.classList.toggle('hide');
}

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

function toggleForm(formId) {
    var form = document.getElementById(formId);
    form.classList.toggle('hide');
}
  



