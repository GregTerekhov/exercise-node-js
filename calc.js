// node calc.js sum 8 5 23
// node calc.js sub 15 5 3
// node calc.js mult 3 2 4
// node calc.js div 10 2 1

const [operator, ...args] = process.argv.slice(2);
const numbers = args.map(Number);

function counter(operator, numbers) {
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

const result = counter(operator, numbers);
console.log(result);
