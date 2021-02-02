var Global_time = new Date().getHours();                                        //global var
function Time_function() {                                                      
    var Time = new Date().getHours();                                           //define time
    var reply;
    if (Time < 12 == Time > 0) {                                                //if statement
        reply = "It is the morning.";
    }
    else if (Time > 12 == Time < 18) {                                          //else if statement
        reply = "It's the afternoon"
    }
    else {                                                                      //else statement
        reply = "it is evening time";
    }
    document.getElementById("Time_of_day").innerHTML = reply;                  //reply
}

