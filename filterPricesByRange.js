// Solution
const check = (requireLess, requireGreat, priceLess, priceGreat) => {
  if (!requireLess) requireLess = 0
  if (!priceLess) priceLess = 0

  if(!requireGreat && !priceGreat) return true
  if (!requireGreat) return priceGreat >= requireLess
  if (!priceGreat) return requireGreat >= priceLess

  if (priceLess > requireGreat || priceGreat < requireLess) return false

  return true
}

const filterByPrices = (less, great) => {
  let results = []
  for (let course of courses) {
    if (check(less, great, ...course.prices)) results.push(course)
  }
  return results
}

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

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

console.log(filterByPrices(...requiredRange1))
console.log(filterByPrices(...requiredRange2))
console.log(filterByPrices(...requiredRange3))