class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this. _speed = 3;
        this. _strength = 3;
    }
    sayName() {
        console.log(name);
    }
    drinkSake() {
        this.health += 10;
        console.log(this.name + "\'s health was increased by 10.")
    }
    showStats(){
        console.log("Health: " + this.health);
        console.log("Speed: " + this._speed);
        console.log("Strength: " + this._strength);
    }
}
class Sensei extends Ninja{
    constructor(name) {
        super(name);
    }
    speakWisdom(){
        const message = super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}
const blueNinja = new Ninja("Goemon");
const redNinja = new Ninja("Bill Gates");
const superSensei = new Sensei("Sensei Wu");

blueNinja.drinkSake()
blueNinja.showStats()
redNinja.drinkSake()
redNinja.showStats()
superSensei.speakWisdom()