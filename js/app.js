let navbar= document.querySelector('.navbar');


document.querySelector('#menu-btn').onclick=() =>{
    navbar.classList.toggle('active'); 
    _cartItem.classList.remove('active'); 
    _searchForm.classList.remove('active'); 
}

let _cartItem= document.querySelector('.cart-items-container');


document.querySelector('#cart-btn').onclick=() =>{
    _cartItem.classList.toggle('active'); 
    navbar.classList.remove('active'); 
    _searchForm.classList.remove('active'); 
}
let _searchForm= document.querySelector('.search-form');


document.querySelector('#search-btn').onclick=() =>{
    _searchForm.classList.toggle('active'); 
    _cartItem.classList.remove('active'); 
    navbar.classList.remove('active'); 
}


window.onscroll = () =>{
    navbar.classList.remove('active');
    _searchForm.classList.remove('active');
    _cartItem.classList.remove('active');
}


