const toggleButton = document.getElementById('theme-toggle');
const runningElems = document.querySelector('.live-block');
const heroTextBox = document.querySelector('.hero-text-box');
const orderButton = document.querySelector('.order-button');
const body = document.body;
console.log(orderButton);

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
  runningElems.classList.add('dark-running-theme');
  heroTextBox.classList.add('dark-box');
  orderButton.classList.add('dark-theme-btn');
} else {
  body.classList.add('light-theme');
  runningElems.classList.add('light-running-theme');
  heroTextBox.classList.add('light-box');
  orderButton.classList.add('light-theme-btn');
}

const themeColorToggle = () => {
  toggleButton.classList.toggle('active-btn');
  body.classList.toggle('light-theme');
  body.classList.toggle('dark-theme');
  runningElems.classList.toggle('light-running-theme');
  runningElems.classList.toggle('dark-running-theme');
  heroTextBox.classList.toggle('dark-box');
  heroTextBox.classList.toggle('light-box');
  orderButton.classList.toggle('dark-theme-btn');
  orderButton.classList.toggle('light-theme-btn');

  body.classList.contains('dark-theme')
    ? localStorage.setItem('theme', 'dark')
    : localStorage.setItem('theme', 'light');
};

toggleButton.addEventListener('click', themeColorToggle);
export default themeColorToggle;
