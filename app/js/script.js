const form = document.querySelector('form')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const password = document.getElementById('password')



form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {
    // get values from the inputs
    const firstNameValue = firstName.value.trim()
    const lastNameValue = lastName.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    

    if(firstNameValue === '') {
        setErrorFor(firstName, 'First Name cannot be empty')
    } else {
        setSuccessFor(firstName)
    }

    if(lastNameValue === '') {
        setErrorFor(lastName, 'Last Name cannot be empty');
    } else {
        setSuccessFor(lastName);
    }

    if(emailValue === '') {
		setErrorFor(email, 'Email cannot be empty');
	} else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Looks like this is not an email');
    } else {
        setSuccessFor(email)
    }

    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be empty')
    } else if (passwordValue.length <= 8) {
        setErrorFor(password, 'Password must be minimum 8 characters long')
    } else if (passwordValue.length >= 20) {
        setErrorFor(password, 'Password must be maximum 20 characters long')
    } else {
        setSuccessFor(password)
    }

}


function setErrorFor(input, message) {
    const signUpField = input.parentElement  //.signUp__field
    const error = signUpField.querySelector('#errorMessage')

    //add error message inside p
    error.innerHTML = message

    // add error class
    input.setAttribute("aria-invalid", "true")

}

function setSuccessFor(input) {
    const signUpField = input.parentElement  //.signUp__field
    const error = signUpField.querySelector('#errorMessage')

    //add error message inside p
    error.innerHTML = ''

    // add success class
    input.setAttribute("aria-invalid", "false")

}


function isEmail(email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}