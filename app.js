const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
// this is my slider
const slider = document.querySelector('.marquee-content');

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

slider.addEventListener('mousemove',(e) =>{
  if(!isDown) return;
  e.preventDefault();
  const x =e.pageX - slider.offsetLeft;
  const walk = (x -startX)*3;
  slider.scrollLeft = scrollLeft - walk;
  slider.scrollWidth = scrollLeft - walk;
  console.log(walk)
});


root.style.setProperty("--marquee-elements", slider.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  slider.appendChild(slider.children[i].cloneNode(true));
}

