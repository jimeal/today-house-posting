const $ = (selector) => document.querySelector(selector);

$("#toggle-btn").addEventListener('click', () => {
  $(".side-bar").classList.toggle('open');
  $(".back-drop").style.display = "block";
})
$(".back-drop").addEventListener("click", () => {
  $(".side-bar").classList.toggle('open');
  $(".back-drop").style.display = "none";
})


