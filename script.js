//غیرفعال کردن inspect
// document.addEventListener('contextmenu', function(event) {
//     event.preventDefault();
// });
 
   
//      document.addEventListener('keydown', function(event) {
//         if (event.key === "F12") {
//             event.preventDefault(); 
//         }
//     });

//     document.addEventListener('keydown', function(event) {
//         if (event.key === "F12" || 
//             (event.ctrlKey && event.shiftKey && event.key == 'i') || 
//             (event.ctrlKey && event.shiftKey && event.key == 'j') || 
//             (event.ctrlKey && event.key === 'u')) {
//             event.preventDefault();
//         }
//     });
//غیرفعال کردن inspect



gsap.registerPlugin(ScrollTrigger);

// انیمیشن برای هدر
gsap.from("header", {
y: -100,
opacity: 0,
duration: 1,
ease: "power3.out"
});

// انیمیشن برای متن ها
gsap.from(".hero h1 , .hero p , .section h2 , .section h4   ", {
y: 50,
opacity: 0,
duration: 1,
stagger: 0.3,
ease: "power3.out"

});

// انیمیشن برای پروژه‌ها
gsap.from(".project-item" ,  {
scrollTrigger: {
trigger: "#projects",
start: "top 80%"
},
y: 50,
opacity: 0,
duration: 0.8,
stagger: 0.2,
ease: "power3.out"
});


// انیمیشن برای فرم تماس
gsap.from(".contact-form", {
scrollTrigger: {
trigger: "#contact",
start: "top 80%"
},
y: 50,
opacity: 0,
duration: 0.8,
ease: "power3.out"
});






particlesJS("particles-container", {
    "particles": {
    "number": {
    "value": 80,
    "density": {
    "enable": true,
    "value_area": 800
    }
    },
    "color": {
    "value": "#ffffff"
    },
    "shape": {
    "type": "circle",
    "stroke": {
    "width": 0,
    "color": "#000000"
    },
    "polygon": {
    "nb_sides": 5
    }
    },
    "opacity": {
    "value": 0.5,
    "random": false,
    "anim": {
    "enable": false,
    "speed": 1,
    "opacity_min": 0.1,
    "sync": false
    }
    },
    "size": {
    "value": 3,
    "random": true,
    "anim": {
    "enable": false,
    "speed": 40,
    "size_min": 0.1,
    "sync": false
    }
    },
    "line_linked": {
    "enable": true,
    "distance": 150,
    "color": "#ffffff",
    "opacity": 0.4,
    "width": 1
    },
    "move": {
    "enable": true,
    "speed": 6,
    "direction": "none",
    "random": false,
    "straight": false,
    "out_mode": "out",
    "bounce": false,
    "attract": {
    "enable": false,
    "rotateX": 600,
    "rotateY": 1200
    }
    }
    },
    "interactivity": {
    "detect_on": "canvas",
    "events": {
    "onhover": {
    "enable": true,
    "mode": "repulse"
    },
    "onclick": {
    "enable": true,
    "mode": "push"
    },
    "resize": true
    },
    "modes": {
    "grab": {
    "distance": 400,
    "line_linked": {
    "opacity": 1
    }
    },
    "bubble": {
    "distance": 400,
    "size": 40,
    "duration": 2,
    "opacity": 8,
    "speed": 3
    },
    "repulse": {
    "distance": 200,
    "duration": 0.4
    },
    "push": {
    "particles_nb": 4
    },
    "remove": {
    "particles_nb": 2
    }
    }
    },
    "retina_detect": true
    });



