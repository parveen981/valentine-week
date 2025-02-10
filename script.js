// Start Experience - Hide Intro and Show Name Input
function startExperience() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("name-input").style.display = "block";
}

// Save Name and Show Main Content
function saveName() {
    let name = document.getElementById("gfName").value.trim();
    if (name === "") {
        alert("Please enter your name, my love! ❤️");
        return;
    }

    localStorage.setItem("gfName", name);
    document.getElementById("loveName").innerText = name;
    document.getElementById("name-input").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    updateLoveCounter();
}

// Update Love Counter (Days Together Since Start Date)
function updateLoveCounter() {
    let startDate = new Date("2023-02-14");
    let today = new Date();
    let daysTogether = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    document.getElementById("loveCounter").innerText = `❤️ We have been together for ${daysTogether} days! ❤️`;
}

// Show Day's Message & Trigger Floating Elements
function showDay(day) {
    let name = localStorage.getItem("gfName") || "My Love";
    let content = document.getElementById("content");

    const messages = {
        'rose': `🌹 Happy Rose Day, ${name}! 🌹`,
        'propose': `💍 Will you always be mine, ${name}? ❤️`,
        'chocolate': `🍫 Just like chocolates, you make my life sweet! 🍫`,
        'teddy': `🧸 I wish I could hug you like this teddy, ${name}! 🧸`,
        'promise': `🤞 I promise to love you forever, ${name}! 🤞`,
        'hug': `🤗 Sending you a warm hug filled with love, ${name}! 🤗`,
        'kiss': `💏 Here's a special kiss just for you, my love! ❤️💏`
    };

    content.innerHTML = `<h2>${messages[day]}</h2>`;

    createFloatingElements(day);

    if (day === "kiss") {
        setTimeout(showFinalValentineGreeting, 3000);
    }
}

// Create Floating Symbols in Background for Each Day
function createFloatingElements(day) {
    let container = document.getElementById("floating-elements");
    container.innerHTML = "";

    const symbols = {
        'rose': "🌹",
        'propose': "💍",
        'chocolate': "🍫",
        'teddy': "🧸",
        'promise': "🤞",
        'hug': "🤗",
        'kiss': "💏"
    };

    for (let i = 0; i < 30; i++) {
        let element = document.createElement("div");
        element.classList.add("floating");
        element.innerHTML = symbols[day];
        element.style.left = Math.random() * 100 + "vw";
        element.style.animationDuration = Math.random() * 3 + 2 + "s";
        container.appendChild(element);
    }
}

// Show Final Valentine's Day Greeting
function showFinalValentineGreeting() {
    document.body.innerHTML = `
        <div class="valentine-final">
            <h1>💖 Happy Valentine's Day, My Love! 💖</h1>
            <p>${localStorage.getItem("gfName")}, you are my everything! ❤️</p>
            <h2>🎆 I love you more than words can express! 🎆</h2>
            <button class="big-button" onclick="openLoveLetter()">💌 Read My Love Letter 💌</button>
        </div>
    `;
}

// Open Love Letter Page
function openLoveLetter() {
    window.location.href = "loveletter.html";
}
