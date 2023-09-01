export const POST_MAX_FILE_SIZE = 1000 * 1000 * 1;
const $ = (selector) => document.querySelector(selector);

// $(".content-input")
// $(".current-title-length")
// $(".max-title-length")

$(".title-input").addEventListener('input', (e) => {
  let targetValue = e.target.value;
  let targetValueLength = targetValue.length;
  if(targetValueLength > 30) {
    alert('30자 이내로 작성해주세요')
    return
  }else if(targetValueLength <= 30) {
    $(".current-title-length").innerText = targetValueLength;
  }

})

$(".post-form").addEventListener('submit', postSubmit)
$(".publish-button").addEventListener('click', () => {
  $(".post-form").dispatchEvent(new Event('submit'))
})

async function postSubmit(e) {
  e.preventDefault();

  try {
    await fetch('https://today-house-server.glitch.me/posts', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      title: $(".title-input").value,
      content: $(".content-input").value,
      image: $(".cover-image").src,
      author: '새로운유저',
      authorImage: `https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`
    })
  })
  window.location.assign('/posts-list.html');

  } catch(error){
    alert(error)
  }

  
}

//image upload
$("#cover-image-upload").addEventListener('change', imgUpload)
$('#cover-image-re-upload').addEventListener('change', imgUpload)

function imgUpload(e) {
  let files = e.target.files[0];
  console.log(e.target.files)

  const fileReader = new FileReader();
  fileReader.readAsDataURL(files)
  fileReader.onload = (e) => {
    $(".cover-image").src = e.target.result;
    $(".cover-image").style.display = "block";
    $(".file-re-upload-wrapper").style.display = "block";
  }
}