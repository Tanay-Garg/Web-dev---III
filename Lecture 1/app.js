const isEven = require("./modules/isEven");
const logger = require("./modules/logger");

logger("Starting app.js");

const number = 17;
if (isEven(number)) {
  logger(`${number} is Even`);
} else {
  logger(`${number} is Odd`);
}

logger("App finished running");