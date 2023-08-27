const $ = (selector) => document.querySelector(selector);
$(".before-btn").addEventListener('click', () => {
  window.history.back(1)
})