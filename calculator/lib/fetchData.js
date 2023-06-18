const [operator, ...args] = process.argv.slice(2);
const numbers = args.map(Number);

module.exports = {
  operator,
  numbers,
};
