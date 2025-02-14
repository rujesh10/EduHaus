document.getElementById('no-btn').addEventListener('mouseover', function() {
    const x = Math.random() * (window.innerWidth - this.offsetWidth);
    const y = Math.random() * (window.innerHeight - this.offsetHeight);
    this.style.position = 'absolute';
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});

document.getElementById('yes-btn').addEventListener('click', function() {
    window.location.href = 'yes-page.html'; // Redirect to a new page
});