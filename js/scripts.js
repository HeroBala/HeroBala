// First typing effect for the array of texts
const texts = [
    "I am a Data Engineer with a strong foundation in Python programming, SQL, and data analytics.",
    "I am passionate about optimizing high-performance data platforms.",
    "I have a keen interest in UI and UX design, creating intuitive and user-friendly interfaces.",
    "I am exploring the fascinating world of Machine Learning and Artificial Intelligence.",
    "I enjoy solving complex problems and turning data into actionable insights."
];
let textIndex = 0;
let charIndex = 0;
const typingEffect = document.getElementById("typing-effect");

function type() {
    if (charIndex < texts[textIndex].length) {
        typingEffect.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 90); // Adjust typing speed here
    } else {
        setTimeout(() => {
            typingEffect.textContent = ""; // Clear text for the next sentence
            charIndex = 0;
            textIndex = (textIndex + 1) % texts.length; // Loop back to the first sentence
            type();
        }, 1000); // Pause before starting the next sentence
    }
}

type();

// // Second typing effect for the title string "Data Engineer | Electrical Engineer | Innovator"
// const titles = "Data Engineer | Electrical Engineer | Innovator";
// let titleIndex = 0;
// const titleEffect = document.getElementById("title-effect");

// function typeTitle() {
//     if (titleIndex < titles.length) {
//         titleEffect.textContent += titles.charAt(titleIndex);
//         titleIndex++;
//         setTimeout(typeTitle, 120); // Adjust typing speed here
//     } else {
//         setTimeout(() => {
//             titleEffect.textContent = ""; // Clear text for looping
//             titleIndex = 0;
//             typeTitle();
//         }, 2000); // Pause before restarting the title effect
//     }
// }

// typeTitle();

// JavaScript for opening and closing the overlay
const hamburger = document.getElementById('hamburger');
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('close-overlay');

// Open overlay when hamburger is clicked
hamburger.addEventListener('click', () => {
    overlay.classList.toggle('active');
});

// Close overlay when close button (×) is clicked
closeButton.addEventListener('click', () => {
    overlay.classList.remove('active');
});

// Close overlay when clicking outside of the overlay content
overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        overlay.classList.remove('active');
    }
});

// JavaScript for smooth scrolling to sections with animation
const links = document.querySelectorAll('a[href^="#about"], a[href^="#projects"], a[href^="#contact"]');
links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Add animation class to the target section
            targetSection.classList.add('animate-section');
            // Remove the animation class after the animation ends
            setTimeout(() => {
                targetSection.classList.remove('animate-section');
            }, 1000); // Adjust duration to match your CSS animation
        }
    });
});

// JavaScript for form validation   
// This is a simple client-side validation for the contact form
// It checks if all fields are filled and validates the email format

document.getElementById('contact-form').onsubmit = function(event) {
    const name = document.querySelector('[name="name"]').value;
    const email = document.querySelector('[name="email"]').value;
    const message = document.querySelector('[name="message"]').value;

    // Simple client-side validation
    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        event.preventDefault(); // Stop form submission
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault(); // Stop form submission
    }
};


