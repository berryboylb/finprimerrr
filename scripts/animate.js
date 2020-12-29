//we are just animating here

let tl = gsap.timeline({defaults:{duration: 1.5, toggleActions: "none none none none"}});

tl.from('nav', {y:-100, opacity: 0, ease: 'bounce',})
    .from('nav ul li', {stagger: 0.1, opacity: 0})
    .from('.test', {x: -100, opacity: 0, duration:3,  ease: 'elastic'}, "-=1.5")
    .from('.first-sec-in button', {x: -100, opacity: 0, ease: 'elastic'}, "-=1.5")
    .from('.files-svg', {x: 100, opacity: 0, ease: 'expo', rotation: 180}, "-=2.5")
    .from('.dot-svg', {x: 100, opacity: 0, ease: 'expo'}, "-=2.5")
    .from('.second-sec-in button', {x: -200, opacity: 0, ease: 'back', }, "-=1.5")
    
    
    gsap.from(".second-sec .second-sec-div1 .People-image", {
        scrollTrigger: {trigger:".second-sec-div1", toggleActions: "restart none none none"}, // start the animation when ".box" enters the viewport (once)
        x: 300, ease: 'back', duration: 3, opacity: 0
      });

      gsap.from(".second-sec-div2 .about", {
        scrollTrigger: {trigger:".about", toggleActions: "restart none none none"}, // start the animation when ".box" enters the viewport (once)
        x: -300, ease: 'back', duration: 3, opacity: 0
      });

      gsap.from(".third-sec h2", {
        scrollTrigger: {trigger:".third-sec", toggleActions: "restart none none none"}, // start the animation when ".box" enters the viewport (once)
        x: 300, y: 200, ease: 'Rough', duration: 1, opacity: 0, scale : 2
      });

      gsap.from(".third-sec .third-sec-in div", {
        scrollTrigger: {trigger:".third-sec .third-sec-in div", toggleActions: "restart none none none"}, // start the animation when ".box" enters the viewport (once)
         ease: 'elastic', duration: 2, opacity: 0, scale: 2, stagger: 1
      });

      gsap.from(".fourth-sec .fourth-sec-1", {
        scrollTrigger: {trigger:".fourth-sec-1", toggleActions: "restart none none none"}, // start the animation when ".box" enters the viewport (once)
         ease: 'back', duration: 2, opacity: 0, x: -200, 
      });

      gsap.from(".fourth-sec .fourth-sec-2", {
        scrollTrigger: {trigger:".fourth-sec-2", toggleActions: "restart none none none"}, // start the animation when ".box" enters the viewport (once)
         ease: 'back', duration: 2, opacity: 0, x: 200, 
      });

      gsap.from(".fourth-sec .fourth-sec-3", {
        scrollTrigger: {trigger:".fourth-sec-3", toggleActions: "restart none none none"}, // start the animation when ".box" enters the viewport (once)
         ease: 'back', duration: 2, opacity: 0, x: -200, 
      });

      gsap.from(".fifth-sec h1", {
        scrollTrigger: {trigger:".fifth-sec h1", toggleActions: "restart none none none"}, // start the animation when ".box" enters the viewport (once)
         ease: 'elastic', duration: 2, opacity: 0, x: -200, 
      });

      gsap.from(".fifth-sec button", {
        scrollTrigger: {trigger:".fifth-sec button", toggleActions: "restart none none none"}, // start the animation when ".box" enters the viewport (once)
         ease: 'elastic', duration: 2, opacity: 0, x: 200, 
      });

      gsap.from(".fifth-sec .fifth-sec-in p", {
        scrollTrigger: {trigger:".fifth-sec-in p", toggleActions: "restart none none none"}, // start the animation when ".box" enters the viewport (once)
         ease: 'elastic', duration: 2, opacity: 0, x: 200, stagger: 0.5
      });

      gsap.from(".sixth-sec .sixth-sec-1 img", {
        scrollTrigger: {trigger:".sixth-sec-1 img", toggleActions: "restart none none none"}, // start the animation when ".box" enters the viewport (once)
         ease: 'elastic', duration: 2, opacity: 0, x: -200, 
      });

      gsap.from(".sixth-sec .sixth-sec-2", {
        scrollTrigger: {trigger:".sixth-sec-2", toggleActions: "restart none none none"}, // start the animation when ".box" enters the viewport (once)
         ease: 'elastic', duration: 2, opacity: 0, x: 200, 
      });


      