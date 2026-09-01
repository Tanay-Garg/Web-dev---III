const crypto = require("crypto");

function rollDice() {
  const randomByte = crypto.randomBytes(1)[0];
  return (randomByte % 6) + 1;
}


for (let i = 1; i <= 6; i++) {
  console.log(`Roll ${i}: Dice Rolled: ${rollDice()}`);
}