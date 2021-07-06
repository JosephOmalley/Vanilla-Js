//Canvas javascript 
var canvas = document.getElementById("Hangmancanvas")
    var ctx = canvas.getContext("2d");
window.addEventListener("load", () => { //create gallow
    canvas.width = 1235;
    canvas.height = 400;
    ctx.beginPath();
    ctx.moveTo(648, 393);
    ctx.lineTo(648, 95);
    ctx.lineTo(720, 95);
    ctx.lineTo(720, 120);
    ctx.stroke(); 
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(613, 393);
    ctx.lineTo(683, 393);
    ctx.stroke();   
    ctx.closePath();
})
var addLimbCounter = 0;

function addLimbIfWrongGuessUntilWholeMan(){//add limb when guess == wrong
    addLimbCounter++;
    console.log(addLimbCounter);
    if (addLimbCounter == 1){ //Head
        ctx.beginPath();
        ctx.arc(720, 145, 25, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
    }
    else if (addLimbCounter == 2){//Body
        ctx.beginPath();
        ctx.moveTo(720, 170);
        ctx.lineTo(720, 240);
        ctx.stroke();
        ctx.closePath();
    }
    else if (addLimbCounter == 3){//LeftArm 
        ctx.beginPath();
        ctx.moveTo(720, 190);
        ctx.lineTo(695, 220);
        ctx.stroke();
        ctx.closePath();}
    else if (addLimbCounter == 4){//RightArm
        ctx.beginPath();
        ctx.moveTo(720, 190);
        ctx.lineTo(745, 220);
        ctx.stroke();
        ctx.closePath();
    }
    else if (addLimbCounter == 5){//Leftleg
        ctx.beginPath();
        ctx.moveTo(720, 240);
        ctx.lineTo(745, 280);
        ctx.stroke();
        ctx.closePath();
    }
    else if (addLimbCounter == 6){//RightLeg 
        ctx.beginPath();
        ctx.moveTo(720, 240);
        ctx.lineTo(695, 280);
        ctx.stroke();
        ctx.closePath();
    }
    else{
        alert("Out of guesses");
        window.location.reload();
    }
}
//store categories/words 
var comp_HW = [
    ["M", "O", "T", "H", "E", "R", "B", "O", "A", "R", "D"],
    ["C", "E", "N", "T", "R", "A", "L", " ", "P", "R", "O", "C", "E", "S", "S", "I", "N", "G", " ", "U", "N", "I", "T"]
];
var rand_WORD = [
    ["F", "U", "N"],
    ["G", "A", "M", "E"],
    ["H", "A", "P", "P", "Y"]
];
var prog_LANG = [
    ["J", "A", "V", "A", " ", "S", "C", "R", "I", "P", "T"],
    ["J", "A", "V", "A"],
    ["P", "Y", "T", "H", "O", "N"]
];

var prog_FUND = [
    ["W", "H", "L", "I", "E", " ", "L", "O", "O", "P"],
    ["F", "O", "R", " ", "L", "O", "O", "P"],
    ["I", "F", " ", "E", "L", "S", "E"]
];
var choosenWordToGuess = []
var hide = [];
var lengthOfSelectedCategory;
var randomIndexInRangeOfSelectedCategory; 
var indexOfSpaces = [];
//ModalDialog + 
var storeCategory;
$("#submit").click(function() {
    storeCategory = $("#selectCategory option:selected").val();
    myModal.style.display = "none";
    switch(storeCategory){
        case "comp_HW":
            randomIndexInRangeOfSelectedCategory = Math.floor(Math.random() * comp_HW.length);
            choosenWordToGuess = comp_HW[randomIndexInRangeOfSelectedCategory];
            break;
        case "rand_WORD":
            randomIndexInRangeOfSelectedCategory = Math.floor(Math.random() * rand_WORD.length);
            choosenWordToGuess = rand_WORD[randomIndexInRangeOfSelectedCategory];
            break;
        case "prog_LANG": 
            randomIndexInRangeOfSelectedCategory = Math.floor(Math.random() * prog_LANG.length);
            choosenWordToGuess = prog_LANG[randomIndexInRangeOfSelectedCategory];
            break;
        case "prog_FUND": 
            randomIndexInRangeOfSelectedCategory = Math.floor(Math.random() * prog_FUND.length);
            choosenWordToGuess = prog_FUND[randomIndexInRangeOfSelectedCategory];
            break;
    }
    createHide();
    $("#display").append(hide);
});

$(document).ready(function(){ 
    myModal.style.display = "block";
    });

function createHide(){
    for (let i = 0; i < choosenWordToGuess.length; i++){
        hide.push('0');
        if (choosenWordToGuess[i] == " "){
            indexOfSpaces.push(i);
        } 
    }
    indexOfSpaces.forEach(index => hide[index] = " ");
}

$(document).ready(function(){
    $(".button-rows").click(function(){
        var charGuessed = $(this).attr("data-char")
        var ifAtleastOneCharInArrayIsCorrectGuess = true;
        for (let i = 0; i < choosenWordToGuess.length; i++){               
            if (charGuessed == choosenWordToGuess[i]){ 
                ifAtleastOneCharInArrayIsCorrectGuess = false; //since the guess only need to match one ele in the array this makes sure that atleast one 
                hide[i] = charGuessed;
                $("#display").empty();
                $("#display").append(hide);
                choosenWordToGuess.toString() == hide.toString() ? setTimeout(function(){ alert("You won"); window.location.reload()}, 50) : console.log("Guessed right but not done");
            }
        }
        if (ifAtleastOneCharInArrayIsCorrectGuess){
            addLimbIfWrongGuessUntilWholeMan();
            console.log("This letter was not a correct guess")
            
        }
    });
});