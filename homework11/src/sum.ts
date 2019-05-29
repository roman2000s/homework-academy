export default function sum(numberOne: number): any {
  let count: number = numberOne;
  return function by(numberNext: number) {
    if (numberNext === undefined) {
      return count;
    } else {
      count += numberNext;
      return by;
    }
  }
};

