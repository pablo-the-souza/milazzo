// Select DOM Items
const menuBtn = document.querySelector('.menu-btn'); //querySelector selects elements of HTML
const menu = document.querySelector('.menu');
const menuNav= document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item'); //querySelector only grabs the first item

// Set Initial State of Menu
let showMenu = false; //let because you want to reassign it at some point

menuBtn.addEventListener('click', toggleMenu); //listen for a click event fires toggleMenu

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close'); //adds a class
        menu.classList.add('show'); 
        menuNav.classList.add('show'); 
        menuBranding.classList.add('show'); 
        navItems.forEach(item => item.classList.add('show')); 

// Set Menu State
showMenu = true; 
    } else {
        menuBtn.classList.remove('close'); //removes a class
        menu.classList.remove('show');
        menuNav.classList.remove('show'); 
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show')); 

//Set Menu State
showMenu = false; 
    }
}