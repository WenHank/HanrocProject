//Slide Img
function debounce(func, wait = 25, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll(".slide-in");
const CircleS = document.getElementsByClassName("CircleS");
const circles = document.getElementsByClassName("circle");
let donigCounter = 0;
function checkSlide(e) {
  if (document.body.clientWidth > 768) {
    if (circles.length !== 0) {
      let counterInAt = window.scrollY + window.innerHeight - 200 / 2;
      const counterBottom = circles[0].offsetTop + 200;
      const counterisHalfShown = counterInAt > circles[0].offsetTop;
      const counterisNotScrolledPost = window.scrollY < counterBottom;
      if (counterisHalfShown && counterisNotScrolledPost && !donigCounter) {
        countSecond();
        donigCounter = 1;
      }
    }
    sliderImages.forEach((sliderImage) => {
      const slideInAt =
        window.scrollY + window.innerHeight - sliderImage.height / 2;
      const imageBottom = sliderImage.offsetTop + sliderImage.height;
      const isHalfShown = slideInAt > sliderImage.offsetTop;
      const isNotScrolledPost = window.scrollY < imageBottom;
      if (isHalfShown && isNotScrolledPost) {
        sliderImage.classList.add("active");
      } else {
        sliderImage.classList.remove("active");
      }
    });
  } else {
    sliderImages.forEach((sliderImage) => {
      console.log("do2");
      sliderImage.classList.remove(".slide-in");
      sliderImage.classList.remove(".aligh-right");
      sliderImage.classList.remove(".aligh-left");
    });
  }
}
window.addEventListener("scroll", debounce(checkSlide));

//COUNTER
let nums = [0, 0, 0, 0];
let numbers = [56, 70, 78, 81];
function countSecond() {
  if (circles.length !== 0) {
    var Interval = setInterval(() => {
      if (nums[3] > numbers[3]) {
        clearInterval(Interval);
      } else {
        for (let i = 0; i < numbers.length; i++) {
          circles[i].innerHTML = nums[i].toString() + "%";
          if (nums[i] < numbers[i]) {
            nums[i]++;
          }
        }
      }
    }, 20);
  }
}
