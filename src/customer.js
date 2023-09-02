const $ = (selector) => document.querySelector(selector);
const tabs = document.querySelectorAll(".center__qna--state > li > a");
const liEls = document.querySelectorAll(".qna-li");

window.addEventListener("DOMContentLoaded", () => {
  const liOrder = document.querySelectorAll(".qna-li.order");
  for(let o = 0; o < liOrder.length; o++) {
    liOrder[o].style.display = "block"
  }
})

for(let t = 0; t < tabs.length; t++) {
  tabs[t].addEventListener("click", (e) => {
    tabsActive(e);
  })
}

function tabsActive (e) {
  for(let j = 0; j< tabs.length; j++){
    tabs[j].classList.remove('active');
    e.target.classList.add('active');

    acoSort(e)
  }
}

function acoSort(e) {
  if(e.target.classList.contains("active")) {
    const liOrder = document.querySelectorAll(".qna-li.order")
    if(e.target.dataset.state === "order") {
      for(let o = 0; o < liOrder.length; o++) {
        liOrder[o].style.display = "block"
      }
    }else {
      for(let o = 0; o < liOrder.length; o++) {
        liOrder[o].style.display = "none"
      }
    }
    
    const liDelivery = document.querySelectorAll(".qna-li.delivery")
    if(e.target.dataset.state === "delivery") {
      for(let k = 0; k < liDelivery.length; k++) {
        liDelivery[k].style.display = "block"
      }
    }else {
      for(let k = 0; k < liDelivery.length; k++) {
        liDelivery[k].style.display = "none"
      }
    }
  }
}

for(let i = 0; i < liEls.length; i++) {
  liEls[i].addEventListener("click", () => {
    liEls[i].classList.toggle('open');
    qnaArrow()
  })
}

function qnaArrow () {
  if($(".qna-li").classList.contains("open")) {
    $(".center-q-arrow").style.transform = `rotate(180deg)`
  }else {
    $(".center-q-arrow").style.transform = `rotate(0)`;
  }
}




