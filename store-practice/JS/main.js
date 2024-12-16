let slideIndex = 1; 
let remainingTime = 7000;

function setTime()
{
  if (remainingTime == 0) return;
  let h = Math.floor(remainingTime / 3600);
  let m = Math.floor((remainingTime % 3600) / 60);
  let s = (remainingTime % 3600) % 60;
  document.getElementById("hours").innerText = h;
  document.getElementById("minutes").innerText = m;
  document.getElementById("seconds").innerText = s;
  remainingTime -= 1; 
}

setInterval(()=>setTime(), 1000);

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