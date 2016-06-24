//JavaScript Review File

console.log("Hello!");

var age = 16;
var myBirthYear = 1999;
var graduationYear = 2017;
var numberOfBrothersAndSisters = 8;
var numberOfKids = 0;

//string concantenation
console.log("I am " + age + " years old.");
console.log("I was born in the year of " + myBirthYear + ".")
console.log("I have " + numberOfBrothersAndSisters + " brothers and sisters.")
console.log("I have " + numberOfKids + " kids.")

if(graduationYear >= 2017){
	console.log("I will graduate from high school in " + graduationYear + ".")
} else {
	console.log("I graduated in " + graduationYear + ".")
}

function drums() {
    document.getElementById("demo").innerHTML = "Country";
}

function birthday() {
    document.getElementById("demo2").innerHTML = "Simple Song by the Shins.";
}

function canyon() {
    document.getElementById("demo3").innerHTML = "The Shins or the Killers.";
}

//manipulating the DOM
document.getElementById("my-age").innerHTML = age;
document.getElementById("my-birth-year").innerHTML = myBirthYear;
document.getElementById("graduation-year").innerHTML = graduationYear;
document.getElementById("number-of-brothers-and-sisters").innerHTML = numberOfBrothersAndSisters;
document.getElementById("number-of-kids").innerHTML = numberOfKids;



var counter = 0;
while(counter < 10){
	counter++;
	console.log("The score is " + counter + ".")
}

for (var i = 0; i <= 100; i+=25){
if(i === 50){
	console.log(i + " " + "Halfway there!")
} else {
	console.log(i)
}
}

for (var x = 1; x <= 10; x+=1){
if(x === 9){
	console.log("nine")
} else if(x === 10) {
	console.log("ten")
} else{
	console.log(x)
}
}


var friends = ["Bryce", "Joey", "Stephanie", "Sasha"];
var friendList = "";

for(y = 0; y < friends.length; y++){
	friendList += friends[y];
}
	console.log(friendList);

var abc = "abcdefghijklmnopqrstuvwxyz";
var abcArray = ["a", "b", "c", "d", "e"];
var numberArray = [1, 2, 3, 4, 5];

console.log(abc.charAt(3));
console.log(abcArray[2]);

//Another way to create an array
var typesOfSoda = new Array();
typesOfSoda[0] = "Coke";
typesOfSoda[1] = "Sprite";
typesOfSoda[2] = "Pepsi";

console.log(typesOfSoda);

var worstTypesOfSoda = new Array();
worstTypesOfSoda[0] = "Diet Mountain Dew";
worstTypesOfSoda[1] = "Diet Coke";
worstTypesOfSoda[2] = "Diet Pepsi";

var bestCandyBars = ["Snickers", "Twix", "Reece's", "Hershy's"];

console.log(bestCandyBars);

var mixedArray = [1, "Bill Gates", (5 > 1)];
console.log(mixedArray);

for(var p = 0; p <= 100; p+=5){
	if(p === 50){
		console.log(p + " I'm rich!")
	} else {
		console.log(p)
	}
}

var friends = ["Joshua", "Austin", "Bryce", "Jeremiah", "Nigel", "Darrien", "Jake", "James"];
for(var i = 0; i < friends.length; i++){
	if(friends[i].charAt(0) == "J"){
		console.log(friends[i]);
	}
}

//Object
var beachBag = {
	numBottles		: 3,
	colorOfTowel	: "Green",
	isWet			: false,
	
	zipUp			: function(){
		console.log("Zipper sound");
	}
}

console.log(beachBag);
console.log(beachBag.isWet);
beachBag.zipUp();

var player = {
	numWeapons			:15,
	hasArmor			:true,
	life				:1000,
	damage				:10,
	hasSword			:true,
	name				:"Jake",
	
	attack				:function(target){
		console.log(this.name + " attacks " + target + " for " + 10 + " damage!");
	},

	attackWithSword		:function(target){
		var damage = 25 * this.damage;
		console.log(this.name + " did " + damage + " damage to " + target);
	},

	attackWithSuperSledge:function(target){
		var damage = 10000 * this.damage;
		console.log(this.name + " used his ultimate move and did " + damage + " damage to " + target + "!");
		console.log(this.name + " finishes the bread " + target + " gave him with a grin.");
	}
}

console.log(player);


var creature = {
	alive	:true,
	eats	:true,
	runs	:true,
	jumps	:true,
	numEyes	:2,
	cute	:true,
	legs	:4,

	breath	:function(){
		console.log("A creepy hiss.")
	}

}

console.log(creature);
creature.breath();

var snake = Object.create(creature);

console.log(snake.numEyes);
snake.legs = 0;
console.log(snake.legs);
snake.breath = function(){
	console.log("Hssssssssssssssssssssss");
}

var rabbit = Object.create(creature);

rabbit.ears = "Huge";
console.log(rabbit.ears);

var cow = {
	spots	:12,
	horns	:2,

	kick	:function(){
		console.log("Mooooo!")
	}
}

console.log(cow);
cow.kick();


$(document).ready(function(){
	$('#hw').click(function(){
		$('#fadeInHelloWorld').fadeIn(2000);
	});
});
