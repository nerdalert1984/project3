// Author: Matt Ballert
// 10/10/2012
// Project 3
// I won at JavaScript... and it was advanced!

//Global Variables
	//Object
var hero = { 
	alignment: "Lawful Good", 
	name: "Hunter, Bane of Evil", 
	weapons: ["Dragon Fang Dagger", 
			  "Longsword of the Undying Flame", 
			  "Blessed Hammer of the Gods", 
			  "Bastard Blade of Dimensional Sundering" 
	], 
	age: 5,
	heroClass: "Adventurer",
	homeBase: "The Valley of Spielburg",
	askQuest: function () {
		console.log("So you want to be a hero?");
		}
};

var monsters = [" Hunpar the Goblin ", 
				 " Wretchmaw the Troll King ", 
				 " Arch-Lich Volsonis ",
				 " Firereek the Red Dragon "
	];

//Procedure (Function with no return value)
var startTale = function (villageName) {
	console.log("The tale begins with " + hero.name + " arriving in the small village of " + villageName + ".");
};

startTale("Dunhollow");



