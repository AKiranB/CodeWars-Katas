const twoCrystalBalls = (breaks: Boolean[]) => {
  const jmpAmount = Math.floor(Math.sqrt(breaks.length));

  let i = jmpAmount;

  for (i; i < breaks.length; i += jmpAmount) {
    if (breaks[i]) {
      break;
    }
  }

  i -= jmpAmount;

  for (let j = 0; j < jmpAmount && i < breaks.length; j++, i++) {
    if (breaks[i]) {
      return i;
    }
  }

  return -1;
};

console.log(
  twoCrystalBalls([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
  ])
);
