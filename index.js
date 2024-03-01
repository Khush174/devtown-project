// let movies = [
//     {
//         name: "falcon and the winter soldier",
//         des: "winter soldier",
//         Image: "C:\Users\khush\OneDrive\Desktop\data structure\devtown project\images\slider 2.PNG"
//   },
//   {
//     name: "loki",
//     des: "a magician",
//     image: "C:\Users\khush\OneDrive\Desktop\data structure\devtown project\images\slider 1.PNG"
//   },
//   {
//     name: "wanda vision",
//     des: "a witch",
//     image: "C:\Users\khush\OneDrive\Desktop\data structure\devtown project\images\slider 3.PNG"
//   },
//   {
//     name: "raya and the last dragon",
//     des: "cartoon",
//     image: "C:\Users\khush\OneDrive\Desktop\data structure\devtown project\images\slider 4.PNG"
//   },
//   {
//     name: "luca",
//     des: "a cartoon",
//     image: "C:\Users\khush\OneDrive\Desktop\data structure\devtown project\images\slider 5.PNG"
//   }
// ];
let movies = [
  {
      name: 'falcon and the winter soldier',
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
      image: 'images/slider 2.PNG'
  },
  {
      name: 'loki',
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
      image: 'images/slider 1.PNG'
  },
  {
      name: 'wanda vision',
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
      image: 'images/slider 3.PNG'
  },
/// and so on
];

// const carousel=document.querySelector('.carousel');
// let sliders=[];

// let slideIndex=0;//track the current slide
const carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0; // to track current slide index.

// const createSlide = () => {
//     if(slideIndex >= movies.length){
//         slideIndex=0;
//     }

//     //create a dom elements

//     let slide= document.createElement('div');
//     let imgElement= document.createElement('img');
//     let content= document.createElement('div');
//     let h1= document.createElement('h1');
//     let p= document.createElement('p');
//   }
  const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // creating DOM element
  let slide = document.createElement('div');
  var imgElement = document.createElement('img');
  let content = document.createElement('div');
  let h1 = document.createElement('h1');
  let p = document.createElement('p');

    //attaching all elements
// {
//     imgElement.appendChild(document.createTextNode(''));
//     h1.appendChild(document.createTextNode(movies[slideIndex].name));
//     p.appendChild(document.createTextNode(movies[slideIndex].des));
//     content.appendChild(h1);
//     content.appendChild(p);
//     sliders.appendChild(content);
//     sliders.appendChild(imgElement);
//     carousel.appendChild(slide);
// }

  // attaching all elements
  imgElement.appendChild(document.createTextNode(''));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

// {
//     //setting up images
//     imgElement.src = movies[slideIndex].image;
//     slideIndex++;

//     //setting elements classname
//     sliders.className = "slider";
//     content.className = "slide-content";
//     h1.className = "movie-title";
//     p.className = "movie-des";

//     sliders.push(slide);
// }

  // setting up image
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  // setting elements classname
  slide.className = 'slider';
  content.className = 'slide-content';
  h1.className = 'movie-title';
  p.className = 'movie-des';

  sliders.push(slide);

// {
//     if(sliders.length)
//     {
//         sliders[0].style.marginleft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
//     }

// }

  if(sliders.length){
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
  }
};

// for (let i=0; i<3; i++){
//     createSlide();
// }

// setInterval(()=>{
//     createSlide();
// }, 3000);
for(let i = 0; i < 3; i++){
  createSlide();
}

setInterval(() => {
  createSlide(sliders);
}, 3000);

// const videoCards = [...document.querySelectorAll('.video-card')];

// videoCards.forEach(item => {
//   item.addEventListener('mouseOver', () => {
//     let video = item.children[1];
//     video.play();
//   })
//   item.addEventListener('mouseleave', () => {
//     let video = item.children[1];
//     video.pause();
//   })
// })
/// video cards

const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach((item) => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    });
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    });
});
// let cardContainers = [...document.querySelectorAll('card-container')];
// let preBtns = [...document.querySelectorAll('.pre-btn')];
// let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

// cardContainers.forEach((item, i) =>{
//   let containerDimensions = item.getBoundingClientRect();
//   let containerWidth = containerDimensions.width;

//   nxtBtns[i].addEventListener('click', () => {
//     item.scrollLeft += containerWidth - 200;    
//   })
//   preBtns[i].addEventListener('click', () => {
//     item.scrollLeft += containerWidth - 200;
//   })
// })
// card sliders

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    });

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    });
});