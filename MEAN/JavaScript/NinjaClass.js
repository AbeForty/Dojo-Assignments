function Ninja(name){
    const person = {};
    person.name = name;
    person.health = 100;
    const speed = 3;
    const strength = 3;
    person.sayName = function(){
        console.log(name);
    }
    person.drinkSake = function(){
        person.health += 10;
    }
    person.punch= function(ninja){
        if (ninja.constructor == Ninja){
            ninja.health -= 5;
        }
    }
    person.kick= function(ninja){
        if (ninja.constructor == Ninja){
            ninja.health -= 15;
        }
    }
    person.showStats = function(){
        console.log(person.health);
        console.log(speed);
        console.log(strength);
    }
    return person;
}
