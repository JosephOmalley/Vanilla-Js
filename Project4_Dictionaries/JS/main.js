function dictionary() {                                              //Function dictionary defined
    var animal = {
        species:"cat",
        color:"black",
        diet:"kibble",
        legs:5,                                         
    };
    delete animal.diet                                              //Delete animal.diet 
    document.getElementById("Dictionary").innerHTML = animal.diet;
}