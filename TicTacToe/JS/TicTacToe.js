let activePlayer = 'X';
let selectedSquares = [];

function audio(audioURL) {                                                             //function to play audio
    let audio = new Audio(audioURL);
    audio.play();
}

function disableClick() {                                                           //stops player from clicking while its the copmuters turn                                        
    body.style.pointerEvents = 'none';
    setTimeout(function()  {body.style.pointerEvents = 'auto';}, 1000);
}

function resetGame() {                                                              //resetsgame 
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.background = '';
    }
    selectedSquares = [];
}



function drawWinLine(coordX1, coordY1, coordX2, coordY2) {          //finds coord points to drawn line 
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;

    function animateLineDrawing() {                                                             //animates winline drawn
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608);
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        c.stroke();
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        if (x1 <= x2 && y1 >= y2) {                                 
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
    }
}

function clear() {                                                                              //clears board of pieces
    const animationLoop = requestAnimationFrame(clear);
    c.clearRect(0, 0, 608, 608);
    cancelAnimationFrame(animationLoop);
}
disableClick();
audio('./media/win_TTT.mp3');
animateLineDrawing();
setTimeout(function () { clear(); resetGame(); }, 1000);  
}
function checkWinConditions() {                                                         //check if player wins 
    if(arrayIncludes("0X", "1X", "2X")) { drawWinLine(50, 100, 558, 100);}
else if(arrayIncludes("3X", "4X", "5X")) { drawWinLine(50, 304, 558, 304);}
else if(arrayIncludes("6X", "7X", "8X")) { drawWinLine(50, 508, 558, 508);}
else if(arrayIncludes("0X", "3X", "6X")) { drawWinLine(100, 50, 100, 558);}
else if(arrayIncludes("1X", "4X", "7X")) { drawWinLine(304, 50, 304, 558);}
else if(arrayIncludes("2X", "5X", "8X")) { drawWinLine(508, 50, 508, 558);}
else if(arrayIncludes("6X", "4X", "2X")) { drawWinLine(100, 508, 510, 90);}
else if(arrayIncludes("0X", "4X", "8X")) { drawWinLine(100, 100, 520, 520);}
else if(arrayIncludes("0O", "1O", "2O")) { drawWinLine(50, 100, 558, 100);}
else if(arrayIncludes("3O", "4O", "5O")) { drawWinLine(50, 304, 558, 304);}
else if(arrayIncludes("6O", "7O", "8O")) { drawWinLine(50, 508, 558, 508);}
else if(arrayIncludes("0O", "3O", "6O")) { drawWinLine(100, 50, 100, 558);}
else if(arrayIncludes("1O", "4O", "7O")) { drawWinLine(304, 50, 304, 558);}
else if(arrayIncludes("2O", "5O", "8O")) { drawWinLine(508, 50, 508, 558);}
else if(arrayIncludes("6O", "4O", "2O")) { drawWinLine(100, 508, 510, 90);}
else if(arrayIncludes("0O", "4O", "8O")) { drawWinLine(100, 100, 520, 520);}
else if(selectedSquares.length >= 9) {
    audio('./Media/tie_TTT.mp3');                                                       //play audio file tie
    setTimeout(function () { resetGame(); }, 1000);                                     //delay reset
}

function arrayIncludes(squareA, squareB, squareC) {                                         
    const A = selectedSquares.includes(squareA);
    const B = selectedSquares.includes(squareB);
    const C = selectedSquares.includes(squareC);

    if (A === true && B === true && C === true) {return true; }                         //finializes win conditions 
    }
}

    function placeXOrO(squareNumbers) {                                                 //allows player to place png image of TIcTacToe Icon 
        if (!selectedSquares.some(element => element.includes(squareNumbers))) {
            let select = document.getElementById(squareNumbers);
            if (activePlayer === "X") {
            select.style.backgroundImage = 'url(images/X_TTT.png)' ;   
            }
            else {
                select.style.backgroundImage = 'url(Images/O_TTT.png)' ;
            }
        selectedSquares.push(squareNumbers + activePlayer);

    
        checkWinConditions();                                                           //calls win condition function
        if (activePlayer === 'X') {
            activePlayer = 'O';
        }
        else {
            activePlayer = "X";
        }
        audio('./Media/place_TTT.mp3');
        if (activePlayer === "O") {
        
            disableClick();
            
            setTimeout(function () { computersTurn(); }, 1000);
        }
        return true;
    }
    
        
        function computersTurn() {                                                      //allow computer to pick random spot on table
            let success = false;
            let pickasquare;
            while(!success) {
                pickasquare = String(Math.floor(Math.random() * 9));
                if (placeXOrO(pickasquare)) {
                    placeXOrO(pickasquare);
                    success = true;

                };
            }

        }
    }