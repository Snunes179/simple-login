function showPassword() {
    const eye = document.getElementById('eye');
    const eye_slash = document.getElementById('eye-slash');
    const password_field = document.getElementById('field-password');

    if(eye.style.display === 'none') {

        eye.style.display = 'block';
        eye_slash.style.display = 'none';
        password_field.type = 'text';

    } else {

        eye.style.display = 'none';
        eye_slash.style.display = 'block';
        password_field.type = 'password'; 

    };
};

document.getElementById('btn-login').addEventListener('click', function(redirect_login) {

    redirect_login.preventDefault();
    alert("Logado Com Sucesso!");

});