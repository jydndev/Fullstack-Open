// npm run ts-node -- multiplier.ts

type Operation = 'multiply' | 'add' | 'divide';

const calculator = (a: number, b: number, op: Operation): number => {
  switch (op) {
    case 'multiply':
      return a * b;
    case 'add':
      return a + b;
    case 'divide':
      if (b === 0) return `can't divide by 0`;
      return a / b;
    default:
      throw new Error('Operation is not multiply, add, or divide');
  }
};

try {
} catch (error: unkonwn) {}
