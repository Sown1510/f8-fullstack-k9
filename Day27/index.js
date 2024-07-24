const showSignInButton = document.querySelector('.show_sign_in-btn');
const signInButton = document.querySelector('.sign_in');
const signUpButton = document.querySelector('.sign_up');
const signInBox = document.querySelector('.sign_in-box');
const signUpBox = document.querySelector('.sign_up-box');
const formBox = document.querySelector('.form-box');
const overLay = document.querySelector('.overlay');
const signInHiddenPasswordButton = document.querySelector('.sign_in-box .fa-eye-slash');
const signUpHiddenPasswordButton = document.querySelector('.sign_up-box .fa-eye-slash');
const signInShowPasswordButton = document.querySelector('.sign_in-box .fa-eye');
const signUpShowPasswordButton = document.querySelector('.sign_up-box .fa-eye');
const signInPasswordInput = document.querySelector('.sign_in-box input[type="password"]');
const signUpPasswordInput = document.querySelector('.sign_up-box input[type="password"]');
const signInEmailInput = document.querySelector('.sign_in-box input[type="email"]');
const signUpEmailInput = document.querySelector('.sign_up-box input[type="email"]');
const signUpFullnameInput = document.querySelector('.sign_up-box input[type="text"]');


const activeSignIn = () => {
    signInButton.classList.add('active');
    signInBox.classList.add('active');
    signUpButton.classList.remove('active');
    signUpBox.classList.remove('active');
    signUpEmailInput.value = '';
    signUpPasswordInput.value = '';
    signUpFullnameInput.value = '';
    signUpHiddenPasswordButton.classList.remove('active');
    signUpShowPasswordButton.classList.add('active');
    signUpPasswordInput.type  = 'password';
}

const activeSignUp = () => {
    signInButton.classList.remove('active');
    signInBox.classList.remove('active');
    signUpButton.classList.add('active');
    signUpBox.classList.add('active');
    signInEmailInput.value = '';
    signInPasswordInput.value = '';
    signInHiddenPasswordButton.classList.remove('active');
    signInShowPasswordButton.classList.add('active');
    signInPasswordInput.type  = 'password';
}

const showSignInBox = () => {
    formBox.classList.add('show');
    overLay.classList.add('show');
    activeSignIn();
}

const hideSignInBox = () => {
    formBox.classList.remove('show');
    overLay.classList.remove('show');
}

const signInHiddenPasswordAction = () => {
    signInHiddenPasswordButton.classList.toggle('active');
    signInShowPasswordButton.classList.toggle('active');
    signInPasswordInput.type === 'password' ? signInPasswordInput.type = 'text' : signInPasswordInput.type = 'password';
}

const signUpHiddenPasswordAction = () => {
    signUpHiddenPasswordButton.classList.toggle('active');
    signUpShowPasswordButton.classList.toggle('active');
    signUpPasswordInput.type === 'password' ? signUpPasswordInput.type = 'text' : signUpPasswordInput.type = 'password';
}

signInButton.addEventListener('click',activeSignIn);

signUpButton.addEventListener('click', activeSignUp);

showSignInButton.addEventListener('click', showSignInBox);

overLay.addEventListener('click', hideSignInBox);

signInHiddenPasswordButton.addEventListener('click', signInHiddenPasswordAction);

signInShowPasswordButton.addEventListener('click', signInHiddenPasswordAction);

signUpHiddenPasswordButton.addEventListener('click', signUpHiddenPasswordAction);

signUpShowPasswordButton.addEventListener('click', signUpHiddenPasswordAction);

