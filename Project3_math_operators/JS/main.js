function S_math() {                                                //Subtract function
    var simple_Math = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 = " + simple_Math;
}

function A_math() {
    var Plus_Math = 5 + 2;                                         //Add function
    document.getElementById("Add_Math").innerHTML = "5 + 2 = " + Plus_Math;
}

function M_math() {                                                //Multiplcation function
    var Mult = 5 * 2;
    document.getElementById("Mul_Math").innerHTML = "5 * 2 = " + Mult;
}

function Did_math() {                                              //remainder finder
    var Did = 5 % 2;
    document.getElementById("D_Math").innerHTML = "5 % 2 = " + Did; 
}

function Dec_math() {                                               // decrement function
    x = 5;
    x--;
    document.getElementById("De_math").innerHTML = "5 -- = " + x;
}

function inc_math() {                                              // increment function 
    y = 5;  
    y++;
    document.getElementById("inc_D").innerHTML = " 5 ++ = " + y;
} 


function rand_gen() {                                               //random function
    var rand = Math.random()* 10;
    document.getElementById("rand_id").innerHTML = rand;
}