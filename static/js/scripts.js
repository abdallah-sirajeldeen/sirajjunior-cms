

document.addEventListener('DOMContentLoaded', function() {


    // const videoData = [
    //     {
    //         title: "Video 1",
    //         imgSrc: "images/hero_1.jpg",
    //         description: "Description for video 1."
    //     },
    //     {
    //         title: "Video 1",
    //         imgSrc: "{% static 'images/hero_1.jpg'%}",
    //         description: "Description for video 1."
    //     },
    //     {
    //         title: "Video 1",
    //         imgSrc: "{% static 'images/hero_1.jpg'%}",
    //         description: "Description for video 1."
    //     },
    //     {
    //         title: "Video 1",
    //         imgSrc: "{% static 'images/hero_1.jpg'%}",
    //         description: "Description for video 1."
    //     },
    //     {
    //         title: "Video 5",
    //         imgSrc: "{% static 'images/hero_1.jpg'%}",
    //         description: "Description for video 1."
    //     },
    //
    //     // ... add more videos as needed
    // ];

    const articleSlider = document.getElementById('articleSlider');
    const videoSlider = document.getElementById('videoSlider');

    for (const data of articleData) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${data.categoryIcon}" alt="${data.title} Icon">
            <h3>${data.title}</h3>
        `;
        articleSlider.appendChild(card);
    }

    for (const data of videoData) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${data.imgSrc}" alt="${data.title}">
            <h3>${data.title}</h3>
            <p>${data.description}</p>
        `;
        videoSlider.appendChild(card);
    }

    // Drag to scroll functionality
    function dragToScroll(slider) {
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX);
            slider.scrollLeft = scrollLeft - walk;
        });
    }

    const sliders = document.querySelectorAll('.slider-container');
    sliders.forEach(slider => {
        dragToScroll(slider);
    });
});
