// Gallery Switch Function
function showGallery(type) {
    document.querySelectorAll('.gallery').forEach(gallery => {
        gallery.classList.remove('active');
    });
    document.getElementById(type).classList.add('active');
}
