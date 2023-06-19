


// mercurySedan.test.js
const Car = require("./mercurySedan");

test('Testing the start() method', () => {
  const car = new Car();
  expect(car.start()).toBe(true);
});
