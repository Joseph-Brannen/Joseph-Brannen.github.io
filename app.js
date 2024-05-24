const username = document.getElementById('name-input');
const email = document.getElementById('email-input');
const message = document.querySelector('textarea');
const error = document.getElementById('error-message');
const button = document.getElementById('submitbtn');



let errors; // Variable to store error messages

/**
 * Validates the input element and displays an error message if the value is empty.
 * @param {HTMLElement} element - The input element to validate.
 * @param {string} message - The error message to display.
*/
const validateInput = (element, message) => {
  if(element.value === ''){
    element.style.borderLeftColor = 'red';
    element.style.borderLeftWidth = '2px';
    errors += `${message}<br>`;
  } else { 
    element.style.borderLeftColor = 'rgba(255, 255, 255, .3)';
    element.style.borderLeftWidth = '1px';
  }
}

button.addEventListener( 'click', (e) => {
  // clear error message when user submits the form again
  errors = '';

  // validate the input fields
  validateInput(username, 'Please enter your name.');
  validateInput(email, 'Please enter your email.');
  validateInput(message, 'Please enter your message.');

  // prevent submission and display error message if there are errors
  if(errors !== ''){
    error.innerHTML = errors;
    e.preventDefault();
  }
});