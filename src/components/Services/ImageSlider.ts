// Carousel Options Interface
interface CarouselOptions {
  timeRunning: number;
  timeAutoNext: number;
  pauseOnHover: boolean;
  showIndicators: boolean;
}

// Default Options
const defaultOptions: CarouselOptions = {
  timeRunning: 3000,
  timeAutoNext: 7000,
  pauseOnHover: true,
  showIndicators: true,
};

// Step 1: Initialize DOM Elements
const nextDom = document.getElementById('next') as HTMLButtonElement | null;
const prevDom = document.getElementById('prev') as HTMLButtonElement | null;
const carouselDom = document.querySelector('.carousel') as HTMLElement | null;
const sliderDom = carouselDom?.querySelector('.list') as HTMLElement | null;
const thumbnailBorderDom = document.querySelector('.carousel .thumbnail') as HTMLElement | null;
const thumbnailItemsDom = thumbnailBorderDom?.querySelectorAll('.item') as NodeListOf<HTMLElement> | null;

// Utility Function to Ensure DOM Elements
function ensureDom<T>(element: T | null | undefined, name: string): T {
  if (!element) {
    throw new Error(`Missing required DOM element: ${name}`);
  }
  return element;
}

// Ensure critical elements exist
const validNextDom = ensureDom(nextDom, 'Next Button');
const validPrevDom = ensureDom(prevDom, 'Previous Button');
const validCarouselDom = ensureDom(carouselDom, 'Carousel');
const validSliderDom = ensureDom(sliderDom, 'Slider');
const validThumbnailBorderDom = ensureDom(thumbnailBorderDom, 'Thumbnail Border');
const validThumbnailItemsDom = ensureDom(thumbnailItemsDom, 'Thumbnail Items');

// Options
const options: CarouselOptions = { ...defaultOptions };

// Variables for Timeouts
let runTimeOut: number | undefined;
let runNextAuto: number | undefined;

// Step 2: Initialize Carousel
function initializeCarousel() {
  // Add indicators if enabled
  if (options.showIndicators) {
    createIndicators();
  }

  // Add event listeners for buttons
  validNextDom.addEventListener('click', () => showSlider('next'));
  validPrevDom.addEventListener('click', () => showSlider('prev'));

  // Handle auto-advance
  startAutoAdvance();

  // Pause on hover if enabled
  if (options.pauseOnHover) {
    validCarouselDom.addEventListener('mouseenter', stopAutoAdvance);
    validCarouselDom.addEventListener('mouseleave', startAutoAdvance);
  }

  // Add keyboard navigation
  document.addEventListener('keydown', handleKeyboardNavigation);
}

// Step 3: Show Slider Function
function showSlider(type: 'next' | 'prev') {
  const sliderItemsDom = validSliderDom.querySelectorAll('.item') as NodeListOf<HTMLElement>;
  const thumbnailItems = validThumbnailBorderDom.querySelectorAll('.item') as NodeListOf<HTMLElement>;

  if (type === 'next') {
    validSliderDom.appendChild(sliderItemsDom[0]);
    validThumbnailBorderDom.appendChild(thumbnailItems[0]);
    validCarouselDom.classList.add('next');
  } else {
    validSliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
    validThumbnailBorderDom.prepend(thumbnailItems[thumbnailItems.length - 1]);
    validCarouselDom.classList.add('prev');
  }

  // Reset animation class
  clearTimeout(runTimeOut);
  runTimeOut = window.setTimeout(() => {
    validCarouselDom.classList.remove('next', 'prev');
  }, options.timeRunning);

  // Update indicators
  updateIndicators();

  // Reset auto-advance
  resetAutoAdvance();
}

// Step 4: Auto-Advance Functions
function startAutoAdvance() {
  runNextAuto = window.setTimeout(() => {
    validNextDom.click();
  }, options.timeAutoNext);
}

function stopAutoAdvance() {
  clearTimeout(runNextAuto);
}

function resetAutoAdvance() {
  stopAutoAdvance();
  startAutoAdvance();
}

// Step 5: Keyboard Navigation
function handleKeyboardNavigation(event: KeyboardEvent) {
  if (event.key === 'ArrowRight') {
    validNextDom.click();
  } else if (event.key === 'ArrowLeft') {
    validPrevDom.click();
  }
}

// Step 6: Indicators
let indicators: HTMLElement[] = [];

function createIndicators() {
  const indicatorContainer = document.createElement('div');
  indicatorContainer.classList.add('carousel-indicators');

  const sliderItems = validSliderDom.querySelectorAll('.item') as NodeListOf<HTMLElement>;
  sliderItems.forEach((_, index) => {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    if (index === 0) indicator.classList.add('active');
    indicators.push(indicator);
    indicatorContainer.appendChild(indicator);
  });

  validCarouselDom.appendChild(indicatorContainer);
}

function updateIndicators() {
  const sliderItems = validSliderDom.querySelectorAll('.item') as NodeListOf<HTMLElement>;
  const firstItem = sliderItems[0];

  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === Array.from(sliderItems).indexOf(firstItem));
  });
}

// Initialize the carousel
initializeCarousel();























// // Step 1: Get DOM Elements with type assertions or null checks
// const nextDom = document.getElementById('next') as HTMLButtonElement | null;
// const prevDom = document.getElementById('prev') as HTMLButtonElement | null;

// const carouselDom = document.querySelector('.carousel') as HTMLElement | null;
// const SliderDom = carouselDom?.querySelector('.list') as HTMLElement | null;
// const thumbnailBorderDom = document.querySelector('.carousel .thumbnail') as HTMLElement | null;
// const thumbnailItemsDom = thumbnailBorderDom?.querySelectorAll('.item') as NodeListOf<HTMLElement> | null;
// const timeDom = document.querySelector('.carousel .time') as HTMLElement | null;

// if (thumbnailBorderDom && thumbnailItemsDom?.length) {
//   thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
// }

// const timeRunning: number = 3000;
// const timeAutoNext: number = 7000;

// // Ensure the nextDom and prevDom elements exist before adding event listeners
// if (nextDom) {
//   nextDom.onclick = function () {
//     showSlider('next');
//   };
// }

// if (prevDom) {
//   prevDom.onclick = function () {
//     showSlider('prev');
//   };
// }

// let runTimeOut: number | undefined;
// let runNextAuto: number | undefined;

// runNextAuto = setTimeout(() => {
//   nextDom?.click();
// }, timeAutoNext);

// // Function to handle slider logic
// function showSlider(type: 'next' | 'prev') {
//   if (!SliderDom || !carouselDom || !thumbnailBorderDom || !thumbnailItemsDom?.length) {
//     return;
//   }

//   const SliderItemsDom = SliderDom.querySelectorAll('.item') as NodeListOf<HTMLElement>;
//   const thumbnailItems = document.querySelectorAll('.carousel .thumbnail .item') as NodeListOf<HTMLElement>;

//   if (type === 'next') {
//     SliderDom.appendChild(SliderItemsDom[0]);
//     thumbnailBorderDom.appendChild(thumbnailItems[0]);
//     carouselDom.classList.add('next');
//   } else {
//     SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
//     thumbnailBorderDom.prepend(thumbnailItems[thumbnailItems.length - 1]);
//     carouselDom.classList.add('prev');
//   }

//   clearTimeout(runTimeOut);
//   runTimeOut = setTimeout(() => {
//     carouselDom.classList.remove('next');
//     carouselDom.classList.remove('prev');
//   }, timeRunning);

//   clearTimeout(runNextAuto);
//   runNextAuto = setTimeout(() => {
//     nextDom?.click();
//   }, timeAutoNext);
// }
