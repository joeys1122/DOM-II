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

// // Alerts "Hello World!" when you load the page
window.addEventListener('load', () => alert('Hello World!'));

// Makes the page disappear if you click out of it
window.addEventListener('blur', () => {
  window.document.body.style.display = 'none';
})
window.addEventListener('focus', () => {
  window.document.body.style.display = 'block';
})

// // Adds text to the top left that shows the size of the window when you resize it
const newDiv = document.createElement('div')
newDiv.className = 'new-div';
const newSpan = document.createElement('span')
newSpan.className ='new-span';

document.querySelector('.main-navigation').appendChild(newDiv);
document.querySelector('.new-div').appendChild(newSpan);

window.addEventListener('resize', () => {
  newSpan.textContent = `${window.innerHeight}, ${window.innerWidth}`;
  newSpan.style.fontSize = '2rem';
})

// Adds a button that takes you to the top of the page
const newBtn = document.createElement('button');
newBtn.textContent = 'TOP';
newBtn.style.display = 'none';
newBtn.style.width = '50px';
newBtn.style.height = '50px';
newBtn.style.border = '1px solid #C0C0C0';
newBtn.style.cursor = 'pointer';
newBtn.style.color = 'white';
newBtn.style.backgroundColor = '#17A2B8';

document.querySelector('.main-navigation').appendChild(newBtn);

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    newBtn.style.display = 'block';
  } else {
    newBtn.style.display = 'none';
  }
})

newBtn.addEventListener('click', () => {
  window.scrollTo(0, 0);
})

//