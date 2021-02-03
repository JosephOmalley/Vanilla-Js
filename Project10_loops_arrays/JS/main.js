
 let car = {
     make: "Dodge ",
     model: "Viper ",
     year: "2021 ",
     color: "red ",
     description : function() {
         return "the car is a " + this.year + this.color + this.make
         + this.model;
     }
    }
 document.getElementById("car_object").innerHTML = car.description();
     
