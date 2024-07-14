export const isValidValue = (value) => {
  if (
    value === null ||
    value === true ||
    value === false ||
    value === number ||
    value === string
  ) {
    return true;
  }

  return false;
};
