let activePlayer = 'X';
let selectedSquares = [];

    function placeXOrO(squareNumbers) {
        if (!selectedSquares.some(element => element.includes(squareNumbers))) {
            let select = document.getElementById(squareNumbers);
            if (activePlayer === "X") {
            select.style.backgroundImage = 'url(images/x.png)' ;   
            }
            else {
                select.style.backgroundImage = 'url(Images/o.png)' ;
            }
        selectedSquares.push(squareNumbers + activePlayer);

    function checkWinConditions() {
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
            audio('media/tie.mp3');
            setTimeout(function () { resetGame(); }, 1000);
        }
        function arrayIncludes(squareA, squareB, squareC) {
            const A = selectedSquares.includes(squareA);
            const B = selectedSquares.includes(squareB);
            const C = selectedSquares.includes(squareC);

            if (A === true && B === true && C === true) {return true; }
            }
        }
        if (activePlayer === 'X') {
            activePlayer = 'O';
        }
        else {
            activePlayer = "X";
        }
        audio('media/place.mp3');
        if (activePlayer === "O") {
        function disableClick() {
                body.style.pointerEvents = 'none';
                setTimeout(function()  {body.style.pointerEvents = 'auto';}, 1000);
            }
            function audio(audioURL) {
                let audio = new Audio(audioURL);
                audio.play;
            }
            setTimeout(function () { computersTurn(); }, 1000);
        }
        return true;
    }
        
        function computersTurn() {
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