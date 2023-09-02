const $ = (selector) => document.querySelector(selector);
const btn = document.querySelector(".top-button");
const docEl = document.documentElement;
let offset;
let scrollPos;
let docHeight;


$("#toggle-btn").addEventListener('click', () => {
  $(".side-bar").classList.toggle('open');
  $(".back-drop").style.display = "block";
})
$(".back-drop").addEventListener("click", () => {
  $(".side-bar").classList.toggle('open');
  $(".back-drop").style.display = "none";
})

docHeight = Math.max(docEl.offsetHeight, docEl.scrollTop);
//docHeight = docEl.offsetHeight;

if(docHeight !== 0) {
  offset = docHeight / 4;

}

window.addEventListener("scroll", () => {
  const scrollPos = docEl.scrollTop;
  if(scrollPos > offset) {
    btn.className = 'visible';
  }else {
    btn.className = '';
  }
})

btn.addEventListener("click", (e) => {
  e.preventDefault();
  docEl.scrollTop = 0;
  scrollToTop();
})

function scrollToTop () {
  //일정시간마다 할일
  let scrollInterval = setInterval(function (){
      window.scrollBy(0, -55)
    }, 15)
  clearInterval(scrollInterval)
}




