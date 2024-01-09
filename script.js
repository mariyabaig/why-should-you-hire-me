const elements = {
  question: document.querySelector(".question"),
  gif: document.querySelector(".gif"),
  yesBtn: document.querySelector(".yes-btn"),
  noBtn: document.querySelector(".no-btn"),
  messageContainers: [
    document.querySelector(".message-container"),
    document.querySelector(".message-container-two"),
    document.querySelector(".message-container-three"),
    document.querySelector(".message-container-four"),
    document.querySelector(".message-container-fifth"),
    document.querySelector(".message-container-sixth"),
  ],
};

const timeouts = [];

const maxScreenTimes = [2000, 8000, 8000, 2000, 3000, 8000];
const messageDisplayTimes = [2000, 5000, 5000, 8000, 5000, 5000];

function showMessage(messageText, gifSrc, containerIndex) {
  const container = elements.messageContainers[containerIndex];
  const isMessageDisplayed = container.querySelector("p");

  if (!isMessageDisplayed) {
    const messageParagraph = document.createElement("p");
    messageParagraph.textContent = messageText;

    const messageGif = document.createElement("img");
    messageGif.src = gifSrc;
    messageGif.alt = "Message GIF";

    container.appendChild(messageParagraph);
    container.appendChild(messageGif);

    const displayTime = messageDisplayTimes[containerIndex];

    timeouts.push(
      setTimeout(() => {
        container.innerHTML = "";
        container.style.display = "none";
      }, displayTime)
    );
  }
}

function clearAllTimeouts() {
  timeouts.forEach(clearTimeout);
  elements.messageContainers.forEach(
    (container) => (container.style.display = "none")
  );
}

function startTimeoutMessage() {
  maxScreenTimes.reduce((prevTimeout, maxScreenTime, index) => {
    const timeout = setTimeout(() => {
      showMessage(messages[index].text, messages[index].gif, index);
    }, prevTimeout + maxScreenTime);
    timeouts.push(timeout);
    return prevTimeout + maxScreenTime;
  }, 0);
}

elements.yesBtn.addEventListener("click", () => {
  clearAllTimeouts();
  elements.question.innerHTML = "Yayy, thank you!";
  elements.gif.src =
    "https://media.giphy.com/media/4RJBOuC45ptdMszWvt/giphy.gif";
  elements.yesBtn.style.display = "none";
  elements.noBtn.style.display = "none";
});

elements.noBtn.addEventListener("mouseover", () => {
  const noBtnRect = elements.noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  elements.noBtn.style.left = randomX + "px";
  elements.noBtn.style.top = randomY + "px";

  startTimeoutMessage();
});

document.addEventListener("DOMContentLoaded", function () {
  const gifImage = elements.gif;
  const question = elements.question;

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

document.addEventListener("DOMContentLoaded", function () {
  const gifImage = elements.gif;
  const question = elements.question;
  document.querySelector(".download-btn").style.display = "none";

  setTimeout(function () {
    gifImage.src = "https://media.giphy.com/media/BmfDRHdpLw6sszpKp9/giphy.gif";
    question.innerHTML = "Okay enough";
  }, 39000);
});

document.addEventListener("DOMContentLoaded", function () {
  const gifImage = elements.gif;
  const question = elements.question;
document.querySelector(".download-btn").style.display = "none";
  setTimeout(function () {
    gifImage.src = "https://media.giphy.com/media/lr3SLEcUAVlU0TTmrz/giphy.gif";
    question.innerHTML = "Say yes please!!";
    elements.noBtn.style.display = "none";
    document.querySelector(".download-btn").style.display = "block";
  }, 40000);
});

const messages = [
  {
    text: "What's taking you so long?",
    gif: "https://media.giphy.com/media/mCgALMhfxiZn4oz5P5/giphy.gif",
  },
  {
    text: "I'm skilled in JavaScript, React.js, Next.js & TypeScript.",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnZ1NnM4c25jdmJrNW90NTdqc2I1bXd2b21udTh4MGhyajdxdGs2YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JQRTxak7sNdwOmB1DP/giphy.gif",
  },
  {
    text: "I can also learn and adapt quickly",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjJ0bzY5cTBxYW4wb3F1dWtqZGxndm8xcHY5ZHh0NmJwa2c0enRoMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/NB5Ato4gbETeE6SkKh/giphy.gif",
  },
  {
    text: "I am also very hardworking",
    gif: "https://media.giphy.com/media/gFisgTI9VHKN6gUAnv/giphy.gif",
  },
  {
    text: "I loooove networking with people as well!",
    gif: "https://media.giphy.com/media/UhdWrWgDPiRUjiNyRZ/giphy.gif",
  },
  {
    text: "I am a very positive and funny being, will make the workplace even more fun!",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3NlZTJydTc2dXB6aWYzaGc2emFzcWh3bDA2ZmIwc3lxbDVuZm16dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/lOkABr28eLcZgYXq5y/giphy.gif",
  },
];

startTimeoutMessage();
