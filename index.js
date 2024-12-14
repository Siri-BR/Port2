// //index.js

// const hamburger = document.getElementById('hamburger'); 
// const menu = document.querySelector('.menu'); 

// hamburger.addEventListener('click', function () { 
//     const hamIcon = this.querySelector('.hamburger-icon'); 
//     const crossIcon = this.querySelector('.cross-icon'); 
//     if (hamIcon.style.display === "none") { 
//         hamIcon.style.display = "inline-block"
//         menu.style.display = "none"
//         crossIcon.style.display = "none"
//     } 
//     else { 
//         crossIcon.style.display = "inline-block"
//         hamIcon.style.display = "none"
//         menu.style.display = "block"
//     } 
// });
const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 
const hamIcon = document.querySelector('.hamburger-icon');
const crossIcon = document.querySelector('.cross-icon');

// Add transition effect to menu
menu.style.transition = 'transform 0.3s ease-out';

hamburger.addEventListener('click', function () { 
    // Toggle menu visibility with a smoother transition
    if (menu.classList.contains('open')) { 
        hamIcon.style.display = "inline-block";
        crossIcon.style.display = "none";
        menu.classList.remove('open');
        menu.style.transform = 'translateX(-100%)'; // Slide out
    } else { 
        crossIcon.style.display = "inline-block";
        hamIcon.style.display = "none";
        menu.classList.add('open');
        menu.style.transform = 'translateX(0)'; // Slide in
    } 
});
