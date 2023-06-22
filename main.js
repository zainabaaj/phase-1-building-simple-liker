// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hearts = document.querySelectorAll(".like-glyph");

hearts.forEach(element => {
  element.addEventListener('click', likeCallback);
});
function likeCallback(e) {
  const heart = e.target;
  mimicServerCall().then(() => {
    if (heart.innerText == FULL_HEART) {
      heart.innerText = EMPTY_HEART
      heart.classList.remove("activated-heart")
    }
    else {
      heart.innerText = FULL_HEART
      heart.classList.add("activated-heart")
    }
  }).catch(function (error) {
    const err = document.getElementById('modal');
    err.classList.remove("hidden");
    setTimeout(() => {
      err.classList.add("hidden");
    }, 3000);
  });
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
