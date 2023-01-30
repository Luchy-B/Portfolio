const hamburger = document.querySelector('#openHam');
const closeBtn = document.querySelector('#times');

// Mobile Menu
function show() {
  document.getElementById('cross').style.display = 'block';
  document.body.style.overflowY = 'hidden';
}

function hide() {
  document.getElementById('cross').style.display = 'none';
  document.body.style.overflowY = 'scroll';
}

hamburger.addEventListener('click', show);
closeBtn.addEventListener('click', hide);
