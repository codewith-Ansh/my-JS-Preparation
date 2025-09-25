

let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let gender = document.getElementById('gender');
let dob = document.getElementById('dob');

let submit = document.getElementById('submit');

submit.addEventListener("click", function(event){
    event.preventDefault(); // Stop form from submitting

    // Name validation
    if(name.value === "") {
        alert("Please enter your name");
        return;
    }

    // Email validation
    if(email.value === "" || email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1) {
        alert("Please enter a valid email address");
        return;
    }

    // Phone validation (length + digits only)
    if(phone.value.length !== 10) {
        alert("Phone number must be 10 digits");
        return;
    }

    let validPhone = true;
    for(let i = 0; i < phone.value.length; i++) {
        if(phone.value[i] < '0' || phone.value[i] > '9') {
            validPhone = false;
            break;
        }
    }
    if(!validPhone) {
        alert("Phone number can only contain digits");
        return;
    }

    // DOB validation
    if(dob.value === "") {
        alert("Please enter your date of birth");
        return;
    }

    // Gender validation
    if(gender.value === "") {
        alert("Please select your gender");
        return;
    }

    alert("Form submitted successfully!");
});