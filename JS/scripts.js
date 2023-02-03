const hamburger = document.querySelector('#openHam');
const closeBtn = document.querySelector('#times');

// Mobile Menu
function show() {
  document.getElementById('cross').style.display = 'block';
}

function hide() {
  document.getElementById('cross').style.display = 'none';
}

hamburger.addEventListener('click', show);
closeBtn.addEventListener('click', hide);

// Form validation
const userEmail = document.querySelector('#email');
const alertMsg = document.querySelector('.alert-Msg');
const contactForm = document.querySelector('.input-Form');

contactForm.addEventListener('submit', (event) => {
  const regex = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  const emailContent = userEmail.value;
  if (regex.test(emailContent)) {
    alertMsg.innerHTML = 'Success';
    alertMsg.style.color = 'green';
  } else {
    alertMsg.innerHTML = 'Email address should all be lower case';
    event.preventDefault();
  }
});

