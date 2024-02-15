// menu handling
const menuBtn = document.querySelector('.menu-btn');
const clsBtn = document.querySelector('.close-btn');
const menu = document.querySelector('.mobile-menu');

menuBtn.addEventListener('click', function() {
    mobileMenu.style.left = '-100%';
    // menuBtn.style.display = 'none';
    menuBtn.style.display = 'none';
    clsBtn.style.display = 'block';
});


clsBtn.addEventListener('click', function(){
      mobileMenu.style.left = '0';
      menuBtn.style.display = 'block';
      clsBtn.style.display = 'none'; 
})

// Function to handle scroll events
function handleScroll() {
  // Check the current scroll position
  const scrollPosition = window.scrollY;

  // If the scroll position is 5rem (80px) or more, hide the mobile menu
  if (scrollPosition >= 5 * parseFloat(getComputedStyle(document.documentElement).fontSize)) {
    mobileMenu.style.left = '0';
    menuBtn.style.display = 'block';
    clsBtn.style.display = 'none'; 
  } 
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);




//toggle modal styles
// function toggleModal(){
//   const modal = document.querySelector('.modal-container');
//   if(modal.style.top === '-100rem'){
//     modal.style.top = '1rem';
//   } else if(modal.style.top = '1rem') {
//     modal.style.top = '-100rem';
//   }
// }

const modal = document.querySelector('.modal-container');
const pricingBtn = document.querySelectorAll('.pricing-btn');
pricingBtn.forEach(pricingBtn => {
  pricingBtn.addEventListener('click', function(){
    modal.style.opacity = '1';
    modal.style.top = '5rem';
  })
});

const clsModalBtn = document.querySelector('.close-modal-btn');
clsModalBtn.addEventListener('click', function(){
  modal.style.opacity = '0';
  modal.style.top = '-110rem';
})

// Get a reference to the mobile menu element
const mobileMenu = document.querySelector('.mobile-menu');


