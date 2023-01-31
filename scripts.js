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
