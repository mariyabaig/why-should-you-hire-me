const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const messageContainer = document.querySelector(".message-container");
const messageContainerTwo = document.querySelector(".message-container-two");
const messageContainerThree = document.querySelector(".message-container-three");
const messageContainerFour = document.querySelector(
  ".message-container-four"
);
const messageContainerFifth = document.querySelector(".message-container-fifth");

const messageContainerSixth = document.querySelector(
  ".message-container-sixth"
);

let timeoutMessage;
let timeoutSecondMessage;
let timeoutThirdMessage;
const maxScreenTime = 2000; 
const messageDisplayTime = 2000;
const maxScreenTimeTwo = 8000;
const messageDisplayTimeTwo = 5000;
const maxScreenTimeThree = 8000;
const messageDisplayTimeThree = 5000;
const maxScreenTimeFour = 2000;
const messageDisplayTimeFour = 8000;
const maxScreenTimeFifth = 3000; 
const messageDisplayTimeFifth = 5000;
const maxScreenTimeSixth = 8000;
const messageDisplayTimeSixth = 5000;

function showActFastMessage() {
  showMessage(
    "What's taking you so long?",
    "https://media.giphy.com/media/mCgALMhfxiZn4oz5P5/giphy.gif",
    messageContainer,
    messageDisplayTime
  );
}

function showWhatMessage() {
  showMessage("I'm skilled in JavaScript, React.js, Next.js & TypeScript.", "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnZ1NnM4c25jdmJrNW90NTdqc2I1bXd2b21udTh4MGhyajdxdGs2YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JQRTxak7sNdwOmB1DP/giphy.gif",messageContainerTwo, messageDisplayTimeTwo);
}

function showThirdMessage() {
  showMessage(
    "I can also learn and adapt quickly",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjJ0bzY5cTBxYW4wb3F1dWtqZGxndm8xcHY5ZHh0NmJwa2c0enRoMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/NB5Ato4gbETeE6SkKh/giphy.gif",
    messageContainerThree,
    messageDisplayTimeThree
  );
}

function showFourthMessage() {
  showMessage(
    "I am also very hardworking",
    "https://media.giphy.com/media/gFisgTI9VHKN6gUAnv/giphy.gif",
    messageContainerFour,
    messageDisplayTimeFour
  );
}

function showFifthMessage() {
  showMessage(
    "I loooove networking with people as well!",
    "https://media.giphy.com/media/UhdWrWgDPiRUjiNyRZ/giphy.gif",
    messageContainerFifth,
    messageDisplayTimeFifth
  );
}

function showSixthMessage() {
  showMessage(
    "I am a very positive and funny being, will make the workplace even more fun!",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3NlZTJydTc2dXB6aWYzaGc2emFzcWh3bDA2ZmIwc3lxbDVuZm16dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/lOkABr28eLcZgYXq5y/giphy.gif",
    messageContainerSixth,
    messageDisplayTimeSixth
  );
}


function showMessage(messageText, gifSrc, container, displayTime) {
  const isMessageDisplayed = container.querySelector("p");

  if (!isMessageDisplayed) {
    const messageParagraph = document.createElement("p");
    messageParagraph.textContent = messageText;

    const messageGif = document.createElement("img");
    messageGif.src = gifSrc;
    messageGif.alt = "Message GIF";

    container.appendChild(messageParagraph);
    container.appendChild(messageGif);

    setTimeout(() => {
      container.innerHTML = "";
    }, displayTime);

    setTimeout(() => {
      container.style.display = "none";
    }, displayTime);
  }
}


function clearAllTimeouts() {
  clearTimeout(timeoutMessage);
  clearTimeout(timeoutSecondMessage);
  clearTimeout(timeoutThirdMessage);
  clearTimeout(timeoutFourthMessage);
  clearTimeout(timeoutFifthMessage);
  clearTimeout(timeoutSixthMessage);
  messageContainer.style.display = "none";
  messageContainerTwo.style.display = "none";
  messageContainerThree.style.display = "none";
  messageContainerFour.style.display = "none";
  messageContainerFifth.style.display = "none";
  messageContainerSixth.style.display = "none";
}

function startTimeoutMessage() {
  timeoutMessage = setTimeout(() => {
    showActFastMessage();

    timeoutSecondMessage = setTimeout(() => {
      showWhatMessage();

      timeoutThirdMessage = setTimeout(() => {
        showThirdMessage();

        timeoutFourthMessage = setTimeout(() => {
          showFourthMessage();

          timeoutFifthMessage = setTimeout(() => {
            showFifthMessage();

            timeoutSixthMessage = setTimeout(() => {
              showSixthMessage();
            }, messageDisplayTimeSixth);  
          }, messageDisplayTimeFifth);
        }, messageDisplayTimeFour);
      }, messageDisplayTimeThree);
    }, maxScreenTimeTwo);
  }, maxScreenTime);
}


yesBtn.addEventListener("click", () => {
   clearAllTimeouts()
  question.innerHTML = "Yayy, thank you!";
  gif.src = "https://media.giphy.com/media/4RJBOuC45ptdMszWvt/giphy.gif";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";

});

noBtn.addEventListener("mouseover", () => {

  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  startTimeoutMessage();
});
document.addEventListener("DOMContentLoaded", function () {
  var gifImage = document.querySelector(".gif");
  var question = document.querySelector(".question");

  setTimeout(function () {
    gifImage.src = "https://media.giphy.com/media/BmfDRHdpLw6sszpKp9/giphy.gif";
    question.innerHTML = "Won't you?";

    setTimeout(function () {
      gifImage.src =
        "https://media.giphy.com/media/hiJ9ypGI5tIKdwKoK2/giphy.gif";

      setTimeout(function () {
        question.innerHTML = "Let me<br>tell you why you should!";
      }, 2000);
    }, 2000);
  }, 3000);
});



startTimeoutMessage();
