document.addEventListener('DOMContentLoaded', ()=> {

 let elBurger = document.getElementById('burger');
 let elNavLinks = document.getElementById('navLinks');
 let elDropBtns = document.getElementsByClassName('dropdown');

 elBurger.addEventListener('click', ()=> {
  elBurger.classList.toggle('burgX');
  elNavLinks.classList.toggle('showNav');
 })

 if (elDropBtns.length){
  for (let i = 0; i < elDropBtns.length; i++){
   elDropBtns[i].addEventListener('click', (e)=> {
    if (e.currentTarget.lastElementChild.style.display === "none") {  
     e.currentTarget.lastElementChild.style.display = "block";  
    } else {
     e.currentTarget.lastElementChild.style.display = "none";
    }	
   })
  }
 }


})

