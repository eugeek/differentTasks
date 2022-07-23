// Solution
const allNum = (...numbers) => numbers.every(num => (typeof num === 'number'));

const allAboveZero = (...numbers) => numbers.every(num => (num >= 0));

const checkRequirePrice = (reqLess, reqGreat, priceLess, priceGreat) => {
  if (!allNum(reqLess, reqGreat, priceLess, priceGreat))
    throw new Error('Uncorrect type arg');
  if (!allAboveZero(reqLess, reqGreat, priceLess, priceGreat))
    throw new Error('Price less than zero');
  if ((reqGreat < reqLess) || (priceGreat < priceLess))
    throw new Error('Uncorrect range');
}

const check = (requireLess, requireGreat, priceLess, priceGreat) => {
  checkRequirePrice(requireLess, requireGreat, priceLess, priceGreat);
  return !((priceLess > requireGreat) || (priceGreat < requireLess));
}

const checkPrice = (less, great, course) => check(less, great, ...course.prices);

// Task
let courses = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, Infinity] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [0, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, Infinity] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [0, Infinity] },
];

let requiredRange1 = [0, 200];
let requiredRange2 = [100, 350];
let requiredRange3 =  [200, Infinity];


console.log(filterByPrices(...requiredRange1));
console.log(filterByPrices(...requiredRange2));
console.log(filterByPrices(...requiredRange3));
