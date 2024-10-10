const toggleButton = document.getElementById('theme-toggle');
const runningElems = document.querySelector('.live-block');
const heroTextBox = document.querySelector('.hero-text-box');
const orderButton = document.querySelector('.order-button');
const body = document.body;

const addClassList = (element, darkClass, lightClass) =>
  localStorage.getItem('theme') === 'dark'
    ? element.classList.add(darkClass)
    : element.classList.add(lightClass);

const toggleClassList = (element, darkClass, lightClass) => {
  element.classList.toggle(darkClass);
  element.classList.toggle(lightClass);
};

const themeColorToggle = () => {
  toggleButton.classList.toggle('active-btn');
  toggleClassList(body, 'dark-theme', 'light-theme');
  toggleClassList(runningElems, 'dark-running-theme', 'light-running-theme');
  toggleClassList(heroTextBox, 'dark-box', 'light-box');
  toggleClassList(orderButton, 'dark-theme-btn', 'light-theme-btn');

  body.classList.contains('dark-theme')
    ? localStorage.setItem('theme', 'dark')
    : localStorage.setItem('theme', 'light');
};

addClassList(body, 'dark-theme', 'light-theme');
addClassList(runningElems, 'dark-running-theme', 'light-running-theme');
addClassList(heroTextBox, 'dark-box', 'light-box');
addClassList(orderButton, 'dark-theme-btn', 'light-theme-btn');

toggleButton.addEventListener('click', themeColorToggle);
export default themeColorToggle;
