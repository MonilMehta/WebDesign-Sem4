const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');

let currentIndex=0;

function showSlide()
{
    slides.forEach((slide)=>{
        slide.style.display='none';
    })
    slides[currentIndex].style.display="block";
}
function nextSlide()
{
    console.log('next');
    currentIndex++;
    if(currentIndex>=slides.length)
    {
        currentIndex=0;
    }
    showSlide();
}
function prevSlide()
{
    console.log('prev');
    currentIndex--;
    if(currentIndex<0)
    {
        currentIndex=slides.length-1;
    }
    showSlide();
}
showSlide();

document.querySelector('.next-btn').addEventListener('click', nextSlide);
document.querySelector('.prev-btn').addEventListener('click', prevSlide);