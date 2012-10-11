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
	],
	heroPresent = true,
	haveWeapons = true,
	numOfMonsters = 4;

//Procedure (Function with no return value)
var startTale = function (villageName) {
	console.log("The tale begins with " + hero.name + " arriving in the small village of " + villageName + ".");
};

startTale("Dunhollow");

// Boolean Function with return.
var findHero = function (heroName) {
	if (heroPresent && haveWeapons) {
	heroStatus = " is ready!";
} else { heroStatus = " is not ready.";}
  heroFound = "Our hero, " + heroName + heroStatus;
  return heroFound;
};
var haveHero = findHero("Hunter the Slayer of Evil");
console.log(haveHero);

// Number Function + While Loop with return (Counts up number of villagers pleading)
var pleadingVillagers = function (numOfVillagers) {
while (numOfVillagers <= 4) {
	enoughVillagers = "There are " + numOfVillagers + " villagers pleading for help.";
	console.log(enoughVillagers);
	numOfVillagers++;

};
	return enoughVillagers;
};

var pleaVillagers = pleadingVillagers(0)


console.log("There are so many villagers pleading for help.")

// For Loop Inside of a Function
var showdown = function (monsterName, weaponName) {
for (m = monsterName; m < 4; m++) {
	heroFight = hero.name + "has fought and slain " + monsters[m];
		for (w = weaponName; w < 4; w++) {
			heroKill = " with his " + hero.weapons[w] + ".";
		};
	console.log(heroFight + heroKill);
};
	return heroFight;
	return heroKill;
};

var whatShowdown = showdown(0,0)

