// menu handling
const menuBtn = document.querySelector('.menu-btn');
const clsMenuBtn = document.querySelector('.close-btn');
const menu = document.querySelector('.mobile-menu');

menuBtn.addEventListener('click', function() {
    mobileMenu.style.left = '-100%';
    // menuBtn.style.display = 'none';
    menuBtn.style.display = 'none';
    clsMenuBtn.style.display = 'block';
});


clsMenuBtn.addEventListener('click', function(){
      mobileMenu.style.left = '0';
      menuBtn.style.display = 'block';
      clsMenuBtn.style.display = 'none'; 
})

//close menu when click on each list item
const menuItems = document.querySelectorAll('.list-item');
menuItems.forEach(menuItem => {
  menuItem.addEventListener('click', function(){
    mobileMenu.style.left = '0';
    menuBtn.style.display = 'block';
    clsMenuBtn.style.display = 'none'; 
  })
});

// Function to handle scroll events
function handleScroll() {
  // Check the current scroll position
  const scrollPosition = window.scrollY;

  // If the scroll position is 5rem (80px) or more, hide the mobile menu
  if (scrollPosition >= 5 * parseFloat(getComputedStyle(document.documentElement).fontSize)) {
    mobileMenu.style.left = '0';
    menuBtn.style.display = 'block';
    clsMenuBtn.style.display = 'none'; 
  } 
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);




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



