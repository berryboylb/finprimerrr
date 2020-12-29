//we are just animating here

let tl = gsap.timeline({defaults:{duration: 1.5, toggleActions: "none none none none"}});

tl.from('.h3', {x:-300, opacity: 0, ease: 'bounce',})
    .from('.logo', {x:300,  opacity: 0, ease: 'bounce',}, "-=1.5")
    .from('.p', {x:-300,  opacity: 0, ease: 'bounce',}, "-=0.5")
    .from('.div-email', {x:-300, opacity: 0, ease: 'elastic', duration: 2,}, "-=0.5")
    .from('.div-pass', {x:-300, opacity: 0, ease: 'elastic', duration: 2,}, "-=1.5")
    .from('#submit', {x:-300, opacity: 0, ease: 'elastic', duration: 2,}, "-=1.5")
    .from('.sign', {x:300, opacity: 0, ease: 'elastic', duration: 2,}, "-=1.5")
    .from('.log', {x:300, opacity: 0, ease: 'elastic', duration: 2,}, "-=1.5")
    .from('.ton', {x:300, opacity: 0, ease: 'back',}, "-=2.5")
    .from('.button', {x:300, opacity: 0, ease: 'back',}, "-=2.1")
    .from('.cc-icons', {x:300, y:50, opacity: 0, ease: 'Rough',}, "-=1.5")
    .from('.options', {x:300, y:50, opacity: 0, ease: 'Rough',}, "-=1.5")