const counter = document.getElementById("counter");
const button = document.getElementById("button");

let clicks = 0;

function updateCounter() {
    counter.textContent = `Counter: ${clicks}`;
}

button.addEventListener("click", () => {
    clicks++;
    updateCounter();
});

updateCounter();