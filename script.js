document.getElementById('angleSlider').addEventListener('input', function(e) {
    let angle = e.target.value;
    let needle = document.getElementById('needle');
    needle.style.transform = `rotate(${angle}deg)`;
});
