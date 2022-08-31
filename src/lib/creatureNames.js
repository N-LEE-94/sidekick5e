const creatureNames = [
  {
    id: 1,
    name: "Acolyte"
  },
  {
    id: 2,
    name: "Ape"
  },
  {
    id: 3,
    name: "Awakened Shrub"
  },
  {
    id: 4,
    name: "Axe Beak"
  },
  {
    id: 5,
    name: "Baboon"
  },
  {
    id: 6,
    name: "Badger"
  },
  {
    id: 7,
    name: "Bandit"
  },
  {
    id: 8,
    name: "Bat"
  },
  {
    id: 9,
    name: "Black Bear"
  },
  {
    id: 10,
    name: "Blink Dog"
  },
  {
    id: 11,
    name: "Blood Hawk"
  },
  {
    id: 12,
    name: "Camel"
  },
  {
    id: 13,
    name: "Cat"
  },
  {
    id: 14,
    name: "Cockatrice"
  },
  {
    id: 15,
    name: "Commoner"
  },
  {
    id: 16,
    name: "Constrictor Snake"
  },
  {
    id: 17,
    name: "Crab"
  },
  {
    id: 18,
    name: "Crocodile"
  },
  {
    id: 19,
    name: "Cultist"
  },
  {
    id: 20,
    name: "Darkmantle"
  },
  {
    id: 21,
    name: "Deep Gnome (Svirfneblin)"
  },
  {
    id: 22,
    name: "Deer"
  },
  {
    id: 23,
    name: "Draft Horse"
  },
  {
    id: 24,
    name: "Dretch"
  },
  {
    id: 25,
    name: "Drow"
  },
  {
    id: 26,
    name: "Dust Mephit"
  },
  {
    id: 27,
    name: "Eagle"
  },
  {
    id: 28,
    name: "Elk"
  },
  {
    id: 29,
    name: "Flying Snake"
  },
  {
    id: 30,
    name: "Flying Sword"
  },
  {
    id: 31,
    name: "Frog"
  },
  {
    id: 32,
    name: "Giant Badger"
  },
  {
    id: 33,
    name: "Giant Bat"
  },
  {
    id: 34,
    name: "Giant Centipede"
  },
  {
    id: 35,
    name: "Giant Crab"
  },
  {
    id: 36,
    name: "Giant Fire Beetle"
  },
  {
    id: 37,
    name: "Giant Frog"
  },
  {
    id: 38,
    name: "Giant Goat"
  },
  {
    id: 39,
    name: "Giant Lizard"
  },
  {
    id: 40,
    name: "Giant Owl"
  },
  {
    id: 41,
    name: "Giant Snake"
  },
  {
    id: 42,
    name: "Giant Rat"
  },
  {
    id: 43,
    name: "Giant Rat (Diseased)"
  },
  {
    id: 44,
    name: "Giant Sea Horse"
  },
  {
    id: 45,
    name: "Giant Wasp"
  },
  {
    id: 46,
    name: "Giant Weasel"
  },
  {
    id: 47,
    name: "Giant Wolf Spider"
  },
  {
    id: 48,
    name: "Gnoll"
  },
  {
    id: 49,
    name: "Goat"
  },
  {
    id: 50,
    name: "Goblin"
  },
  {
    id: 51,
    name: "Gray Ooze"
  },
  {
    id: 52,
    name: "Grimlock"
  },
  {
    id: 53,
    name: "Guard"
  },
  {
    id: 54,
    name: "Hawk"
  },
  {
    id: 55,
    name: "Hobgoblin"
  },
  {
    id: 56,
    name: "Homunculus"
  },
  {
    id: 57,
    name: "Hyena"
  },
  {
    id: 58,
    name: "Ice Mephit"
  },
  {
    id: 59,
    name: "Jackal"
  },
  {
    id: 60,
    name: "Kobold"
  },
  {
    id: 61,
    name: "Lemure"
  },
  {
    id: 62,
    name: "Lizard"
  },
  {
    id: 63,
    name: "Lizardfolk"
  },
  {
    id: 64,
    name: "Magma Mephit"
  },
  {
    id: 65,
    name: "Magmin"
  },
  {
    id: 66,
    name: "Mastiff"
  },
  {
    id: 67,
    name: "Merfolk"
  },
  {
    id: 68,
    name: "Mule"
  },
  {
    id: 69,
    name: "Noble"
  },
  {
    id: 70,
    name: "Octopus"
  },
  {
    id: 71,
    name: "Orc"
  },
  {
    id: 72,
    name: "Owl"
  },
  {
    id: 73,
    name: "Panther"
  },
  {
    id: 74,
    name: "Poisonous Snake"
  },
  {
    id: 75,
    name: "Pony"
  },
  {
    id: 76,
    name: "Pseudodragon"
  },
  {
    id: 77,
    name: "Quipper"
  },
  {
    id: 78,
    name: "Rat"
  },
  {
    id: 79,
    name: "Raven"
  },
  {
    id: 80,
    name: "Reef Shark"
  },
  {
    id: 81,
    name: "Riding Horse"
  },
  {
    id: 82,
    name: "Rust Monster"
  },
  {
    id: 83,
    name: "Sahuagin"
  },
  {
    id: 84,
    name: "Satyr"
  },
  {
    id: 85,
    name: "Scorpion"
  },
  {
    id: 86,
    name: "Scout"
  },
  {
    id: 87,
    name: "Sea Horse"
  },
  {
    id: 88,
    name: "Shadow"
  },
  {
    id: 89,
    name: "Shrieker"
  },
  {
    id: 90,
    name: "Skeleton"
  },
  {
    id: 91,
    name: "Spider"
  },
  {
    id: 92,
    name: "Sprite"
  },
  {
    id: 93,
    name: "Steam Mephit"
  },
  {
    id: 94,
    name: "Stirge"
  },
  {
    id: 95,
    name: "Swarm of Bats"
  },
  {
    id: 96,
    name: "Swarm of Beetles"
  },
  {
    id: 97,
    name: "Swarm of Centipedes"
  },
  {
    id: 98,
    name: "Swarm of Insects"
  },
  {
    id: 99,
    name: "Swarm of Rats"
  },
  {
    id: 100,
    name: "Swarm of Ravens"
  },
  {
    id: 101,
    name: "Swarm of Spiders"
  },
  {
    id: 102,
    name: "Swarm of Wasps"
  },
  {
    id: 103,
    name: "Thug"
  },
  {
    id: 104,
    name: "Tribal Warrior"
  },
  {
    id: 105,
    name: "Violet Fungus"
  },
  {
    id: 106,
    name: "Vulture"
  },
  {
    id: 107,
    name: "Warhorse"
  },
  {
    id: 108,
    name: "Warhorse Skeleton"
  },
  {
    id: 109,
    name: "Weasel"
  },
  {
    id: 110,
    name: "Wolf"
  },
  {
    id: 111,
    name: "Worg"
  },
  {
    id: 112,
    name: "Zombie"
  }
]

export default creatureNames;