function Password_Check() {                                                                     //Create function that checks password
    var pass, check;                                                                            //define vars
    pass = document.getElementById("pass").value;
    check = (pass == 1234) ? "Approved! here is the ":"Access Denied, you can't view the ";
    document.getElementById("data").innerHTML = check + "data! ";                               //links output to html
}
function User(Since, Highscore, Level) {                                                        //create constructor
    this.User_Since = Since;
    this.User_Highscore = Highscore;
    this.User_Level = Level;
}
    var User1 = new User("2019", "315", "3/5")
    var User2 = new User("2020", "215", "2/5")
    var User3 = new User("2019", "315", "3/5")
function MyUser() {                                                                             
    document.getElementById("Get_Data").innerHTML = data();
    function data() {                                                                                      //nested function to display output
    var output = "your user has been with us since " + User3.User_Since + ", has " + User3.User_Highscore + " for a highscore, and " + User3.User_Level + " is your level"; 
    document.write(output);    
    }
}


//Really sorry about the nested function issue. For some reason I thought the "function User" had "Function Myuser" nested in it .