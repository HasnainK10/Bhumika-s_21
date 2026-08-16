function startExperience() {
  document.querySelector("#letter").scrollIntoView({ behavior: "smooth" });
  celebrate();
}

function celebrate() {
  const holder = document.getElementById("confetti");
  const pieces = ["♡", "✦", "✧", "•", "★"];

  for (let i = 0; i < 90; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti";
    piece.textContent = pieces[Math.floor(Math.random() * pieces.length)];
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.color = ["#9d5c65", "#c48d95", "#7d6468", "#d5aa73", "#242020"][Math.floor(Math.random() * 5)];
    piece.style.fontSize = (10 + Math.random() * 14) + "px";
    piece.style.setProperty("--x", (Math.random() * 35 - 17) + "vw");
    piece.style.animationDuration = (2.5 + Math.random() * 2.5) + "s";
    piece.style.animationDelay = Math.random() * .8 + "s";
    holder.appendChild(piece);
    setTimeout(() => piece.remove(), 6000);
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

window.addEventListener("load", () => {
  setTimeout(() => celebrate(), 650);
});
