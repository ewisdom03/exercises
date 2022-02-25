

function changeBg(){
    const randomBgColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomBgColor;
    
}

function changeTxt(){
    const randomTxtColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.color = randomTxtColor;
}

const randomButton = document.querySelector(".random-button");
randomButton.addEventListener("click", changeBg);
randomButton.addEventListener("click", changeTxt);


