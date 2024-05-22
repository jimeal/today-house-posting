const $ = (selector) => document.querySelector(selector);
const post = {};

const postTemplate = (post) => {
  return `
  <article class="posting-box">
    <a href="/post-detail.html?id=${post.id}">
      <div class="posting-image">
        <img src="${post.image}" alt="게시글 이미지" />
      </div>
    </a>
    <h2 class="posting-title">${post.title}</h2>
    <div class="profile-box">
      <div class="profile-image">
        <img src="${post.authorImage}" alt="프로필이미지" />
      </div>
      <span class="profile-nickname">${post.author}</span>
    </div>
  </article>
`
}
async function fetchPost() {
  const response = await fetch(`https://today-house-server.glitch.me/posts`)
  const data = await response.json();
  return data;
}

fetchPost().then(posts => {
  
  $(".posting-content").innerHTML = posts.map(post => postTemplate(post)).reverse().join('')
  $(".total-number").innerText = `총 ${posts.length} 개`;
})  