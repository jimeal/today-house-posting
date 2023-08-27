const $ = (selector) => document.querySelector(selector);
const post = {};

async function fetchPost() {
  const response = await fetch(`http://localhost:3000/posts`)
  const data = await response.json();

  return data;
}

const postTemplate = (post) => {
  return `
  <a href="/post-detail.html?id=${post.id}">
    <div class="posting-box">
      <div class="posting-image">
        <img src="${post.image}" alt="게시글 이미지" />
      </div>
      <h2 class="posting-title">${post.title}</h2>
      <div class="profile-wrapper">
        <div class="profile-image-container">
          <img class="profile-image" src="${post.authorImage}" alt="프로필이미지" />
        </div>
        <span class="profile-detail-nickname">${post.author}</span>
      </div>
    </div>
  </a>
`
}

fetchPost().then(posts => {
  console.log(posts)
  $(".posting-container .inner").insertAdjacentHTML(
    'beforeend', posts.map(post => postTemplate(post))
  ) 
  //$(".posting-container").innerHTML = posts.map(post => postTemplate(post)).join('')
})