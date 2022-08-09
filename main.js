const form = getElementById('form');
const name1 = document.getElementById('fname');
const name2 = document.getElementById('lname');
const username = document.getElementById('uname');
const email1 = document.getElementById('email');
const password1 = document.getElementById('password');
const password2 = document.getElementById('confirmpassword');
const errormessage = document.getElementById('error');


form.addEventListener('submit', (e) =>{
    e.preventDefault();

    validateInputs();

});
const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText =errormessage;
    inputControl.classList.remove('success');
    inputControl.classList.add('error');

}

const validateInputs =() =>{
   const usernameValue = document.getElementById('uname').value;
   const password1Value = documetn.getElementById('password1').value;
   const password2Value = document.getElementById('password2').value;
    if(usernameValue ==''){
        setError(uname, 'username is required');
    }else {
        setSuccess(uname)
    }
    if(password1Value ==''){
        setError(password1, 'password is required');
    }else if(password1.length < 8){
        setError(password1, 'password must be at least 8 characters');
    }else{
        setSuccess(password1);
    }
    if(password2 ==''){
        setError(uname, 'username is required');
    }else if(password2Value !== password1Value){
        setError(password2, "password doesn't match");
    }

}
