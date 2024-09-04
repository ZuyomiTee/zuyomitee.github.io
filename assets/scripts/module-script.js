document.addEventListener("DOMContentLoaded", function() {
    const containerBoxes = document.querySelectorAll('.container-box');
    const sections = {
        "container-box--resumenes": document.getElementById('section--resumenes'),
        "container-box--tareas": document.getElementById('section--tareas'),
        "container-box--recursos": document.getElementById('section--recursos')
    };

    // Hide all sections on page load
    Object.values(sections).forEach(section => section.style.display = 'none');

    containerBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const targetId = this.id;

            // Hide all sections
            Object.values(sections).forEach(section => section.style.display = 'none');

            // Show the target section
            if (sections[targetId]) {
                sections[targetId].style.display = 'block';
                sections[targetId].scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
