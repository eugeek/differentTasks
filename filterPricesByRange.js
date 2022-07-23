// Solution
const allNum = (...numbers) => numbers.every(num => (typeof num === "number"));

const allAboveZero = (...numbers) => numbers.every(num => (num >= 0));

const checkRequirePrice = (reqLess, reqGreat, priceLess, priceGreat) => {
  if (!allNum(reqLess, reqGreat, priceLess, priceGreat))
    throw new Error("Uncorrect type arg");
  if (!allAboveZero(reqLess, reqGreat, priceLess, priceGreat))
    throw new Error("Price less than zero");
  if ((reqGreat < reqLess) || (priceGreat < priceLess))
    throw new Error("Uncorrect range");
};

const check = (requireLess, requireGreat, priceLess, priceGreat) => {
  if (requireLess === null) reqireLess = 0;
  if (requireGreat === null) requireGreat = Infinity;
  if (priceLess === null) priceLess = 0;
  if (priceGreat === null) priceGreat = Infinity;
  checkRequirePrice(requireLess, requireGreat, priceLess, priceGreat);
  return !((priceLess > requireGreat) || (priceGreat < requireLess));
};


const filterByPrices = (less, great) => {
  let results = [];
  for (let course of courses) {
    if (check(less, great, ...course.prices)) results.push(course);
  }
  return results;
};

// Task
let courses = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

let requiredRange1 = [0, 200];
let requiredRange2 = [100, 350];
let requiredRange3 =  [200, Infinity];


console.log(filterByPrices(...requiredRange1));
console.log(filterByPrices(...requiredRange2));
console.log(filterByPrices(...requiredRange3));
