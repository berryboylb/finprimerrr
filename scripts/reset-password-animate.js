//we are just animating here

let tl = gsap.timeline({defaults:{duration: 1.5, toggleActions: "none none none none"}});

tl.from('.logo', {x:-300, opacity: 0, ease: 'bounce',})
    .from('.h3', {x:-300, opacity: 0, ease: 'elastic', duration: 2,})
    .from('.button', {x:-300, opacity: 0, ease: 'back',}, "-=1.5")
    .from('.cc-icons', {x:300, y:50, opacity: 0, ease: 'Rough',}, "-=1.5")
    .from('.h3-2', {x:300,  opacity: 0, ease: 'bounce',}, "-=2.5")
    .from('.p', {x:300,  opacity: 0, ease: 'bounce',}, "-=1.5")
    .from('.div-email', {x:100, opacity: 0, ease: 'elastic', duration: 2,}, "-=1.5")
    .from('#submit', {x:100, opacity: 0, ease: 'elastic', duration: 2,}, "-=1.5")
    .from('.sign', {x:100, opacity: 0, ease: 'elastic', duration: 2,}, "-=1.5")