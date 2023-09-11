let keys = document.querySelectorAll("kbd");

keys.forEach(key => {
    key.addEventListener("click", () => {
        performAction(key.textContent);
        makeAnimation(key.textContent);
    })
})

document.addEventListener("keydown", (event) => {
    performAction(event.key.toUpperCase());
    makeAnimation(event.key.toUpperCase());
})

function performAction(key) {
    if (key == "A") {
        let audio =  new Audio("media/A.mp3");
        audio.play();
    } else if (key == "S") {
        let audio =  new Audio("media/S.mp3");
        audio.play();
    } else if (key == "D") {
        let audio =  new Audio("media/D.mp3");
        audio.play();
    } else if (key == "F") {
        let audio =  new Audio("media/F.mp3");
        audio.play();
    } else if (key == "G") {
        let audio =  new Audio("media/G.mp3");
        audio.play();
    } else if (key == "H") {
        let audio =  new Audio("media/H.mp3");
        audio.play();
    } else if (key == "J") {
        let audio =  new Audio("media/J.mp3");
        audio.play();
    } else if (key == "W") {
        let audio =  new Audio("media/W.mp3");
        audio.play();
    } else if (key == "E") {
        let audio =  new Audio("media/E.mp3");
        audio.play();
    } else if (key == "T") {
        let audio =  new Audio("media/T.mp3");
        audio.play();
    } else if (key == "Y") {
        let audio =  new Audio("media/Y.mp3");
        audio.play();
    } else if (key == "U") {
        let audio =  new Audio("media/U.mp3");
        audio.play();
    }
}

function makeAnimation(keyPressed) {
    keys.forEach(key => {
        if (keyPressed == key.textContent) {
            key.classList.add("push");
            setTimeout(() => {
                key.classList.remove("push");
            }, 200);
        }
    })
}
