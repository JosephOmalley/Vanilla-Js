function pro8_function() {                                                             //create function "pro8_function"
    var num0  = 123.5 ;                                                                //define number  
    var str0 = " this number "                                                         //define str
    var str1 = " rounded up is =  out"                                                 //define str             
    var num1 = 123.5                                                                   //define str     
    var result = str0.concat(num0.toString(), str1.slice(0, 17), num1.toPrecision(3))  //concat 4 var, make num0 to str, display between 0 and 17 in str1, display num1 toPrecision(3)  
    document.getElementById("Pro8").innerHTML = result;
}
