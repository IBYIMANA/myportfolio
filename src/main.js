document.addEventListener('DOMContentLoaded', function() {
    const paragraph = document.getElementById('colorCycleParagraph');
    let colorIndex = 0;
    const colors = ['red', 'green', 'blue'];

    paragraph.addEventListener('mouseover', function() {
        colorIndex = (colorIndex + 1) % colors.length;
        paragraph.style.color = colors[colorIndex];
    });

    paragraph.addEventListener('mouseout', function() {
        paragraph.style.color = 'white';
    });
});