/**
Write a function that takes two numbers and returns
the sum of those numbers
*/
function add(n1, n2) {
  return n1 + n2;
}

console.log("add", add(2, 3)); // Expects 5

/**
Write a function that takes any number of arguments
of type number and returns the sum of all the arguments
*/
function sum(...args) {
  return args.reduce((acc, a) => {
    return acc + a;
  }, 0);
}

console.log("sum", sum(2, 3, 4, 5)); // Expects 14

/**
Write a function that takes two strings, A and B,
and returns whether B is in A in a case-insensitive way
*/
function stringIncludes(text, word) {
  return text.toLowerCase().split(" ").includes(word.toLowerCase());
}

console.log(
  "stringIncludes",
  stringIncludes("I drove to New York in a van with my friend", "new")
); // Expects true

/**
Write a function that takes an array of objects, and returns an array
of the objects' "name" property, only if that property exists
*/
function getNames(myarray) {
  return myarray.reduce((acc, a) => {
    if (a.name) acc.push(a.name);
    return [...acc];
  }, []);
}

console.log(
  "getNames",
  getNames([
    { a: 1 },
    { name: "Jane" },
    {},
    { name: "Mark" },
    { name: "Sophia" },
    { b: 2 }
  ])
); // Expects ['Jane', 'Mark', 'Sophia']

/**
Write a function that takes an array of numbers and returns the
index of the largest number
*/
function getLargestNumberIndex(myarray) {
  return myarray.indexOf(Math.max(...myarray));
}

console.log("getLargestNumberIndex", getLargestNumberIndex([7, 1, 4, 12, 9])); // Expects 3

/**
Write a function that returns a promise that resolves
after n number of milliseconds
*/
function delay(n) {}

(async () => {
  console.time("Testing delay");
  await delay(1000);
  console.timeEnd("Testing delay");
})();
