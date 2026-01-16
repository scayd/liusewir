const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const questionText = document.getElementById("question");
const mainContainer = document.getElementById("main-container");
const successContainer = document.getElementById("success-container");
const garden = document.getElementById("garden");

const noTexts = [
  "Hayır mı?",
  "Emin misin?",
  "Gerçekten mi?",
  "Yapma be...",
  "Düşün derim",
  "Tekrar mı?",
  "Lütfeeeeen",
  "Cesur seçim",
  "Ölümlü dünya...",
  "Hadi barışalım",
  "Son kararın mı?",
];

let noCount = 0;
let yesScale = 1;

noBtn.addEventListener("click", () => {
  noCount++;

  yesScale += 0.15;
  yesBtn.style.transform = `scale(${yesScale})`;

  const currentNoScale = 1 - noCount * 0.05;
  if (currentNoScale > 0) {
    noBtn.style.transform = `scale(${currentNoScale})`;
  } else {
    noBtn.style.display = "none";
  }

  const textIndex = (noCount - 1) % noTexts.length;
  noBtn.innerText = noTexts[textIndex];
});

yesBtn.addEventListener("click", () => {
  mainContainer.style.opacity = "0";
  mainContainer.style.transform = "scale(0.8)";

  setTimeout(() => {
    mainContainer.classList.add("hidden");
    successContainer.classList.remove("hidden");
    successContainer.style.display = "flex";

    createFlowers();
  }, 500);
});

function createFlowers() {
  const emojis = ["🌸", "🌹", "💐", "🌺", "🌷", "🌻", "✨", "💖"];
  const flowerCount = 40;

  for (let i = 0; i < flowerCount; i++) {
    setTimeout(() => {
      const flower = document.createElement("div");
      flower.classList.add("flower");

      flower.innerText = emojis[Math.floor(Math.random() * emojis.length)];

      const x = Math.random() * 95;
      const y = Math.random() * 95;

      flower.style.left = `${x}vw`;
      flower.style.top = `${y}vh`;

      const size = Math.random() * 2 + 1.5;
      flower.style.fontSize = `${size}rem`;

      flower.style.animationDuration = `${Math.random() * 2 + 2}s`;

      garden.appendChild(flower);
    }, i * 80);
  }
}
