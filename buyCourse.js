document.getElementById('addCard').addEventListener('click', function() {
    document.getElementById('cardPanel').style.display ='block';
    document.body.insertAdjacentHTML('beforeend', '<div class="overlay" id="overlay"></div>');
    document.getElementById('overlay').style.display = 'block';
});

document.addEventListener('click', function(event) {
    const panel = document.getElementById('cardPanel');
    const overlay = document.getElementById('overlay');

    if (overlay && event.target === overlay) {
        panel.style.display = 'none';
        overlay.remove();
    }
})