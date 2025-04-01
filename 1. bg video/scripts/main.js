// Get the video
let video = document.getElementById("bg-video");

// Get the button
let btn = document.getElementById("btn");

// I am sure that I selected the right elements : console.log(video, btn);
// first method : attach this fuction to the onClick of the button tag
function handleClick() {
  if (video.paused) {
    video.play();
    btn.innerText = "Pause";
  } else {
    video.pause();
    btn.innerText = "Play";
  }
}
// second method: add event listener to the btn after selecting it
btn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    btn.innerText = "Pause";
  } else {
    video.pause();
    btn.innerText = "Play";
  }
});
