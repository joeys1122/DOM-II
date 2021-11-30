import './less/index.less'

// Your code goes here!

// Makes nav links turn blue when hoovered 
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('mouseenter', e => {
    e.target.style.color = '#17A2B8';
  });
  link.addEventListener('mouseleave', e => {
    e.target.style.color = '#212529';
  });
})

// Inverts the colors of the images if you press 'i'
const images = document.querySelectorAll('img');
document.addEventListener('keydown', e => {
  if (e.key === 'i') {
    images.forEach(img => {
      img.style.filter = 'invert(100%)';
    });
  }
})

// Lets you zoom in and out on images
let scale = 1;
images.forEach(img => {
  img.addEventListener('wheel', e => {
    e.preventDefault();
    scale += e.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    img.style.transform = `scale(${scale})`;
  })
})

// Alerts "Hello World!" when you load the page
window.addEventListener('load', () => alert('Hello World!'));

// Makes the page disappear if you click out of it
window.addEventListener('blur', () => {
  window.document.body.style.display = 'none';
})
window.addEventListener('focus', () => {
  window.document.body.style.display = 'block';
})

// Adds text to the top left that shows the size of the window when you resize it
const newDiv = document.createElement('div')
newDiv.className = 'new-div';
const newSpan = document.createElement('span')
newSpan.className ='new-span';
document.querySelector('.main-navigation').appendChild(newDiv);
document.querySelector('.new-div').appendChild(newSpan);
const span = document.querySelector('.new-span');
window.addEventListener('resize', e => {
  span.textContent = `${window.innerHeight}, ${window.innerWidth}`;
  span.style.fontSize = '2rem';
})