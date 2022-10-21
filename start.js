const character = document.getElementById("character");
const block = document.getElementById("block");
const gameOver = document.getElementById("gameOver");

const jump = () => {
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}

const checkDead = setInterval(function() {
    const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft<65 && blockLeft>0 && characterTop>=150) {
        block.style.animation = "none";
        block.style.display = "none";
        character.style.animation = "none";
        gameOver.style.display = "initial"
    }
},10);


