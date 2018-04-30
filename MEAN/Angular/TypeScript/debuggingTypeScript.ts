var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this? 
// 9 is a number not a string, change it to a string
myString = "9";
function sayHello(name: string){
   return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
// 9 is still a number not a string, change it to a string
console.log(sayHello("9"));
function fullName(firstName: string, lastName: string, middleName: string){
   let fullName = `${firstName} ${middleName} ${lastName}`;
   return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
// Add an empty string between Jimbo and Jones
console.log(fullName("Jimbo","", "Jones"));
interface Student {
   firstName: string;
   lastName: string;
   belts: number;
}
function graduate(ninja: Student){
   return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
   firstName: "Christine",
   lastName: "Yang",
   belts: 2
}
const jay = {
   firstName: "Jay",
   lastName: "Patel",
   belts: 4
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
// When jay was created it is missing the attribute belts (it was misspelled as belt)
console.log(graduate(jay));
class Ninja {
   fullName: string;
   constructor(
      public firstName: string,
      public lastName: string){
         this.fullName = `${firstName} ${lastName}`;
      }
   debug(){
      console.log("Console.log() is my friend.")
   }
}
// This is not making an instance of Ninja, for some reason:
// When creating the instance of Ninja, the keyword "new" was missing. Also, the person didn't pass any parameters into the constructor that expected something.
const shane = new Ninja("Shane", "Bower");
// Since I'm having trouble making an instance of Ninja, I decided to do this:
const turing = {
   fullName: "Alan Turing",
   firstName: "Alan",
   lastName: "Turing"
}
// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja){
   return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
// Changed the object passed into shane because turing is not a instance of Ninja.
console.log(study(shane));
var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => x * x;
// This is not showing me what I want:
// Remove the curly braces around x * x
console.log(square(4));
// This is not working:
// Didn't add parentheses around the x,y to make the constructor.
var multiply = (x,y) => x * y;
// Nor is this working:
// Add the curly braces around let and ending it after the return statement. Without it, it tries to return let, which is not possible.
var math = (x, y) => {let sum = x + y;
   let product = x * y;
   let difference = Math.abs(x-y);
   return [sum, product, difference]};
class Elephant {
   constructor(public age: number){}
   birthday = ()=>{
      this.age++;
   }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
   console.log(`Babar's age is ${babar.age}.`)
   }, 2000)
// Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
// The person didn't call birthday as a function (missing the "()"). Removed function and added a "=>" after the parentheses