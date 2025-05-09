// control animation of text appearing and disappearing
const letter = document.querySelectorAll(".letter");
const image = document.getElementById("image");

// show letters one by one
let delay = 0;
letter.forEach((letter, index) => {
  letra.style.setProperty("--i", index + 1);
  setTimeout(() => {
    letter.classList.add("letter");
  }, delay);
  delay += 100;
});
