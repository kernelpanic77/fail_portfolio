const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBrand = document.querySelector('.menu-brand');
const menuNav = document.querySelector('.menu-nav');
const NavItems = document.querySelectorAll('.nav-item');



let showMenu =  false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuBrand.classList.add('show');
        NavItems.forEach(item => item.classList.add('show'));
        showMenu = true;

    }
    else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuBrand.classList.remove('show');
        NavItems.forEach(item => item.classList.remove('show'));
        showMenu = false;
    }
}