// const root = document.documentElement;
// const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");

// this is my slider
// const marqueeContent = document.querySelector("ul.marquee-content");
// const slider = document.querySelector('.marquee');

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

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }
);