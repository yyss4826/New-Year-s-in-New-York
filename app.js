var piano = document.getElementById("piano");
var interactive = document.getElementById("interactive");
var paris = document.getElementById("paris");
var montage = document.getElementById("montage");
var intro = document.getElementById("intro");
var nyc = document.getElementById("nyc");




interactive.addEventListener('mouseenter', () => {
  piano.play();
  // document.body.style.backgroundColor = color;
});

interactive.addEventListener('mouseleave', () => {
  piano.pause();
  // document.body.style.backgroundColor = "white";
});


montage.addEventListener('mouseenter', () => {
  paris.play();
  // document.body.style.backgroundColor = color;
});

montage.addEventListener('mouseleave', () => {
  paris.pause();
  // document.body.style.backgroundColor = "white";
});


sound.addEventListener('mouseenter', () => {
  intro.play();
  // document.body.style.backgroundColor = color;
});

sound.addEventListener('mouseleave', () => {
  intro.pause();
  // document.body.style.backgroundColor = "white";
});