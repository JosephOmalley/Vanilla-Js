function whileloop() {                                                                  //while loop created
var output = "";                                                                    
var i = 0;
while (i < 10) {                                                                        //as long as i is less then do next step
  output += "<br>The number is " + i;                                                   //output is "The number is" + i
  i++;                                                                                  //i is increased by 1 then     
}                                                                                       // loop iterates until the conditional is met
document.getElementById("wLoop").innerHTML = output;
}


function forLoop() {                                                                    // for loop starts 
    var output = "";
    var i;
    for (i = 0; i < 5; i++) {                                                           //declare "var i" as 0, for i less then 5; i++ 
        output += "the number is " + i + "<br>";                                        //repeat prev step until the loop conditional is met
    }
    document.getElementById("fLoop").innerHTML = output;                                
}

function aryFunction() {                                                                //create function aryFunction()
    var guitar = [];                                                                    //define key(guitar) for value pair 
    guitar[0] = "electric"                                                              //list value for each index             
    guitar[1] = "acoustic"
    guitar[2] = "nylon"
    var x = guitar[1]
    document.getElementById("ary").innerHTML = x;                                       //output var x to innerHTML
}

function letFunction() {                                                                //create let function
    let dog = {                                                                         // create object dog
    status: "good boy ",                                                                //create properties     
     hungry: "yes ",
     color: "golden ",
    };
    document.getElementById("letF").innerHTML = dog.hungry;                             //output (dog.status) to innerHTML 
}


