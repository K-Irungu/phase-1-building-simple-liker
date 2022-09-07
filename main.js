// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeButton = document.querySelector('.like-glyph');
likeButton.addEventListener('click', callServer);
// Above, I've made a reference to the first element with a className of .likeglyph.
// I've then added an eventListener to this element that invokes the function callServer()
// every time a click event happens on the specified element. 


// I then define the function callServer() as follows:

// If the innerHTML of the element being clicked is "EMPTY-HEART",
// then the following happens:
// i) Function mimicServerCall is invoked
// ii) Then the response from the server is logged in the console
//     The innerHTML of the element being clicked is changed to "FULL-HEART" to change appearance of the heart
//     The className is changed to "activated-heart" to make the heart appear red in color
// iii) In case an error is encountered, the .catch() function removes the .hidden className of the modal,
//      making it visible, and the error message is displayed in the innerHTML of the modal.
//      3 seconds after this happens, the async function hideModal() changes the 
//      className of the modal to .hidden thus hiding it again.


function callServer() {
  if(likeButton.innerHTML === EMPTY_HEART) {
    // console.log("Empty Heart Here!");
    mimicServerCall()
    .then(function(response) {
      console.log(response);
      likeButton.innerHTML = FULL_HEART;
      likeButton.className = "activated-heart";
    }) 
    .catch(function (error) {
      console.log(error);
      document.getElementById('modal').className = "";
      document.getElementById('modal').innerHTML = error;
      
      function hideModal() {
        document.getElementById('modal').className = "hidden";
      }
      setTimeout(hideModal, 3000);
    })

// If innerHTML of the element being clicked is "FULL-HEART"",
// The innerHTML of the element being clicked is changed to "EMPTY-HEART", 
// And the className of .activated-heart is removed, making the heart clear
  } else if(likeButton.innerHTML === FULL_HEART) {
    // console.log("Full Heart Here!");
    likeButton.innerHTML = EMPTY_HEART;
    likeButton.className = "like-glyph";

  };
};









//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
