  
document.getElementById('burger').onclick = function(){
  addMenu()

}
function addMenu(){
  document.getElementById('menu').classList.toggle('show'); //работает в две стороны toolge//
}
addMenu();



(function() {

  'use strict';
 
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    })
