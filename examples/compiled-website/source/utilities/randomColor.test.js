import { randomColor } from "./randomColor";

it("Should generate a random color", function () {
  const color = randomColor();

  const [ redString, greenString, blueString ] = color.split(",");

  const redNum = parseInt(redString.slice(4));
  const greenNum = parseInt(greenString);
  const blueNum = parseInt(blueString.slice(0, blueString.length - 1));

  expect(redNum).toBeLessThan(256);
  expect(redNum).toBeGreaterThan(-1);

  expect(greenNum).toBeLessThan(256);
  expect(greenNum).toBeGreaterThan(-1);

  expect(blueNum).toBeLessThan(256);
  expect(blueNum).toBeGreaterThan(-1);
});
