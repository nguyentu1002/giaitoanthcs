
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        signUpButton.addEventListener('click', () => {
            container.classList.add('right-panel-active');
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove('right-panel-active');
        });

const CORRECT_EMAIL = 'admin@gmail.com';
const CORRECT_PASSWORD = '123';

var inputEmail = document.getElementById('email');
var inputPassword = document.getElementById('password');

var formLogin = document.getElementById('form-login');

if(formLogin.attachEvent){
    formLogin.attachEvent('submit',onFormSubmit);
}else{
    formLogin.addEventListener('submit',onFormSubmit);
}

function onFormSubmit(e){
    var email = inputEmail.value;
    var password = inputPassword.value;

    if(email == CORRECT_EMAIL && password == CORRECT_PASSWORD ){
        alert('Đăng nhập thành công');
    }else{
        alert('Tài khoản hoặc mật khẩu sai');
    }
}