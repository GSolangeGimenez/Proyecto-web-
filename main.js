document.addEventListener('DOMContentLoaded',() =>{
 const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 150,
        dist:-90,
        shift: 9,
        padding: 5,
        numVisible: 4,
        indicators: true,
        nowrap: true,
    });
 });
 