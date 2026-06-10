document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Thank you for contacting Dale! Your message has been received.");

    this.reset();
});
