module.exports = function () {
  const { cwd } = require("node:process");
  console.log(`Current directory: ${cwd()}`);
};
