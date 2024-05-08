const form = document.querySelector('form');
const formDiv = document.getElementById('form-field');
const username = document.getElementById('name-input');
const email = document.getElementById('email-input');
const message = document.querySelector('textarea');
const error = document.getElementById('error-message');
const button = document.getElementById('submitbtn');


formDiv.addEventListener( 'click', (e) => {
  username.text = '';
  email.text = '';
  message.text = '';
  if ( button === e.target && username.value !== '' && email.value !== '' && message.value !== '') {
    error.innerHTML = "message submitted.";
  } else if ( button === e.target && username.value === '' && email.value !== '' && message.value !== '' ) {
    e.preventDefault();
    error.innerHTML = "enter a name.";
  } else if ( button === e.target && username.value !== '' && email.value === '' && message.value !== '' ) {
    e.preventDefault();
    error.innerHTML = "enter an email.";
  } else if ( button === e.target && username.value !== '' && email.value !== '' && message.value === '' ) {
    e.preventDefault();
    error.innerHTML = "enter a message.";
  } else if ( button === e.target && username.value === '' && email.value === '' && message.value !== '' ) {
    e.preventDefault();
    error.innerHTML = "enter a name.<br>enter an email.";
  } else if ( button === e.target && username.value === '' && email.value === '' && message.value === '' ) {
    e.preventDefault();
    error.innerHTML = "enter a name.<br>enter an email.<br>enter a message.";
  } else if ( button === e.target && username.value !== '' && email.value === '' && message.value === '' ) {
    e.preventDefault();
    error.innerHTML = "enter an email.<br>enter a message.";
  } else if ( button === e.target && username.value === '' && email.value !== '' && message.value === '' ) {
    e.preventDefault();
    error.innerHTML = "enter a name.<br>enter a message.";
  }
});