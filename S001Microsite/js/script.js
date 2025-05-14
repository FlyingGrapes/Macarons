
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        tabContents[index].classList.add('active');
    });
    });
});

document.addEventListener("DOMContentLoaded", function () {
$("#reflections").turn({
    width: 800,
    height: 500,
    autoCenter: true,
    gradients: true,
    elevation: 50,
});

});
    
