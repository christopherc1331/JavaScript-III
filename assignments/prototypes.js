/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(attr) {
  this.createdAt = attr.date;
  this.name = attr.name;
  this.dimensions = attr.dimensions;
};

GameObject.prototype.destroy = function (attr) {
  return `${this.name} was removed from the game`;
};

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(attr) {
  GameObject.call(this, attr);
  this.healthPoints = attr.healthPoints;
}



CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage`;
}



/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(attr) {
  CharacterStats.call(this, attr);
  this.team = attr.team;
  this.weapons = attr.weapons;
  this.language = attr.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function () {
  return console.log(`${this.name} offers a greeting in ${this.language}`);
}

Humanoid.prototype.attackSound = function () {
  return console.log(`${this.name}: Hyah!`);
}

Humanoid.prototype.characterStatus = function () {
  return console.log(`Character: ${this.name} | Health: ${this.healthPoints} | Weapons: ${this.weapons}`);
}


Humanoid.prototype.dead = function () {
  if (this.healthPoints < 1) {
    return console.log(this.destroy());
  } else {
    return console.log(this.name + " is still alive");
  }
}


function Hero(attr) {
  Humanoid.call(this, attr);
  this.healingAmulet = () => this.healthPoints += 4;
  this.swingSword = function (enemy) {
    console.log(`${this.name}: Hyah!`);
    return enemy.healthPoints -= 2;
  }
};

Hero.prototype = Object.create(Humanoid.prototype);



function Villain(attr) {
  Humanoid.call(this, attr);
  this.darknessHeals = () => this.healthPoints += 2;
  this.castSpell = function (enemy) {
    console.log(`${this.name}: Hyah!`);
    return enemy.healthPoints -= 4;
  }
};

Villain.prototype = Object.create(Humanoid.prototype);


/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

const Gerald = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 8,
  name: 'Gerald',
  team: 'Mage Guild',
  weapons: [
    "Worthemer\'s lost staff",
    "Ancient scrolls",
  ],
  language: 'Druidic tongue',
});

const Natasha = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Natasha',
  team: 'The Round Table',
  weapons: [
    '2H sword',
    'Turtle-shell shield',
  ],
  language: 'Common Tongue',
});


Gerald.characterStatus();
Natasha.characterStatus();
Gerald.greet();
Natasha.greet();
Natasha.swingSword(Gerald);
Gerald.darknessHeals();
Gerald.characterStatus();
Natasha.characterStatus();
Natasha.healingAmulet();
Gerald.castSpell(Natasha);
Gerald.darknessHeals();
Gerald.characterStatus();
Natasha.characterStatus();
Gerald.dead();
Natasha.dead();
Gerald.castSpell(Natasha);
Gerald.castSpell(Natasha);
Gerald.castSpell(Natasha);
Gerald.castSpell(Natasha);
Natasha.characterStatus();
Natasha.dead();