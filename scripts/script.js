//vanilla javascript here

const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const sec = document.querySelector('.first-sec')

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        sec.classList.toggle('vj');
        
        navLinks.forEach((link, index)=>{
            if (link.style.animation){
                link.style.animation = '';
            }else {
                link.style.animation = `navlinkFade 0.5s ease forwards  ${index /5 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');

    });

}

navSlide();


