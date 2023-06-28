
// let togglebtn =document.querySelector(".togglebtn");
// let nav =document.querySelector(".navlinks");
// let links=document.querySelector(".navlinks li");


// togglebtn.addEventListener("click", ()=> {
//     this.classList.toggle("click");
//     nav.classList.toggle("open");
// })



// const form = document.getElementById('form1');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const number = document.getElementById('number');
// const erroeElement = document.querySelectorAll('.error');

// form.addEventListener('submit', (e) => {
//     let messages = []
//     if (username.value === '' || username.value == null){
//         messages.push('Username is required')
//     }

//    if (messages.length > 0) {
//     e.preventDefault()
//     errorElement.innerText = messages.join(',' )

//    }

// })

//     validateInputs();
// });

// let setError = (element, message) => {
//     const inputControl= element;
//     const errorDisplay = document.querySelectorAll('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success')
// }

// let setSuccess = element => {
//     const inputControl = element;
//     const errorDisplay = document.querySelectorAll('.error'); 
    
//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// };

// let isValidEmail = email => {
//     const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     return regex.test(String(email).toLowerCase());
// }


// let validateInputs = () => {
//     const usernameValue = username.value.trim();
//     const emailvalue =email.value.trim();
//     const numberValue =number.value.trim();

//     if(usernameValue === ''){
//         setError(username, 'username is required');
//     } else {
//         setSuccess(username);
//     }

//     if(emailvalue === ''){
//         setError(email, 'Email is required');
//     } else if (!isValidEmail(emailvalue)) {
//         setError(email, 'provide a valid email address');

//     } else {
//         setSuccess(email);
//     }

//     if(numberValue === ''){
//         setError(number, 'Phone number is required');

//     } else if(numberValue.legth === 10) {
//         setError(number, 'County code needed');
//     }
//     else {
//         setSuccess(number)
//     }

        
//     };

//input fields
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const email = document.getElementById('email');
//form
const form =document.getElementById('myForm');
// validation colors

const green = '#4CAF50';
const red = '#F44336';

//handle form

const validateForm=()=>{
validateFirstName();
validateLastName();
validatePassword();
validateConfirmPassword();
validateEmail();

if(validateFirstName()&& validateLastName()&& validatePassword()&& validateConfirmPassword()&& validateEmail()){
    return true;
}else{
    return false;
}


}


//validaters
function validateFirstName() {
    //check if is empty
    if(checkIfEmpty(firstName)) return;
    //is if it as only letters
    if(checkIfOnlyletters(firstName)) return;
    return true;
};

function validateLastName(){
    if (checkIfEmpty(lastName)) return;
    if(!checkIfOnlyletters(lastName)) return;
    return true;
};

function validatePassword() {
    if(checkIfEmpty(password)) return;
    if(!meetLength(password, 8, 12)) return ;
    if(!containsCharacters(password, 4)) return;
    return true;
    
};

function validateConfirmPassword(){
    if(password.className !== 'valid'){
        setInvalid(confirmPassword, 'Password must be valid');
        return;
    }

    if(password.value !== confirmPassword.value){
        setInvalid(confirmPassword, 'Passwords must match');
        return;
    }else {
        setInvalid(confirmPassword);
    }
    return true;
};
function validateEmail(){
    if(checkIfEmpty(email)) return;
    if(!containsCharacters(email, 5)) return;
    return true;
};

//utility functions

function checkIfEmpty(field){
    if(isEmpty(field.value.trim())){
        //set field invalid
        setInvalid(field, `${field.name} must not be empty`);
        return true;

    }else{
        //set field valid
        return false;
    }
}

function isEmpty(value){
    if(value === '') return true;
    return false;
}

function setInvalid(field, message){
    field.className = 'invalid';
    field.nextElementSibling.innerHTML = message;
    field.nextElementSibling.style.color = red;

}

function setValid(field){
    field.className = 'valid';
    field.nextElementSibling.innerHTML = '';
    //field.nextElementSibling.style.color = green;
    
}

function checkIfOnlyletters(field){
    if(/^[a-zA-Z ]+$/.test(field.value)){
        setValid(field);
        return true;
    }
else{
    setInvalid(field, `${field.name} must contain only letters`);
    return false;
}
}
function meetLength(field, minLength, maxLength){
    if(field.value.length >= minLength && field.value.length < maxLength){
        setInvalid(feild);
        return true;
    } else if(field.value.length < minLength){
        setInvalid(field, `${field.name} must be at least ${minLength} characters long`);
        return false;
    }else {
        setInvalid(field, `${field.name} must be shorter than ${maxLength} characters`);
        return false
    }
}

function containsCharacters(field, code){
    let reGex;
    switch(code){
        case 1:
            //letters
            reGex = /(?=.*[a-zA-Z])/;
            return matchWithReGex(reGex, field, 'Must contain at least one letter');
        
        case 2:
           // letters and numbers
           reGex = /(?=.*\d)(?=.*[a-zA-Z])/;
           return matchWithReGex(reGex, field, 'Must contain at least one letter and one number');
        case 3:
           // At least one uppercase letter, one lowercase letter and one number
           reGex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
           return matchWithReGex(reGex, field, 'Must contain at least one uppercase letter, one lowercase and one number');
        case 4:
           // At least one uppercase letter, one lowercase letter, one number and one special character (symbol)
           reGex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
           return matchWithReGex(reGex, field, 'Must contain at least one uppercase, one lowercase letter, one number and one special character');

        case 5:
            //email
            reGex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return matchWithReGex(reGex, field, 'Must be a valid Email address');

        default:
            return false;


    }
    
}
function matchWithReGex(reGex, field, message){
    if(field.value.match(reGex)){
        setInvalid(field);
        return true;
    } else {
        setInvalid(field, message);
        return false;
    }
}
