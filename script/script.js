function drop() {
    var x = document.querySelector('.dropdown');
    if (x.style.display === 'block' || x.style.display === '') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}
