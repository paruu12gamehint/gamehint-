let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    serchform.classList.remove('active');
    cartItem.classList.remove('active');
}

let serchform = document.querySelector('.serch-form');

document.querySelector('#serch-btn').onclick = () =>{
    serchform.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-item-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    serchform.classList.remove('active');
}
window.onscroll = () =>{
    navbar.classList.remove('active');
    serchform.classList.remove('active');
    cartItem.classList.remove('active');



     
}
