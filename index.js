const signInBtn = document.querySelector('.login-button');
const signUpBtn = document.querySelector('.signup-button');
const signInForm  = document.querySelector('.form-signin');
const signUpForm = document.querySelector('.form-signup');
const closeBtn = document.querySelectorAll('.close');
const forms = document.querySelectorAll('.form');
// closing the modals upon click!!
closeBtn.forEach((close , i) => {
  close.addEventListener('click',e=>{
      e.preventDefault();
      forms[i].style.display = "none";
  });
});


// opening modals upon click!!
signInBtn.addEventListener('click',e=>{
  e.preventDefault();
  signInForm.style.display = "flex";
  signUpForm.style.display = "none";
});

signUpBtn.addEventListener('click',e=>{
  e.preventDefault();
  signUpForm.style.display = "flex";
  signInForm.style.display = "none";
});
