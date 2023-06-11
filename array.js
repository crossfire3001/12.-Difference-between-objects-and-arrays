const obj = { 1: 3, b: 2 }; // data storage structure in paired format {key: value};
console.log(obj[1]); // 3

// Making a new property inside an object
obj.c = "12349";
obj["d"] = "Snow Leopard";
const b = "b";
obj[b] = "7777";

console.log(obj["c"]); // 12349
console.log(obj["d"]); // Snow Leopard
console.log(obj);

const bigArr = ["e", "f", "m"];

bigArr[10] = "3451";

console.log(bigArr); // ['e', 'f', 'm', empty × 7, '3451']
// Empty space has been made in an array and this interrupts the logic of an array, empty data is not welcome

// nested structures inside an object
const nestedObj = {
  k: "k",
  '7': "b",
  2: "r",
  abc: {
    df: [{}, {}],
    hausen: {},
  },
};

const k = "k";
nestedObj[k] = [];

console.log(nestedObj);
