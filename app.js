const interval = 2500;

document.addEventListener('DOMContentLoaded', function() {
  var stream = document.querySelector('.gallery__stream');
  var items = document.querySelectorAll('.slider');
  var prev = document.querySelector('.gallery__prev');
  
  prev.addEventListener('click', function() {
    clearInterval(slideId);
    items = document.querySelectorAll('.slider');
    stream.insertBefore(items[items.length - 1], items[0]);
    startSlide();
  });
  
  var next = document.querySelector('.gallery__next');
  next.addEventListener('click', function() {
    items = document.querySelectorAll('.slider');
    stream.appendChild(items[0]);
    clearInterval(slideId);
    startSlide();
  });

  const startSlide = () => {
    slideId = setInterval(() => {
      items = document.querySelectorAll('.slider');
      stream.appendChild(items[0]);
    }, interval);
  };

  stream.addEventListener('mouseenter', () => {
    clearInterval(slideId)
  });

  stream.addEventListener('mouseleave', startSlide);

  startSlide();

});

/*let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  marqueeContent.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  marqueeContent.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  marqueeContent.classList.remove('active');
});

slider.addEventListener('mousemove',(e) =>{
  if(!isDown) return;
  e.preventDefault();
  const x =e.pageX - slider.offsetLeft;
  const walk = (x -startX);
  slider.scrollLeft = scrollLeft - walk;
});


root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}*/