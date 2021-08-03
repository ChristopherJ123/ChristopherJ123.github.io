document.addEventListener('DOMContentLoaded', () => {

const click1 = document.getElementById("click1")
const click2 = document.getElementById("click2")
const tetris = document.getElementById("tetris")
const tetrismusic = document.getElementById("tetrismusic")
tetrismusic.play()
tetrismusic.volume = 0.2;

const startButton = document.querySelector("#start")
const grid = document.querySelector(".grid")
let squares = Array.from(document.querySelectorAll(".grid div"))

console.log(squares)
let ScoreDisplay = document.querySelector("#score")
var scoreVAR = 0
let height = 10
const colors = [
    "orange",
    "blue",
    "green",
    "red",   
    "teal",
    "yellow",
    "purple"
]

document.addEventListener("keydown", controls)

// Tetris Shapes
const LTetromino = [
    [height, height+1, height+2, 2],
    [1, height+1, height*2+1, 22],
    [height, height+1, height+2, height*2],
    [1, height+1, height*2+1, 0]
]
const JTetromino = [
    [height, height+1, height+2, 0],
    [1, height+1, height*2+1, 2],
    [height, height+1, height+2, height*2+2],
    [1, height+1, height*2+1, height*2]
]
const ZTetromino = [
    [0, 1, height+1, height+2],
    [2, height+2, height+1, height*2+1],
    [height, height+1, height*2+1, height*2+2],
    [height, height+1, height*2, 1]
]
const STetromino = [
    [2, 1, height+1, height],
    [1, height+1, height+2, height*2+2],
    [height+2, height+1, height*2+1, height*2],
    [0, height, height+1, height*2+1]
]
const ITetromino = [
    [height, height+1, height+2, height+3],
    [2, height+2, height*2+2, height*3+2],
    [height*2, height*2+1, height*2+2, height*2+3],
    [1, height+1, height*2+1, height*3+1]
]
const OTetromino = [
    [1, 2, height+1, height+2],
    [1, 2, height+1, height+2],
    [1, 2, height+1, height+2],
    [1, 2, height+1, height+2],
]
const TTetromino = [
    [1, height, height+1, height+2],
    [1, height*2+1, height+1, height+2],
    [21, height, height+1, height+2],
    [1, height, height+1, height*2+1]
]


const tetrominoTypes = [LTetromino, JTetromino, ZTetromino, STetromino, ITetromino, OTetromino, TTetromino]

let random = Math.floor(Math.random() * tetrominoTypes.length)
let currentPosition = 3
let currentRotation = 0
let currentPlacement = 3
let pos = 3
let current = tetrominoTypes[random][currentRotation]
let currentP = tetrominoTypes[random][currentRotation]


function draw() {
    current.forEach(index => {
        squares[currentPosition + index].setAttribute("id", "tetromino")
        squares[currentPosition + index].style.backgroundColor = colors[random]
    }) 
}

function undraw() {
    current.forEach(index => {
        squares[currentPosition + index].removeAttribute("id", "tetromino")
        squares[currentPosition + index].style.backgroundColor = ""
    })
}

// V FUNCTION START FROM HERE V

timer = setInterval(game, 200)

function game() {
    const groundBelow = current.some(index => squares[currentPosition + index + height].classList.contains("ground"))
    undraw()
    // undrawOutline()
    if(!groundBelow) currentPosition += height
    else setTimeout(freeze, 500)
    draw()
    // placement()
}

function freeze() {
    if(current.some(index => squares[currentPosition + index + height].classList.contains("ground"))) {
        current.forEach(index => squares[currentPosition + index].classList.add("ground"))
        current.forEach(index => squares[currentPosition + index].setAttribute("id", "tetromino"))
        random = Math.floor(Math.random() * tetrominoTypes.length)
        current = tetrominoTypes[random][currentRotation]
        currentPosition = 3
        currentRotation = 0
        currentPlacement = 3
        draw()
        addscore()
        // placement()
    }
}

// SCORE

function addscore() {
    for (let i = 0; i < 199; i += height) {
        const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9]

        if(row.every(index => squares[index].classList.contains("ground"))) {
            tetris.currentTime = 0
            tetris.play()
            scoreVAR += 10
            ScoreDisplay.innerHTML = scoreVAR
            row.forEach(index => {
                squares[index].classList.remove("ground")
                squares[index].style.backgroundColor = ""
            })
            const squaresRemoved = squares.splice(i, height)
            squares = squaresRemoved.concat(squares)
            squares.forEach(cell => grid.appendChild(cell))
        }
    }
}



// CONTROLS

function controls(e) {
    if(e.keyCode === 37) {
        moveleft()
    } else if(e.keyCode === 39) {
        moveright()
    } else if(e.keyCode === 40) {
        movedown()
    } else if(e.keyCode === 32) {
        moveinstant()
    } else if(e.keyCode === 90) {
        rotateleft()
    } else if(e.keyCode === 88) {
        rotateright()
    }
}

// CONSTROLS FUNCTION

function moveright() {
    click1.currentTime = 0
    click1.play()
    undraw()
    // undrawOutline()
    // placement()
    const rightEdge = current.some(index => (currentPosition + index) % height === 9)
    const theresABlockatRight = current.some(index => squares[currentPosition + index + 1].classList.contains("ground"))
    if(!rightEdge && !theresABlockatRight) {
        currentPosition += 1
        pos += 1
    }
    draw()
}

function moveleft() {
    click1.currentTime = 0
    click1.play()
    undraw()
    const leftEdge = current.some(index => (currentPosition + index) % height === 0)
    const theresABlockatLeft = current.some(index => squares[currentPosition + index - 1].classList.contains("ground"))
    if(!leftEdge && !theresABlockatLeft) {
        currentPosition -= 1
        pos -= 1
    }
    draw()
}

function movedown() {
    const groundBelow = current.some(index => squares[currentPosition + index + height].classList.contains("ground"))
    undraw()
    if(!groundBelow) currentPosition += height
    else setTimeout(freeze, 500)
    draw()
}

function rotateright() {
    click1.currentTime = 0
    click1.play()
    undraw()
    currentRotation ++
    if(currentRotation === 4) currentRotation = 0
    current = tetrominoTypes[random][currentRotation]
    checkRotation()
    draw()
}

function rotateleft() {
    click1.currentTime = 0
    click1.play()
    undraw()
    currentRotation --
    if(currentRotation === -1) currentRotation = 3
    current = tetrominoTypes[random][currentRotation]
    checkRotation()
    draw()
}

function checkRotation(P) {
    P = P || currentPosition
    if ((P+1) % height < 4) {
        if (isAtRight()){
            currentPosition += 1
            checkRotation(P)
        }
    }
    else if (P % height > 5) {
        if (isAtLeft()){
            currentPosition -= 1
            checkRotation(P)
        }
    }
}

function isAtRight() {
    return current.some(index=> (currentPosition + index + 1) % height === 0)  
}
  
function isAtLeft() {
    return current.some(index=> (currentPosition + index) % height === 0)
}

function moveinstant() {
    click2.currentTime = 0
    click2.play()
    undraw()
    if(current.some(index => squares[currentPosition + index].classList.contains("ground"))) {
        currentPosition += 0
        draw()
        freeze()
    } else if(current.some(index => squares[currentPosition + index + height].classList.contains("ground"))) {
        currentPosition += 0
        draw()
        freeze()
    } else if(current.some(index => squares[currentPosition + index + height*2].classList.contains("ground"))) {
        currentPosition += height
        draw()
        freeze()
    } else if(current.some(index => squares[currentPosition + index + height*3].classList.contains("ground"))) {
        currentPosition += height*2
        draw()
        freeze()
    } else if(current.some(index => squares[currentPosition + index + height*4].classList.contains("ground"))) {
        currentPosition += height*3
        draw()
        freeze()
    } else if(current.some(index => squares[currentPosition + index + height*5].classList.contains("ground"))) {
        currentPosition += height*4
        draw()
        freeze()
    } else if(current.some(index => squares[currentPosition + index + height*6].classList.contains("ground"))) {
        currentPosition += height*5
        draw()
        freeze()
    } else if(current.some(index => squares[currentPosition + index + height*7].classList.contains("ground"))) {
        currentPosition += height*6
        draw()
        freeze()
    } else if(current.some(index => squares[currentPosition + index + height*8].classList.contains("ground"))) {
        currentPosition += height*7
        draw()
        freeze()
    } else if(current.some(index => squares[currentPosition + index + height*9].classList.contains("ground"))) {
        currentPosition += height*8
        draw()
        freeze()
    } else if(current.some(index => squares[currentPosition + index + height*10].classList.contains("ground"))) {
        currentPosition += height*9
        draw()
        freeze()
    } else if(current.some(index => squares[currentPosition + index + height*11].classList.contains("ground"))) {
        currentPosition += height*10
        draw()
        freeze()
    } else if(current.some(index => squares[currentPosition + index + height*12].classList.contains("ground"))) {
        currentPosition += height*11
        draw()
        freeze()
    } else if(current.some(index => squares[currentPosition + index + height*13].classList.contains("ground"))) {
        currentPosition += height*12
        draw()
        freeze()
    } else if(current.some(index => squares[currentPosition + index + height*14].classList.contains("ground"))) {
        currentPosition += height*13
        draw()
        freeze()
    } else if(current.some(index => squares[currentPosition + index + height*15].classList.contains("ground"))) {
        currentPosition += height*14
        draw()
        freeze()
    } else if(current.some(index => squares[currentPosition + index + height*16].classList.contains("ground"))) {
        currentPosition += height*15
        draw()
        freeze()
    } else if(current.some(index => squares[currentPosition + index + height*17].classList.contains("ground"))) {
        currentPosition += height*16
        draw()
        freeze()
    } else if(current.some(index => squares[currentPosition + index + height*18].classList.contains("ground"))) {
        currentPosition += height*17
        draw()
        freeze()
    } else if(current.some(index => squares[currentPosition + index + height*19].classList.contains("ground"))) {
        currentPosition += height*18
        draw()
        freeze()
    }
}

// PLACEMENT OUTLINE

// function drawOutline() {
//     current.forEach(index => {
//         squares[currentPlacement + index].setAttribute("id", "outline")
//         squares[currentPlacement + index].style.backgroundColor = "gray"
//     })
// }

// function undrawOutline() {
//     current.forEach(index => {
//         squares[currentPlacement + index].removeAttribute("id", "outline")
//         squares[currentPlacement + index].style.backgroundColor = ""
//     })
// }


// function placement() {
//     if(current.some(index => squares[currentPosition + index].classList.contains("ground"))) {
//         currentPlacement = 0
//         drawOutline()
//     } else if(current.some(index => squares[currentPosition + index + height].classList.contains("ground"))) {
//         currentPlacement = 0 + pos
//         drawOutline()
//     } else if(current.some(index => squares[currentPosition + index + height*2].classList.contains("ground"))) {
//         currentPlacement = height*18 + pos
//         drawOutline()
//     } else if(current.some(index => squares[currentPosition + index + height*3].classList.contains("ground"))) {
//         currentPlacement = height*18 + pos
//         drawOutline()
//     } else if(current.some(index => squares[currentPosition + index + height*4].classList.contains("ground"))) {
//         currentPlacement = height*18 + pos
//         drawOutline()
//     } else if(current.some(index => squares[currentPosition + index + height*5].classList.contains("ground"))) {
//         currentPlacement = height*18 + pos
//         drawOutline()
//     } else if(current.some(index => squares[currentPosition + index + height*6].classList.contains("ground"))) {
//         currentPlacement = height*18 + pos
//         drawOutline()
//     } else if(current.some(index => squares[currentPosition + index + height*7].classList.contains("ground"))) {
//         currentPlacement = height*18 + pos
//         drawOutline()
//     } else if(current.some(index => squares[currentPosition + index + height*8].classList.contains("ground"))) {
//         currentPlacement = height*18 + pos
//         drawOutline()
//     } else if(current.some(index => squares[currentPosition + index + height*9].classList.contains("ground"))) {
//         currentPlacement = height*18 + pos
//         drawOutline()
//     } else if(current.some(index => squares[currentPosition + index + height*10].classList.contains("ground"))) {
//         currentPlacement = height*18 + pos
//         drawOutline()
//     } else if(current.some(index => squares[currentPosition + index + height*11].classList.contains("ground"))) {
//         currentPlacement = height*18 + pos
//         drawOutline()
//     } else if(current.some(index => squares[currentPosition + index + height*12].classList.contains("ground"))) {
//         currentPlacement = height*18 + pos
//         drawOutline()
//     } else if(current.some(index => squares[currentPosition + index + height*13].classList.contains("ground"))) {
//         currentPlacement = height*18 + pos
//         drawOutline()
//     } else if(current.some(index => squares[currentPosition + index + height*14].classList.contains("ground"))) {
//         currentPlacement = height*18 + pos
//         drawOutline()
//     } else if(current.some(index => squares[currentPosition + index + height*15].classList.contains("ground"))) {
//         currentPlacement = height*18 + pos
//         drawOutline()
//     } else if(current.some(index => squares[currentPosition + index + height*16].classList.contains("ground"))) {
//         currentPlacement = height*18 + pos
//         drawOutline()
//     } else if(current.some(index => squares[currentPosition + index + height*17].classList.contains("ground"))) {
//         currentPlacement = height*18 + pos
//         drawOutline()
//     } else if(current.some(index => squares[currentPosition + index + height*18].classList.contains("ground"))) {
//         currentPlacement = height*18 + pos
//         drawOutline()
//     } else if(current.some(index => squares[currentPosition + index + height*19].classList.contains("ground"))) {
//         currentPlacement = height*18 + pos
//         drawOutline()
//     }
// }

})
