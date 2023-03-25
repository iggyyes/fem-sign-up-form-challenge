const form = document.querySelector('form')
const email = document.getElementById('email')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {
    // get values from the inputs
    const emailValue = email.value.trim()
    

    

    if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Looks like this is not an email');
    } else {
        setSuccessFor(email)
        
    }

    
}

function setErrorFor(input, message) {
    const signUpField = input.parentElement  //.signUp__field
    const error = document.getElementById('errorMessage')

    //add error message inside p
    error.innerHTML = message

    // add error class
    email.setAttribute("aria-invalid", "true")

}

function setSuccessFor(input) {
    const signUpField = input.parentElement  //.signUp__field
    const error = document.getElementById('errorMessage')

    //add error message inside p
    error.innerHTML = ''

    // add success class
    email.setAttribute("aria-invalid", "false")

}



function isEmail(email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}