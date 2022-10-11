let slides = document.querySelectorAll(".slide-container");
let index = 0;
function next() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
  stopTimer();
  startTimer();
}
function prev() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
  stopTimer();
  startTimer();
}
let redirect_btn = document.querySelector(".btn");
function stopTimer() {
  redirect_btn.classList.remove("active");
  clearInterval(timer);
}
function startTimer() {
  let main_video = document.getElementById(`main_video${index}`);

  timer = setInterval(function () {
    redirect_btn.classList.add("active");
  }, Math.round(main_video.duration / 2) * 1000);
}

window.onload = function () {
  let main_video = document.getElementById(`main_video${index}`);

  timer = setInterval(function () {
    redirect_btn.classList.add("active");
  }, Math.round(main_video.duration / 2) * 1000);
};
