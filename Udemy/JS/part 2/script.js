'use strict';

/*
///////////////////////////////////////
// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;


///////////////////////////////////////
// Functions
function logger() {
  console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');


///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);


///////////////////////////////////////
// Arrow functions

const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));


///////////////////////////////////////
// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));


///////////////////////////////////////
// Reviewing Functions
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/


/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('Ignore draws this time');
  }
};

checkWinner(calcAverage(42, 23, 71), calcAverage(65, 54, 49));
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));
*/

/*
// write Arrays about const friends
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years1 = new Array(1991, 1984, 2008, 2020);
// const years = [1991, 1984, 2008, 2020];
console.log(years1);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);

console.log(friends[friends.length - 1]);


friends[2] = 'Jay';

console.log(friends);

// friends = ['Bob', 'Alice'];

const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);


// Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};

const years = [1990, 1967, 2002, 2010, 2018];
//const ages = years.map(calcAge);


const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(calcAge(years[years.length - 1]));
console.log(ages);
*/


/*
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

// add John to friends
friends.unshift('John');
console.log(friends);

// remove elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Michael'));
console.log(friends.indexOf('Steven'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Peter')) {
  console.log('You have a friend called Peter');
}
*/


///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

/*
// Coding Challenge #2

const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ?
    bill * 0.15 : bill * 0.2;
};

const bills = [125, 255, 44];
const tips = bills.map(calcTip);
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total);

const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last'+nameKey);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, LastName, age, job, and friends');
// console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, LastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);


console.log(`${jonas.firstName} has ${jonas.friends.length},and his best friend is called ${jonas.friends[0]}}`);
*/

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYeah: 1991,
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLincense: false,
  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // }
  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthYeah;
  // }
  calcAge: function () {
    return this.age = 2037 - this.birthYeah;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLincense ? 'a' : 'no'} driver's lincense.`;
  }
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// console.log(jonas['calcAge'](1991));

console.log(jonas.getSummary);