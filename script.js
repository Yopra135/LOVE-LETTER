
const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const heartBtn = document.getElementById("heartBtn");
const instruction = document.getElementById("instruction");
const message = document.getElementById("message");

// Open the letter
function openLetter() {
    envelope.classList.add("open");
    instruction.textContent = "A little message, just for you ❤️";
}

openBtn.addEventListener("click", openLetter);
envelope.addEventListener("click", openLetter);

// Close the letter
closeBtn.addEventListener("click", () => {
    envelope.classList.remove("open");
    instruction.textContent = "Click the envelope to open your letter.";
    message.textContent = "";
});

// Create floating hearts
function createHeart() {
    const heart = document.createElement("span");

    heart.classList.add("floating-heart");
    heart.textContent = ["❤️", "💕", "💗", "💖"][
        Math.floor(Math.random() * 4)
    ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (18 + Math.random() * 25) + "px";

    document.body.appendChild(heart);

    heart.addEventListener("animationend", () => {
        heart.remove();
    });
}

// Send love
heartBtn.addEventListener("click", () => {
    message.textContent = "Sending you lots of love! ❤️";

    for (let i = 0; i < 20; i++) {
        setTimeout(createHeart, i * 100);
    }
});
