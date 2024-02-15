// menu handling
var menuBtn = document.querySelectorAll('.menu-btn');

menuBtn.forEach(function(menuBtn) {
    menuBtn.addEventListener('click', function() {
        var menu = document.querySelector('.mobile-menu');
        menu.classList.toggle('active');
    });
});

function toggleModal(){
  const modal = document.querySelector('.modal-container');
  if(modal.style.top === '-100rem'){
    modal.style.top = '1rem';
  } else if(modal.style.top = '1rem') {
    modal.style.top = '-100rem';
  }
}


// Get a reference to the mobile menu element
const mobileMenu = document.querySelector('.mobile-menu');

// Function to handle scroll events
function handleScroll() {
  // Check the current scroll position
  const scrollPosition = window.scrollY;

  // If the scroll position is 5rem (80px) or more, hide the mobile menu
  if (scrollPosition >= 5 * parseFloat(getComputedStyle(document.documentElement).fontSize)) {
    mobileMenu.style.display = 'none';
  } 
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);
