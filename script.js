// ===============================
// ATUL KNOWLEDGE POINT
// script.js
// ===============================

// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Admission Form
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function(e) {

        e.preventDefault();

        alert("✅ Admission Form Submitted Successfully!");

        form.reset();

    });
}

// Gallery Click
document.querySelectorAll(".gallery img").forEach(img => {

    img.addEventListener("click", function() {

        window.open(this.src, "_blank");

    });

});

// Card Animation
document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// Scroll Animation
window.addEventListener("scroll", function() {

    document.querySelectorAll("section").forEach(section => {

        const position = section.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0px)";

        }

    });

});

// Initial Animation
document.querySelectorAll("section").forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "0.8s";

});

// Back To Top Button
const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "20px";
topBtn.style.bottom = "20px";
topBtn.style.width = "55px";
topBtn.style.height = "55px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#005bea";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "24px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function() {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

// Welcome Message
window.onload = function(){

    console.log("ATUL KNOWLEDGE POINT Website Loaded Successfully.");

};
