// Declare and initialize variables
let characterName = "Captain Pickle";
let age = Math.floor(Math.random() * 60) + 10;
let isSuperhero = Math.random() > 0.5;
let specialPowers = ["laser eyes", "super speed", "teleportation", "mind reading", "flying"];
let favoriteFood = "pizza";

// Function to update the character's description
function updateDescription() {
    const randomPower = specialPowers[Math.floor(Math.random() * specialPowers.length)];
    const heroStatus = isSuperhero ? "a superhero" : "not a superhero";

    const description = `Meet ${characterName}, a ${age}-year-old who loves ${favoriteFood}. They are ${heroStatus}, and their special power is ${randomPower}!`;

    document.getElementById("characterDescription").innerText = description;
}

// Function to generate a random character description
function generateRandomCharacter() {
    const names = ["Captain Waffles", "Sir Pickle", "Lady Banana", "Professor Noodle", "Agent Mango"];
    const foods = ["tacos", "sushi", "waffles", "spaghetti", "burgers"];

    characterName = names[Math.floor(Math.random() * names.length)];
    age = Math.floor(Math.random() * 80) + 5;
    favoriteFood = foods[Math.floor(Math.random() * foods.length)];
    isSuperhero = Math.random() > 0.5;

    updateDescription();
}

// Functions to update character's age
function increaseAge() {
    age++;
    updateDescription();
}

function decreaseAge() {
    if (age > 0) {
        age--;
    }
    updateDescription();
}
