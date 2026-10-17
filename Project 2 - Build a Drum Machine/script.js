const display = document.getElementById("display");
const pads = document.querySelectorAll(".drum-pad");

// Map the letters to the descriptive names
const padNames = {
  Q: "Heater 1",
  W: "Heater 2",
  E: "Heater 3",
  A: "Heater 4",
  S: "Clap",
  D: "Open-HH",
  Z: "Kick-n'-Hat",
  X: "Kick",
  C: "Closed-HH"
};

// Core function to play the sound and update UI
function playSound(pad) {
  const audio = pad.querySelector(".clip");
  if (!audio) return;

  // Set currentTime to 0 to allow rapid re-triggering
  audio.currentTime = 0;
  
  // Play the audio. We DO NOT use .catch() here to avoid breaking 
  audio.play();

  // Update the display text (Test 10)
  const key = pad.innerText.trim();
  display.innerText = padNames[key] || key;

  // Optional: Visual feedback
  pad.classList.add("active");
  setTimeout(() => pad.classList.remove("active"), 100);
}

// 1. Handle Mouse Clicks (Test 8)
pads.forEach((pad) => {
  pad.addEventListener("click", () => {
    playSound(pad);
  });
});

// 2. Handle Keyboard Presses (Test 9)
document.addEventListener("keydown", (event) => {
  // Get the key (handles lowercase "q" and uppercase "Q")
  const key = event.key.toUpperCase();
  
  // Find the audio element with the ID matching the key
  const audio = document.getElementById(key);
  
  // If the audio element exists, find its parent pad and play it
  if (audio) {
    const pad = audio.parentElement;
    if (pad && pad.classList.contains("drum-pad")) {
      playSound(pad);
    }
  }
});