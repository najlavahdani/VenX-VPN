// menu handling
const menuBtn = document.querySelector('.menu-btn');
const clsBtn = document.querySelector('.close-btn');
var menu = document.querySelector('.mobile-menu');

menuBtn.addEventListener('click', function() {
    menu.classList.toggle('active');

    // menuBtn.style.display = 'none';
    menuBtn.style.display = 'none';
    clsBtn.style.display = 'block';
});


clsBtn.addEventListener('click', function(){
      menu.classList.toggle('active');
      menuBtn.style.display = 'block';
      clsBtn.style.display = 'none'; 
})



//toggle mofal styles
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


