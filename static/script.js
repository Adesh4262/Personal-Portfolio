const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

function showEducationDetails() {
  alert('You have clicked on the Education section. Here are some details about my education...');
}

const projectBoxes = document.querySelectorAll('.project-box');

projectBoxes.forEach((box) => {
  box.addEventListener('click', () => {
    box.classList.toggle('active'); /* Toggle the 'active' class on click */
  });
});