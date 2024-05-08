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
    error.innerHTML = "Message submitted.";
  } else if ( button === e.target && username.value === '' && email.value !== '' && message.value !== '' ) {
    e.preventDefault();
    error.innerHTML = "Please enter your name.";
    username.style.borderLeftColor = 'red';
    username.style.borderLeftWidth = '2px';
    email.style.borderLeftColor = 'rgba(255, 255, 255, .3)';
    email.style.borderLeftWidth = '1px';
    message.style.borderLeftColor = 'rgba(255, 255, 255, .3)';
    message.style.borderLeftWidth = '1px';
  } else if ( button === e.target && username.value !== '' && email.value === '' && message.value !== '' ) {
    e.preventDefault();
    error.innerHTML = "Please enter your email.";
    email.style.borderLeftColor = 'red';
    email.style.borderLeftWidth = '2px';
    username.style.borderLeftColor = 'rgba(255, 255, 255, .3)';
    username.style.borderLeftWidth = '1px';
    message.style.borderLeftColor = 'rgba(255, 255, 255, .3)';
    message.style.borderLeftWidth = '1px';
  } else if ( button === e.target && username.value !== '' && email.value !== '' && message.value === '' ) {
    e.preventDefault();
    error.innerHTML = "Please enter your message.";
    message.style.borderLeftColor = 'red';
    message.style.borderLeftWidth = '2px';
    username.style.borderLeftColor = 'rgba(255, 255, 255, .3)';
    username.style.borderLeftWidth = '1px';
    email.style.borderLeftColor = 'rgba(255, 255, 255, .3)';
    email.style.borderLeftWidth = '1px';
  } else if ( button === e.target && username.value === '' && email.value === '' && message.value !== '' ) {
    e.preventDefault();
    error.innerHTML = "Please enter your name.<br>Please enter your email.";
    username.style.borderLeftColor = 'red';
    username.style.borderLeftWidth = '2px';
    email.style.borderLeftColor = 'red';
    email.style.borderLeftWidth = '2px';
    message.style.borderLeftColor = 'rgba(255, 255, 255, .3)';
    message.style.borderLeftWidth = '1px';
  } else if ( button === e.target && username.value === '' && email.value === '' && message.value === '' ) {
    e.preventDefault();
    error.innerHTML = "Please enter your name.<br>Please enter your email.<br>Please enter your message.";
    username.style.borderLeftColor = 'red';
    username.style.borderLeftWidth = '2px';
    email.style.borderLeftColor = 'red';
    email.style.borderLeftWidth = '2px';
    message.style.borderLeftColor = 'red';
    message.style.borderLeftWidth = '2px';
  } else if ( button === e.target && username.value !== '' && email.value === '' && message.value === '' ) {
    e.preventDefault();
    error.innerHTML = "Please enter your email.<br>Please enter your message.";
    email.style.borderLeftColor = 'red';
    email.style.borderLeftWidth = '2px';
    message.style.borderLeftColor = 'red';
    message.style.borderLeftWidth = '2px';
    username.style.borderLeftColor = 'rgba(255, 255, 255, .3)';
    username.style.borderLeftWidth = '1px';
  } else if ( button === e.target && username.value === '' && email.value !== '' && message.value === '' ) {
    e.preventDefault();
    error.innerHTML = "Please enter your name.<br>Please enter your message.";
    username.style.borderLeftColor = 'red';
    username.style.borderLeftWidth = '2px';
    message.style.borderLeftColor = 'red';
    message.style.borderLeftWidth = '2px';
    email.style.borderLeftColor = 'rgba(255, 255, 255, .3)';
    email.style.borderLeftWidth = '1px';
  }
});
