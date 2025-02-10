// Function to Start the Experience
function startExperience() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("name-input").style.display = "block";
}

// Function to Save the Name and Show Main Content
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
}

// Function to Show Messages for Each Day
function showDay(day) {
    let name = localStorage.getItem("gfName") || "My Love";
    let title = document.getElementById("message-title");
    let text = document.getElementById("message-text");

    const messages = {
        'rose': ["🌹 Happy Rose Day!", `Just like a rose, our love is beautiful and forever fresh, ${name}!`],
        'propose': ["💍 Propose Day!", `If love had a name, it would be YOU. Stay with me always, ${name}!`],
        'chocolate': ["🍫 Chocolate Day!", `Life is sweet, but with you, it's even sweeter, ${name}!`],
        'teddy': ["🧸 Teddy Day!", `If I could be anything, I'd be your teddy bear forever, ${name}!`],
        'promise': ["🤞 Promise Day!", `I promise to make you smile every single day, ${name}!`],
        'hug': ["🤗 Hug Day!", `Consider this message a virtual hug full of love for you, ${name}!`],
        'kiss': ["💋 Kiss Day!", `You deserve all the love and happiness in the world! 💞`]
    };

    title.innerHTML = messages[day][0];
    text.innerHTML = messages[day][1];

    document.getElementById("message-box").style.display = "block";

    createFloatingElements(day);

    if (day === "kiss") {
        setTimeout(showFinalValentineGreeting, 3000);
    }
}

// Function to Close the Message Box
function closeMessage() {
    document.getElementById("message-box").style.display = "none";
}

// Function to Create Floating Emojis All Over the Screen
function createFloatingElements(day) {
    const symbols = {
        'rose': "🌹",
        'propose': "💍",
        'chocolate': "🍫",
        'teddy': "🧸",
        'promise': "🤞",
        'hug': "🤗",
        'kiss': "💋"
    };

    for (let i = 0; i < 30; i++) {
        let element = document.createElement("div");
        element.classList.add("floating");
        element.innerHTML = symbols[day];
        element.style.left = Math.random() * 100 + "vw";
        element.style.top = Math.random() * 100 + "vh";  // Spread across full screen
        element.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.body.appendChild(element);

        setTimeout(() => {
            element.remove(); // Remove floating elements after animation to prevent overflow
        }, 5000);
    }
}

// Function to Show the Final Valentine's Day Greeting
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

// Function to Open the Love Letter Popup
function openLoveLetter() {
    document.getElementById("gfNameLetter").innerText = localStorage.getItem("gfName") || "My Love";
    document.getElementById("love-letter-box").style.display = "block";
}

// Function to Close the Love Letter Popup
function closeLoveLetter() {
    document.getElementById("love-letter-box").style.display = "none";
}
