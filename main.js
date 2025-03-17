// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


// Assuming the function mimicServerCall is already defined for you
// Function to handle the click event on the heart
const heart = document.getElementById('heart');
const errorModal = document.getElementById('error-modal');
const errorMessage = document.getElementById('error-message');

// When an empty heart is clicked
heart.addEventListener('click', () => {
  // Invoke mimicServerCall to simulate the server request
  mimicServerCall()
    .then(() => {
      // If the server call is successful:
      heart.classList.add('activated-heart'); // Make the heart full
    })
    .catch((error) => {
      // If the server call fails:
      errorMessage.textContent = error; // Display the error message
      errorModal.classList.remove('hidden'); // Show the error modal
      
      // Hide the error modal after 3 seconds
      setTimeout(() => {
        errorModal.classList.add('hidden');
      }, 3000);
    });
});

// When a full heart is clicked, revert it to an empty heart
heart.addEventListener('click', () => {
  if (heart.classList.contains('activated-heart')) {
    heart.classList.remove('activated-heart'); // Remove the full heart
  }
});


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
