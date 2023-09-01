const $ = (selector) => document.querySelector(selector);
const post = {};
const postId = new URLSearchParams(window.location.search).get('id');



async function fetchPost(postId) {
  const response = await fetch(`https://tundra-freezing-barnacle.glitch.me/posts/${postId}`)
  const data = await response.json();

  return data;
}

console.log(postId)

function postDetailTemplate (post) { 
  return `
  <div class="category">온라인 집들이</div>
    <div class="title">${post.title}</div>
   
    <div class="profile">

      <div class="profile-image-container">
        <img
          src="${post.authorImage}"
          alt="프로필 이미지"
          class="profile-image"
        />
      </div>
      <div class="profile-detail">
        <span class="profile-detail-nickname">${post.author}</span>
        <span class="profile-detail-date">2021년 11월 27일</span>
      </div>
    </div>
  `}

  fetchPost(postId).then((post) => {
    console.log(post)
    console.log(postId)
    $(".cover-image").src = post.image;
    $(".post-content").innerText = post.content;
    $(".content-container").innerHTML = postDetailTemplate(post);
  });
