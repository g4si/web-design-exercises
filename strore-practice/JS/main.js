let slideIndex = 1; 

function setSlide(input, index)
{
    let slides = [...document.querySelector(".slides").children];
    let item = document.querySelector(`#${input}`);
    slideIndex = index;

    slides.forEach((element) => {
        element.classList.remove("active");
    });

    item.classList.add("active");
}

setInterval(() => {
    slideIndex += 1;
    if (slideIndex > 3) slideIndex = 1;
    setSlide(`slide${slideIndex}`, slideIndex)
}, 4000);