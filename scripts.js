let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
let menuicon = document.querySelector('#menu-icon');

// navbar button option selection
window.onscroll = ()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset +height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        }
    });
}


// scroll reveal
ScrollReveal({
    reset:true,
    distance:'40px',
    duration: 1000,
    delay:100
});
ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.skills-box,.project-box,.form-section',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});


//typed js at home
var typed = new Typed(".auto-type",{
    strings:['App Developer','Frontend Developer','programmer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
});
