document.addEventListener('DOMContentLoaded', function(){

    let nav = document.querySelector('.navbar')

    function addShadow(){
        if(window.scrollY>=300){
            nav.classList.add('shadow-bg')
        }else {nav.classList.remove('shadow-bg')}
    }


let navList = document.querySelector('.navbar-collapse')
let navLink = document.querySelectorAll('.nav-link')

navLink.forEach(link=>link.addEventListener('click',()=>
navList.classList.remove('show')))
    


window.addEventListener('scroll', addShadow)
})