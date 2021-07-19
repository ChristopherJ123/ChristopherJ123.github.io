const gamestart = document.querySelectorAll("input#start");
gamestart.forEach(button => {
    button.addEventListener('click', () => {
        startFUNC();
    })
});
const buttons = document.querySelectorAll("input#game");
buttons.forEach(button => {
    button.addEventListener('click', () => {
        calculation();
    })
});
// Variables
var winVAR = document.getElementById("winsound")
var tieVAR = document.getElementById("tiesound")
var loseVAR = document.getElementById("losesound")
var virusVAR = document.getElementById("virus")
var hitVAR = document.getElementById("hit")
var musicVAR = document.getElementById("music")
var losemusicVAR = document.getElementById("losemusicID")
var winmusicVAR = document.getElementById("winmusicID")
var startVAR = document.getElementById("game1")
var contentVAR = document.getElementById("contentID")
var player1 = 0
var player2 = 0
var HPplayerVAR = document.getElementById("HPplayerID")
var HPcomputerVAR = document.getElementById("HPcomputerID")
var HPpVAR = 5
var HPcVAR = 5
var resultVAR = document.getElementById("result");
var humanVAR = document.getElementById("human")
var computerVAR = document.getElementById("computer")


function engine1() {
    player1 = 0
    process()
    humanVAR.innerHTML = "<img src='picture/0.png' class='middleimg'>"
}
function engine2() {
    player1 = 1
    process()
    humanVAR.innerHTML = "<img src='picture/1.png' class='middleimg'>"
}
function engine3() {
    player1 = 2
    process()
    humanVAR.innerHTML = "<img src='picture/2.png' class='middleimg'>"
}
function process() {
    tieVAR.pause()
    tieVAR.currentTime = 0;
    loseVAR.pause()
    loseVAR.currentTime = 0;
    winVAR.pause()
    winVAR.currentTime = 0;
    RandomAI();
    
}
function mute() {
    tieVAR.pause()
    tieVAR.currentTime = 0;
    loseVAR.pause()
    loseVAR.currentTime = 0;
    winVAR.pause()
    winVAR.currentTime = 0;
    musicVAR.play()
    startVAR.innerHTML = "<p>"
}

function RandomAI() {
    player2 = Math.floor(Math.random() * 3);
}
function calculation() {
    if(player1 == 0 && player2 == 0 || player1 == 1 && player2 == 1 || player1 == 2 && player2 == 2) {
        tie();
    } else if(player1 == 0 && player2 == 1 || player1 == 1 && player2 == 2 || player1 == 2 && player2 == 0) {
        lose();
    } else {
        win();
    }
}
function tie() {
    resultVAR.textContent = "You tied!";
    score.textContent = "Your score = meh"
    tieVAR.play()
    player2FUNC()
}
function lose() {
    resultVAR.textContent = "You lose!";
    score.textContent = "Your score = gae"
    loseVAR.play()
    player2FUNC()
    loseheartPlayer()
}
function win() {
    resultVAR.textContent = "You win!";
    score.textContent = "Your score = wtf cheater"
    winVAR.play()
    player2FUNC()
    loseheartComputer()
}
function player2FUNC() {
    if(player2 == 0) {
        computerVAR.innerHTML = "<img src='picture/0.png' class='middleimg'>"
        }
        else if(player2 == 1) {
            computerVAR.innerHTML = "<img src='picture/1.png' class='middleimg'>"
            }
            else
            computerVAR.innerHTML = "<img src='picture/2.png' class='middleimg'>"
}
// HEALTH POINT BLINKING PLAYER
function loseheartPlayer() {
    HPpVAR = HPpVAR - 1;
    if(HPpVAR == 4) {
        HPplayerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart' id='heart'>"
        setTimeout(fourHPPlayer, 1000)

    }else if(HPpVAR == 3) {
        HPplayerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart' id='heart'>"
        setTimeout(threeHPPlayer, 1000)

    } else if(HPpVAR == 2) {
        HPplayerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart' id='heart'>"
        setTimeout(twoHPPlayer, 1000)

    } else if(HPpVAR == 1) {
        HPplayerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart' id='heart'>"
        setTimeout(oneHPPlayer, 1000)

    } else if(HPpVAR == 0) {
    HPplayerVAR.innerHTML = "<p>"

        

// LOSE SCREEN
    musicVAR.pause();
    losemusicVAR.play();
    contentVAR.innerHTML = "<div class='endinglose'><input type='image' id='game' class='afro' src='picture/afro.png' onclick='virusFUNC()'><p class='hugefont'>YOU LOST!</p><p class='smallfont'>You have been infected by Trojan:GAYVirus.Win32/Agent!</p><p class='bigfont'>What to do now you ask?</p><p class='bigfont'>This tech support will help you!</p></div><input type='image' id='game' class='menu' src='picture/retry.png' onclick='retryFUNC()'>"
    }
}
// HEATH POINT BLINKING COMPUTER
function loseheartComputer() {
    HPcVAR = HPcVAR - 1;
    if(HPcVAR == 4) {
        HPcomputerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart' id='heart'>"
        setTimeout(fourHPComputer, 1000)

    }else if(HPcVAR == 3) {
        HPcomputerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart' id='heart'>"
        setTimeout(threeHPComputer, 1000)

    } else if(HPcVAR == 2) {
        HPcomputerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart' id='heart'>"
        setTimeout(twoHPComputer, 1000)

    } else if(HPcVAR == 1) {
        HPcomputerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart' id='heart'>"
        setTimeout(oneHPComputer, 1000)

    } else if(HPcVAR == 0) {
    HPcomputerVAR.innerHTML = "<p>"

// WIN SCREEN
    musicVAR.pause();
    winmusicVAR.play();
    contentVAR.innerHTML = "<div class='endingwin'><a href='TicTacToe/'><input type='image' id='game' class='afro' src='picture/bryandead2.png' onclick='hitFUNC()'></a><p class='hugefont'>Bryan is die :P!</p><p class='smallfont'>You have been blessed by UwU:AntigayAura.Win32/Agent!</p><p class='bigfont'>What to do now you ask?</p><p class='bigfont'>Well celebrate of course! OwO</p></div><input type='image' id='game' class='menu' src='picture/retry.png' onclick='retryFUNC()'>"
    }
}
// HEALTH POINT DISPLAY Player
    function fourHPPlayer () {
    if(HPpVAR == 4) {
        HPplayerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'>"
        }
    }
    function threeHPPlayer () {
    if(HPpVAR == 3) {
    HPplayerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'>"
        }
    }
    function twoHPPlayer () {
    if(HPpVAR == 2) {
    HPplayerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'>"
        }
    }
    function oneHPPlayer () {
    if(HPpVAR == 1) {
    HPplayerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'>"
        }
    }

// HEALTH POINT DISPLAY Computer
function fourHPComputer () {
    if(HPcVAR == 4) {
        HPcomputerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'>"
        }
    }
    function threeHPComputer () {
    if(HPcVAR == 3) {
    HPcomputerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'>"
        }
    }
    function twoHPComputer () {
    if(HPcVAR == 2) {
    HPcomputerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'>"
        }
    }
    function oneHPComputer () {
    if(HPcVAR == 1) {
    HPcomputerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'>"
        }
    }

function virusFUNC() {
    virusVAR.play();
}
function hitFUNC() {
    hitVAR.play();
}
function retryFUNC() {
    location.reload();
    return false;
}