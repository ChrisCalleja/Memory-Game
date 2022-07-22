"use strict";

const card = document.querySelectorAll(".card");
const mainContainer = document.querySelector(".maincontainer");
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const modal = document.querySelector(".modal");
const winStatement = document.querySelector(".win-statement");
const winModal = document.querySelector(".win-modal");
const btn = document.querySelector(".modal-trigger");
const span = document.getElementsByClassName("close")[0];
const winClose = document.querySelector(".win-close");

let cardArray = [];
let matchCounter = 0;
let time = 60;
let timer = null;

// function stopWatch() {
//   if (matchCounter === 1) {
//     clearInterval(timer);
//   }
// }

const startTimer = () => {
  time = 60;
  timer = setInterval(() => {
    start.innerHTML = time;
    time--;
    if (time === 0) {
      clearInterval(timer);
    }
  }, 1000);
};

function shuffle() {
  card.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
    card.children[1].style.display = "initial";
    card.style.borderColor = "white";
    card.classList.remove("flipCard");
  });
}

const flipCard = (e) => {
  console.dir(e.target.parentNode.parentNode);
  if (
    e.target.parentNode.parentNode.classList.contains("card") &&
    cardArray.length <= 1
  ) {
    e.target.parentNode.parentNode.classList.toggle("flipCard");
    cardArray.push(e.target.parentNode.parentNode);
    console.log(cardArray);
    if (cardArray.length === 2) {
      if (
        cardArray[0].getAttribute("data-plant") ===
        cardArray[1].getAttribute("data-plant")
      ) {
        cardArray.forEach((card) => {
          card.children[1].style.display = "none";
          card.style.borderColor = "#e6dcd0";
        });
        matchCounter++;
        console.log(matchCounter);
        cardArray = [];
        if (matchCounter === 6) {
          clearInterval(timer);
          winModal.style.display = "block";
          winStatement.textContent = `Congrats! It took you ${
            59 - time
          } seconds to finish the game!`;
          // span.onclick = function () {
          //   winModal.style.display = "none";
          //   console.log("zebra");
          // };
        }
      } else {
        setTimeout(() => {
          cardArray.forEach((card) => card.classList.toggle("flipCard"));
          cardArray = [];
        }, 1000);
      }
    }
  }
};

winClose.addEventListener("click", () => {
  winModal.style.display = "none";
});

// window.onclick = function (event) {
//   if (event.target == winModal) {
//     winModal.style.display = "none";
//   }
// };

// const toggleHide = () => {
//   winModal.classList.toggle("hide");
// }; // naming the toggle function

// winModal.addEventListener("click", (e) => {
//   if (e.target.classList.contains("modal")) {
//     toggleHide();
//   } // hides the modal if you click off it
// });

// winModal.addEventListener("click", toggleHide);

mainContainer.addEventListener("click", flipCard);

start.addEventListener("click", () => {
  shuffle();
  startTimer();
});

reset.addEventListener("click", () => {
  clearInterval(timer);
  shuffle();
  startTimer();
});

//trigger log timer when flipCard === 12     card.classList(flipCard).length === 12

// modal code
// Get the modal

// Get the button that opens the modal

// Get the <span> element that closes the modal

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// };
// function = (e) {
//   target.e.addEventListener
// if (matchCounter === 6) {

// }
// }

//  if  {
//           //winModal popup
//           winModal.style.display. = "block";
//           //clear interval so it stops decrementing
//           clearInterval(timer);

//         }
