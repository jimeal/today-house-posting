const $ = (selector) => document.querySelector(selector);
const post = {};
const postId = new URLSearchParams(window.location.search).get('id');



async function fetchPost(postId) {
  const response = await fetch(`https://today-house-server.glitch.me/posts/${postId}`)
  const data = await response.json();

  return data;
}

console.log(postId)

function postDetailTemplate (post) { 
  return `
    <div class="category">온라인 집들이</div>
    <h2 class="posting-title">${post.title}</h2>
   
    <div class="detail--profile">
      <div class="detail--profile__image">
        <img
          src="${post.authorImage}"
          alt="프로필 이미지"
          class="profile-image"
        />
      </div>

      <div class="detail--profile__name">
        <span class="detail--profile-nickname">${post.author}</span>
        <span class="detail--profile-date">2021년 11월 27일</span>
      </div>
    </div>
  `}

  fetchPost(postId).then((post) => {
    console.log(post)
    console.log(postId)
    $(".cover-image").src = post.image;
    $(".post-content").innerText = post.content;
    $(".detail__container > .inner").innerHTML = postDetailTemplate(post);
  });
