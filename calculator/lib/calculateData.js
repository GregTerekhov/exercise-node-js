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

module.exports = counter;
