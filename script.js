// script.js

// Falling mangoes effect
const createMango = () => {
    const mango = document.createElement('div');
    mango.classList.add('mango');
    mango.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(mango);

    setTimeout(() => {
        mango.style.top = window.innerHeight + 'px';
    }, 100);

    setTimeout(() => {
        mango.remove();
    }, 5000);
};

setInterval(createMango, 1000);  // create a mango every second

// Old woman animation
const oldWoman = document.getElementById('old-woman');
setInterval(() => {
    oldWoman.classList.toggle('animated');
}, 2000);

// WhatsApp button functionality
const whatsappButton = document.getElementById('whatsapp-button');
whatsappButton.addEventListener('click', () => {
    window.open('https://wa.me/1234567890', '_blank');
});

// Interactive elements
const interactiveElements = document.querySelectorAll('.interactive');
interactiveElements.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.classList.add('hover');
    });
    element.addEventListener('mouseout', () => {
        element.classList.remove('hover');
    });
});
