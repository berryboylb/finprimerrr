//we are just animating here

let tl = gsap.timeline({defaults:{duration: 1.5, toggleActions: "none none none none"}});

tl.from('.logo', {x:-300, opacity: 0, ease: 'bounce',})
    .from('.h3', {x:300,  opacity: 0, ease: 'bounce',}, "-=1.5")
    .from('.h3-2', {x:300, opacity: 0, ease: 'elastic', duration: 2,})
    .from('.p', {x:300,  opacity: 0, ease: 'elastic',}, "-=1.7")
    .from('.name', {x:300, opacity: 0, ease: 'elastic', duration: 2,}, "-=1.5")
    .from('.div-email', {x:300, opacity: 0, ease: 'elastic', duration: 2,}, "-=1.5")
    .from('.div-pass', {x:300, opacity: 0, ease: 'elastic', duration: 2,}, "-=1.5")
    .from('.div-con-pass', {x:300, opacity: 0, ease: 'elastic', duration: 2,}, "-=1.5")
    .from('#submit', {x:300, opacity: 0, ease: 'elastic', duration: 2,}, "-=1.5")
    .from('.sign', {x:300, opacity: 0, ease: 'elastic', duration: 2,}, "-=1.5")
    .from('.button', {x:-300, opacity: 0, ease: 'back',}, "-=1.5")
    .from('.hr-s', {x:300, opacity: 0, ease: 'elastic', duration: 2,}, "-=1.5")
    .from('.cc-icons', {x:300, y:50, opacity: 0, ease: 'Rough',}, "-=1.5")
    .from('.options', {x:300, y:50, opacity: 0, ease: 'Rough',}, "-=1.5")
    