// Step 1: Get DOM Elements with type assertions or null checks
const nextDom = document.getElementById('next') as HTMLButtonElement | null;
const prevDom = document.getElementById('prev') as HTMLButtonElement | null;

const carouselDom = document.querySelector('.carousel') as HTMLElement | null;
const SliderDom = carouselDom?.querySelector('.list') as HTMLElement | null;
const thumbnailBorderDom = document.querySelector('.carousel .thumbnail') as HTMLElement | null;
const thumbnailItemsDom = thumbnailBorderDom?.querySelectorAll('.item') as NodeListOf<HTMLElement> | null;
const timeDom = document.querySelector('.carousel .time') as HTMLElement | null;

if (thumbnailBorderDom && thumbnailItemsDom?.length) {
  thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
}

const timeRunning: number = 3000;
const timeAutoNext: number = 7000;

// Ensure the nextDom and prevDom elements exist before adding event listeners
if (nextDom) {
  nextDom.onclick = function () {
    showSlider('next');
  };
}

if (prevDom) {
  prevDom.onclick = function () {
    showSlider('prev');
  };
}

let runTimeOut: number | undefined;
let runNextAuto: number | undefined;

runNextAuto = setTimeout(() => {
  nextDom?.click();
}, timeAutoNext);

// Function to handle slider logic
function showSlider(type: 'next' | 'prev') {
  if (!SliderDom || !carouselDom || !thumbnailBorderDom || !thumbnailItemsDom?.length) {
    return;
  }

  const SliderItemsDom = SliderDom.querySelectorAll('.item') as NodeListOf<HTMLElement>;
  const thumbnailItems = document.querySelectorAll('.carousel .thumbnail .item') as NodeListOf<HTMLElement>;

  if (type === 'next') {
    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItems[0]);
    carouselDom.classList.add('next');
  } else {
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItems[thumbnailItems.length - 1]);
    carouselDom.classList.add('prev');
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove('next');
    carouselDom.classList.remove('prev');
  }, timeRunning);

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    nextDom?.click();
  }, timeAutoNext);
}
