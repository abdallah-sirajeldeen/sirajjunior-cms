document.addEventListener('DOMContentLoaded', function() {
    const homepage = document.querySelector('.homepage');

    homepage.addEventListener('mouseover', function() {
        homepage.style.transform = 'translateY(-5px)';
        homepage.style.boxShadow = '0px 5px 20px rgba(0, 0, 0, 0.15)';
    });

    homepage.addEventListener('mouseout', function() {
        homepage.style.transform = 'translateY(0)';
        homepage.style.boxShadow = '0px 0px 15px rgba(0, 0, 0, 0.1)';
    });
});
