// npm run ts-node -- multiplier.ts
const multiplicator = (a: number, b: number, printText: string) => {
  console.log(printText, a * b);
};
multiplicator(2, 4, 'multiplied numbers 2 and 4, the result is:');
