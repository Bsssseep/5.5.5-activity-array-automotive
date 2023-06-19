//this includes the vehicle class as a module
const VehicleModule = require ("./vehicleBaseClass");

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

//class starts here//

class Car extends VehicleModule {
    constructor(make,model,year,color,mileage){
        super(make,model,year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    
//TO DO: Creating Instances and Testing Them
    start() {
        if (this.fuel > 0) {
            return this.started = true;
            console.log("rrrrmmm rummm");
        } else {
            
            return this.started = false;
            console.log("oh-oh! Car needs to be checked");
        }
    }

    servicecar(){
        if(this.mileage > 3000) {
            this.scheduleService = true;
            return this.scheduleService;
        }
    }
    
    leadPassenger(number){
        if(this.passenger < this.maxPassengers){
            if((number + this.passenger) <= this.maxPassengers) {
                this.passenger = number
                return this.passenger;
            }
            else{
                console.log (this.model + "" + this.make + "not enought seats.");
            }

        }   else {
            console.logt(this.model + " " + this.make + "is full");
        }

    }


}
//After you write the derived Car class, you should test it out.

//Testing the start()method //

let carOne = new Car ("Mercury", "Sedan","1965", "Color","Mileage");
console.log(carOne.make);
console.log(carOne.start());



//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...












//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
