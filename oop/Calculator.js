class Calculator {
  constructor(operator, numbers) {
    this.operator = operator;
    this.numbers = numbers;
  }
  counter(operator, numbers) {
    switch (operator) {
      case "sum":
        return numbers.reduce((acc, el) => acc + el);

      case "sub":
        return numbers.reduce((acc, el) => acc - el);

      case "mult":
        return numbers.reduce((acc, el) => acc * el);

      case "div":
        return numbers.reduce((acc, el) => acc / el);

      default:
        return "Unknown operation type";
    }
  }

  init() {
    return this.counter(this.operator, this.numbers);
  }
}
const [operator, ...args] = process.argv.slice(2);
const numbers = args.map(Number);
module.exports = new Calculator(operator, numbers);
