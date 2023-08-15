
// -------------------Login Part---------------------------

document.getElementById('submit-btn').addEventListener('click', function(){
    const inputEmail = document.getElementById('email-field');
    const inputPassword = document.getElementById('password-field');

    const email = inputEmail.value;
    const password = inputPassword.value;
    email.value = '';

    if(email === 'jahid462540@gmail.com' && password === 'Jahid'){
        window.location.href = 'bank.html';
    }else{
        alert('invalid Email or Password')
    }
})

