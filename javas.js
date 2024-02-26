const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click' , () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

modeToggle.addEventListener('click', ()=>{
    modeToggle.classList.toggle('active');
    body.classList.toggle('dark');
});e


  
