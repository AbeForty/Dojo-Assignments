class Bike {
    constructor(public price: number, public max_speed: number) {
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
    }
    miles = 0;
    displayInfo() {
        console.log(this.price);
        console.log(this.max_speed);
        console.log(this.miles);
    }
    ride() {
        console.log("Riding");
        this.miles += 10;
        return this;
    }
    reverse() {
        console.log("Reversing");
        if (this.miles > 5) {
            this.miles -= 5;
        }
        return this;
    }
}
var Joker = new Bike(25000, 75);
var Harley = new Bike(15000, 50);
var Riddler = new Bike(12000, 45);
for (var i = 0; i < 3; i++) {
    Joker.ride();
}
Joker.reverse();
Joker.displayInfo();
for (var i = 0; i < 2; i++) {
    Harley.ride().reverse();
}
Harley.displayInfo();
for (var i = 0; i < 3; i++) {
    Riddler.reverse();
}
Riddler.displayInfo();