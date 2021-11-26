"use strict";

// Data needed for a later exercise
const flights =
	"_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
	[weekdays[3]]: {
		open: 12,
		close: 22,
	},
	[weekdays[4]]: {
		open: 11,
		close: 23,
	},
	[weekdays[5]]: {
		open: 0, // Open 24 hours
		close: 24,
	},
};

const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],

	// ES6 Enhanced object literals
	openingHours,

	order(starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},

	orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
		console.log(
			`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
		);
	},

	orderPasta(ing1, ing2, ing3) {
		console.log(
			`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
		);
	},

	orderPizza(mainIngredient, ...otherIngredients) {
		console.log(mainIngredient);
		console.log(otherIngredients);
	},
};

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
	const [type, from, to, time] = flight.split(";");
	const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
		"_",
		" "
	)} ${getCode(from)} to ${getCode(to)} (${time.replace(":", "h")})`.padStart(
		40
	);
	console.log(output);
}

///////////////////////////////////////
// Coding Challenge #4 (My Solution)
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

///////////////////////////////////////
// Coding Challenge #4 (My Solution)

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
const btn = document.querySelector("button");
// const inputText = document.querySelector("textarea").value;
const inputText =
	"underscore_case first_name Some_Variable calculate_AGE delayed_departure";

const toCamelCase = function (text) {
	const CleanText = text
		.replaceAll("\n", " ")
		.replaceAll("_", " ")
		.toLowerCase()
		.split(" ");
	const upperText = [];
	const completeText = [];

	let a = 1;
	for (const t of CleanText) {
		if (a % 2 !== 0) {
			upperText.push(t);
		} else {
			upperText.push(t[0].toUpperCase() + t.slice(1));
		}
		a++;
	}

	for (let b = 0; b < upperText.length; b += 2) {
		upperText[b] = upperText[b] + upperText[b + 1];
	}

	for (let c = 0; c < upperText.length; c++) {
		if (c % 2 == 0) {
			completeText.push(upperText[c]);
		}
	}

	for (let d = 1; d < completeText.length + 1; d++) {
		console.log(`${completeText[d - 1].padEnd(20, " ")}${"✅".repeat(d)}`);
	}
};

btn.addEventListener("click", toCamelCase(inputText) );

///////////////////////////////////////
// Strings #3

console.log("a+very+nice+string".split("+"));
console.log("Jonas schmedtmann".split(" "));

const [firstName, lastName] = "Jonas Schmedtmann".split(" ");

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizName = function (name) {
	const names = name.split(" ");
	const namesUpper = [];

	for (const n of names) {
		// namesUpper.push(n[0].toUpperCase() + n.slice(1));
		namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
	}
	console.log(namesUpper.join(" "));
};

capitalizName("jessica ann smith davis");
capitalizName("jirat chutrakul");

// Padding
const message = "Go to gate 23!";
console.log(message.padStart(20, "+").padEnd(30, "+"));
console.log("Jonas".padStart(20, "+").padEnd(30, "+"));

const maskCredditCard = function (number) {
	const str = number + "";
	const last = str.slice(-4);
	return last.padStart(str.length, "*");
};

console.log(maskCredditCard(42346544));
console.log(maskCredditCard(2545456563434));
console.log(maskCredditCard("49587359837986767"));

// Repeat
const message2 = "Bad weather... All departures delayed ";
console.log(message2.repeat(5));

const planesInLine = function (n) {
	console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

///////////////////////////////////////
// Strings #2

const airline = "TAP Air Portugal";

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = "jONAS"; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
	passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing email
const email = "hello@jonas.io";
const loginEmail = "  Hello@Jonas.Io \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const noramlizedEmail = loginEmail.toLowerCase().trim();
console.log(noramlizedEmail);
console.log(email === noramlizedEmail);

// Replacing
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement =
	"All passengers come to boarding door 23. Boarding door 23!";
// ES2021
console.log(announcement.replaceAll("door", "gate"));
// Before ES2021
console.log(announcement.replace(/door/g, "gate"));

// Boolearns
const plane = "Airbus A320new";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Air"));

if (plane.startsWith("Airbus") && plane.endsWith("Airbus"))
	console.log("Part of the NEW Airbus family");

// Practice exercise
const checkBaggage = function (items) {
	const baggage = items.toLowerCase();
	if (baggage.includes("knife") || baggage.includes("gun")) {
		console.log("You are not allowed on board");
	} else {
		console.log("Welcome aboard!");
	}
};

checkBaggage("I have a laptop, some food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

///////////////////////////////////////
// Strings #1

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("portugal"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
	// B and E are middle seats
	const s = seat.slice(-1);
	s === "B" || s === "E"
		? console.log("You got the middle seat")
		: console.log("You got lucky");
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("jonas"));
console.log(typeof new String("jonas"));

console.log(typeof new String("jonas").slice(1));

///////////////////////////////////////
// Coding Challenge #3

const gameEvents = new Map([
	[17, "⚽️ GOAL"],
	[36, "🔁 Substitution"],
	[47, "⚽️ GOAL"],
	[61, "🔁 Substitution"],
	[64, "🔶 Yellow card"],
	[69, "🔴 Red card"],
	[70, "🔁 Substitution"],
	[72, "🔁 Substitution"],
	[76, "⚽️ GOAL"],
	[80, "⚽️ GOAL"],
	[92, "🔶 Yellow card"],
]);

const events = new Set([...gameEvents.values()]);
console.log(events);

gameEvents.delete(64);

// Bonus
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
	`An event happened, on average, every ${time / gameEvents.size} minutes`
);

for (const [minute, event] of gameEvents) {
	minute <= 45
		? console.log(`[FIRST HALF] ${minute}: ${event}`)
		: console.log(`[SECOND HALF] ${minute}: ${event}`);
}

///////////////////////////////////////
// Maps: Iterations

const question = new Map([
	["Question", "What is the best programming language in the world?"],
	[1, "C"],
	[2, "Java"],
	[3, "Javascript"],
	["correct", 3],
	[true, "Correct 🎉"],
	[false, "Try again!"],
]);
console.log(question);

// Conver object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get("Question"));
for (const [key, value] of question) {
	if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt("Your Answer"));
const answer = 3;
console.log(answer);
console.log(question.get(question.get("correct") === answer));

// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

///////////////////////////////////////
// Maps Fundamentals

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
	.set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
	.set("open", 11)
	.set("close", 23)
	.set(true, "We are open")
	.set(false, "We are closed");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
rest.get(time > rest.get("open") && time < rest.get("close"));

console.log(rest.has("categories"));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, "Test");
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

///////////////////////////////////////
// Sets

const ordersSet = new Set([
	"Pasta",
	"Pizza",
	"Pizza",
	"Risotto",
	"Pasta",
	"Pizza",
]);

console.log(ordersSet);
console.log(new Set("Jonas"));
console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
ordersSet.delete("Risotto");
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
	new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);

console.log(new Set("jonasschmedtmann").size);

///////////////////////////////////////
// Coding Challenge 2

for (const [key, value] of Object.entries(game.scored))
	console.log(`Goal ${Number(key) + 1}: ${value}`);

const vOdds = Object.values(game.odds);
let sum = 0;
for (const odd of vOdds) sum += odd;
sum /= vOdds.length;
console.log(`Average odd is:${sum}`);

for (const [i, el] of Object.entries(game.odds)) {
	const teamName = i === "x" ? "draw" : `Victory ${game[i]}`;
	console.log(`Odds of ${teamName}: ${el}`);
}

///////////////////////////////////////
// Looping objects

// Property names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
	openStr += `${day}, `;
}
console.log(openStr);

// Property Values
const values = Object.values(openingHours);
console.log(values);

// Entries object
const entries = Object.entries(openingHours);
// console.log(entries);

// {key, value}
for (const [day, { open, close }] of entries) {
	console.log(`On ${day} we open at ${open} and close at ${close}`);
}

///////////////////////////////////////
// Optional Chaining

// if (restaurant.openingHours && restaurant.openingHours.mon)
// 	console.log(restaurant.openingHours.mon.open);

// With optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
	const open = restaurant.openingHours[day]?.open ?? "closed";
	console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

// Arrays
const users = [{ name: "Jonas", email: "hello@jonas.io" }];
// const users = [];

console.log(users[0]?.name ?? "User array empty");

///////////////////////////////////////
//  The For-Of Loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
	console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);

///////////////////////////////////////
// Coding Challenge #1

const game = {
	team1: "Bayern Munich",
	team2: "Borrussia Dortmund",
	players: [
		[
			"Neuer",
			"Pavard",
			"Martinez",
			"Alaba",
			"Davies",
			"Kimmich",
			"Goretzka",
			"Coman",
			"Muller",
			"Gnarby",
			"Lewandowski",
		],
		[
			"Burki",
			"Schulz",
			"Hummels",
			"Akanji",
			"Hakimi",
			"Weigl",
			"Witsel",
			"Hazard",
			"Brandt",
			"Sancho",
			"Gotze",
		],
	],
	score: "4:0",
	scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
	date: "Nov 9th, 2037",
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5,
	},
};

const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
const {
	odds: { team1, draw: x, team2 },
} = game;

const printGoals = function (...playerNames) {
	console.log(`${playerNames.length} goals were scored`);
};

printGoals(...game.scored);

team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");

///////////////////////////////////////
// Nullish Coalescing Operator (??)

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or "")
const guessCorrect = restaurant.numGuests ?? 10;
console.log(guessCorrect);

///////////////////////////////////////
// Short Circuiting (&& and ||)

console.log("---- OR ----");
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || "Jonas");
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "Hello" || "23" || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("---- AND ----");
console.log(0 && "Jonas");
console.log(7 && "Jonas");

console.log("Hello" && 23 && null && "jonas");

if (restaurant.orderPizza) {
	restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

///////////////////////////////////////
// Rest Patterns and Parameters

// 1) Destructuring

// SPREAD, Because on right side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
	...restaurant.mainMenu,
	...restaurant.starterMenu,
];
console.log(pizza, risotto, ...otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) sum += numbers[i];
	console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
restaurant.orderPizza("mushrooms");

///////////////////////////////////////
// The Spread Operator (...)

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables arrays, strings, maps, sets, NOT objects
const str = "Jonas";
const letters = [...str, "", "S."];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`);

// Read-world example
const ingredients = [
	// prompt("Let's make pasta! Ingredient 1?"),
	// prompt("Ingredient 2?"),
	// prompt("Ingredient 3"),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Spread objects ES2018
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);

///////////////////////////////////////
// Destructing Objects

restaurant.orderDelivery({
	time: "22:30",
	address: "Via del Sole, 21",
	mainIndex: 2,
	starterIndex: 2,
});

restaurant.orderDelivery({
	address: "Via del Sole, 21",
	starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
	name: restaurantName,
	openingHours: hours,
	categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
	fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

///////////////////////////////////////
// Destructuring Array

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
// console.log(i , j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
///////////////////////////////////////
