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
var gunVAR = 0
var HPplayerVAR = document.getElementById("HPplayerID")
var HPcomputerVAR = document.getElementById("HPcomputerID")
var HPpVAR = 5
var HPcVAR = 5
var resultVAR = document.getElementById("result");
var humanVAR = document.getElementById("human")
var computerVAR = document.getElementById("computer")
var kiriVAR = document.getElementById("kiriID")

function mute() {
    kiriVAR.innerHTML = `<input id="game" class="menu" type="image" src="picture/0.png" onclick="engine1()"><input id="game" class="menu" type="image" src="picture/1.png" onclick="engine2()"><input id="game" class="menu" type="image" src="picture/2.png" onclick="engine3()">`
    tieVAR.pause()
    tieVAR.currentTime = 0;
    loseVAR.pause()
    loseVAR.currentTime = 0;
    winVAR.pause()
    winVAR.currentTime = 0;
    musicVAR.play()
    startVAR.innerHTML = "<p>"
}

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
    calculation()
}

// MATH RANDOM

function RandomAI() {
    player2 = Math.floor(Math.random() * 3);
    gunVAR = Math.floor(Math.random() * 5);
    playerhealVAR = Math.floor(Math.random() * 420);
    healposVAR = Math.floor(Math.random() * 2);
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
    playerhealFUNC()
    playergunFUNC()
}
function lose() {
    HPpVAR = HPpVAR - 1;
    resultVAR.textContent = "You lose!";
    score.textContent = "Your score = gae"
    loseVAR.play()
    player2FUNC()
    loseheartComputer()
    playerhealFUNC()
    playergunFUNC()
}
function win() {
    HPcVAR = HPcVAR - 1;
    resultVAR.textContent = "You win!";
    score.textContent = "Your score = wtf cheater"
    winVAR.play()
    player2FUNC()
    loseheartComputer()
    gunFUNC()
    playergunFUNC()
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
    if(HPpVAR == 8) {
        HPplayerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart' id='heart'>"
        setTimeout(HPplayer, 1000)

    } else if(HPpVAR == 7) {
        HPplayerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart' id='heart'>"
        setTimeout(HPplayer, 1000)

    } else if(HPpVAR == 6) {
        HPplayerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart' id='heart'>"
        setTimeout(HPplayer, 1000)

    } else if(HPpVAR == 5) {
        HPplayerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart' id='heart'>"
        setTimeout(HPplayer, 1000)
    
    } else if(HPpVAR == 4) {
        HPplayerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart' id='heart'>"
        setTimeout(HPplayer, 1000)

    } else if(HPpVAR == 3) {
        HPplayerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart' id='heart'>"
        setTimeout(HPplayer, 1000)

    } else if(HPpVAR == 2) {
        HPplayerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart' id='heart'>"
        setTimeout(HPplayer, 1000)

    } else if(HPpVAR == 1) {
        HPplayerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart' id='heart'>"
        setTimeout(HPplayer, 1000)

    } else if(HPpVAR == 0) {
    HPplayerVAR.innerHTML = "<p>"

        

// LOSE SCREEN
    musicVAR.pause();
    bossmusicVAR.pause();
    losemusicVAR.play();
    contentVAR.innerHTML = "<div class='endinglose'><input type='image' id='game' class='afro' src='picture/afro.png' onclick='virusFUNC()'><p class='hugefont'>YOU LOST!</p><p class='smallfont'>You have been infected by Trojan:GAYVirus.Win32/Agent!</p><p class='bigfont'>What to do now you ask?</p><p class='bigfont'>This tech support will help you!</p></div><input type='image' id='game' class='menu' src='picture/retry.png' onclick='retryFUNC()'>"
    }
}
// HEATH POINT BLINKING COMPUTER
function loseheartComputer() {
    if(HPcVAR == 8) {
        HPcomputerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart' id='heart'>"
        setTimeout(HPcomputer, 1000)

    } else if(HPcVAR == 7) {
        HPcomputerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart' id='heart'>"
        setTimeout(HPcomputer, 1000)

    } else if(HPcVAR == 6) {
        HPcomputerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart' id='heart'>"
        setTimeout(HPcomputer, 1000)

    } else if(HPcVAR == 5) {
        HPcomputerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart' id='heart'>"
        setTimeout(HPcomputer, 1000)

    } else if(HPcVAR == 4) {
        HPcomputerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart' id='heart'>"
        setTimeout(HPcomputer, 1000)

    } else if(HPcVAR == 3) {
        HPcomputerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart' id='heart'>"
        setTimeout(HPcomputer, 1000)

    } else if(HPcVAR == 2) {
        HPcomputerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart' id='heart'>"
        setTimeout(HPcomputer, 1000)

    } else if(HPcVAR == 1) {
        HPcomputerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart' id='heart'>"
        setTimeout(HPcomputer, 1000)
        bossmodeVAR = bossmodeVAR + 1
        bossfunc()
    } else if(HPcVAR == 0) {
    HPcomputerVAR.innerHTML = "<p>"

// WIN SCREEN
    musicVAR.pause();
    bossmusicVAR.pause();
    winmusicVAR.play();
    contentVAR.innerHTML = "<div class='endingwin'><a href='TicTacToe/'><input type='image' id='game' class='afro' src='picture/bryandead2.png' onclick='hitFUNC()'></a><p class='hugefont'>Bryan is die :P!</p><p class='smallfont'>You have been blessed by UwU:AntigayAura.Win32/Agent!</p><p class='bigfont'>What to do now you ask?</p><p class='bigfont'>Well celebrate of course! OwO</p></div><input type='image' id='game' class='menu' src='picture/retry.png' onclick='retryFUNC()'>"
    }
}
// HEALTH POINT DISPLAY Player
    function HPplayer () {
    if(HPpVAR == 8) {
        HPplayerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'>"
        }
    else if(HPpVAR == 7) {
        HPplayerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'>"
        }
    else if(HPpVAR == 6) {
        HPplayerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'>"
        }       
    else if(HPpVAR == 5) {
        HPplayerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'>"
        }
    else if(HPpVAR == 4) {
        HPplayerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'>"
        }
    else if(HPpVAR == 3) {
    HPplayerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'>"
        }
    else if(HPpVAR == 2) {
    HPplayerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'>"
        }
    else if(HPpVAR == 1) {
    HPplayerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'>"
        }
    }

// HEALTH POINT DISPLAY Computer
function HPcomputer () {
    if(HPcVAR == 8) {
        HPcomputerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'>"
        }
    else if(HPcVAR == 7) {
        HPcomputerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'>"
        }
    else if(HPcVAR == 6) {
        HPcomputerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'>"
        }
    else if(HPcVAR == 5) {
    HPcomputerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'>"
        }
    else if(HPcVAR == 4) {
    HPcomputerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'>"
        }
    else if(HPcVAR == 3) {
    HPcomputerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'>"
        }
    else if(HPcVAR == 2) {
    HPcomputerVAR.innerHTML = "<img src='picture/heart.png' alt='heart'> <img src='picture/heart.png' alt='heart'>"
        }
    else if(HPcVAR == 1) {
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

// UPDATE v4.0

var kanan2VAR = document.getElementById("kanan2ID")
var kiri2VAR = document.getElementById("kiri2ID")
var dhuarVAR = document.getElementById("dhuarID")
var dhuar2VAR = document.getElementById("dhuar2ID")
var gaeVAR = document.getElementById("gaeID")
var healVAR = document.getElementById("healID")
var bossmusicVAR = document.getElementById("bossID")
var healVAR2 = 0
var healposVAR = 0
var bossmodeVAR = 0

//BRYAN POWERS

function gunFUNC() {
    if(gunVAR == 0 || gunVAR == 2) {
        HPpVAR = HPpVAR + 69
        kanan2VAR.innerHTML = "<img class='gun' src='picture/gun.png'>"
        dhuarVAR.play()
        loseheartComputer()   
        setTimeout(clearkananFUNC, 1000)
    } else if(HPcVAR == 1) {
        bossmodeVAR == 1
            bossfunc()
        } else if(gunVAR == 1) {
            HPcVAR = HPcVAR + 1
            kanan2VAR.innerHTML = "<img class='gun' src='picture/heal.png'>"
            gaeVAR.play()
            healVAR.play()
            HPcomputer()
            setTimeout(clearkananFUNC, 1000)
    } else if(gunVAR == 3 && bossmodeVAR == 1) {
        HPpVAR = HPpVAR - 2
        kanan2VAR.innerHTML = "<img class='gun' src='picture/gun3.png'>"
        dhuar2VAR.play()
        loseheartComputer()   
        setTimeout(clearkananFUNC, 1000)
    } else if(gunVAR == 4 && bossmodeVAR == 1) {
        HPcVAR = HPcVAR + 2
        kanan2VAR.innerHTML = "<img class='gun' src='picture/heal2.jpg'>"
        gaeVAR.play()
        healVAR.play()
        HPcomputer()
        setTimeout(clearkananFUNC, 1000)
    }
}
function clearkananFUNC() {
    healVAR2 = 0
    if(healVAR2 == 0) {
        kanan2VAR.innerHTML = "<p></p>"
    }
}
function clearkiriFUNC() {
    healVAR2 = 0
    if(healVAR2 == 0) {
        kiri2VAR.innerHTML = "<p></p>"
    }
}

//PLAYER POWERS

function playerhealFUNC() {
    if(healVAR2 == 0 && playerhealVAR == 0) {
        if(healposVAR == 0) {
            healVAR2 = 1
            kiri2VAR.innerHTML = "<input type='image' class='heal' src='picture/heal.png' onmousedown='healplayerFUNC()'>"
            healVAR.play()
            setTimeout(clearkiriFUNC, 2000)
        }
        else if(healposVAR == 1) {
            healVAR2 = 1
            kanan2VAR.innerHTML = "<input type='image' class='heal' src='picture/heal.png' onmousedown='healplayerFUNC()'>"
            healVAR.play()
            setTimeout(clearkananFUNC, 2000)
        }
    }
    else if(bossmodeVAR == 1) {
        if(healVAR2 == 0 && playerhealVAR == 1) {
            if(healposVAR == 0) {
                healVAR2 = 1
                kiri2VAR.innerHTML = "<input type='image' class='heal' src='picture/heal2.jpg' onmousedown='healplayer2FUNC()'>"
                healVAR.play()
                setTimeout(clearkiriFUNC, 2000)
            }
            else if(healposVAR == 1) {
                healVAR2 = 1
                kanan2VAR.innerHTML = "<input type='image' class='heal' src='picture/heal2.jpg' onmousedown='healplayer2FUNC()'>"
                healVAR.play()
                setTimeout(clearkananFUNC, 2000)
            }
        }
    }
}
function playergunFUNC() {
    if(bossmodeVAR == 1) {
        if(healVAR2 == 0 && playerhealVAR == 2) {
            if(healposVAR == 0) {
                healVAR2 = 1
                kiri2VAR.innerHTML = "<input type='image' class='heal' src='picture/gun2.png' onmousedown='gunplayerFUNC()'>"
                healVAR.play()
                setTimeout(clearkiriFUNC, 2000)
            }
            else if(healposVAR == 1) {
                healVAR2 = 1
                kanan2VAR.innerHTML = "<input type='image' class='heal' src='picture/gun2.png' onmousedown='gunplayerFUNC()'>"
                healVAR.play()
                setTimeout(clearkananFUNC, 2000)
            }
        }
    }
}
function gunplayerFUNC() {
    HPcVAR = HPcVAR - 1
    dhuarVAR.play()
    kiri2VAR.innerHTML = "<p></p>"
    kanan2VAR.innerHTML = "<p></p>"
    loseheartComputer()
}


// SMALL HEAL

function healplayerFUNC() {
    HPpVAR = HPpVAR + 727
    healVAR.play()
    kiri2VAR.innerHTML = "<p></p>"
    kanan2VAR.innerHTML = "<p></p>"
    HPplayer() 
}

// BIG HEAL

function healplayer2FUNC() {
    HPpVAR = HPpVAR + 69420
    healVAR.play()
    kiri2VAR.innerHTML = "<p></p>"
    kanan2VAR.innerHTML = "<p></p>"
    HPplayer() 
}

// BOSS TIME

function bossfunc() {
    if(bossmodeVAR == 1) {
        HPcVAR = 8
        musicVAR.pause()
        bossmusicVAR.play()
        document.getElementById("asd").innerHTML = `<img src="picture/bryan2.png" class="bryanBOSS" id="bounce"></img>`
        loseheartComputer()
    }
}