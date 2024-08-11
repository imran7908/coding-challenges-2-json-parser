import { numberPattern, stringPattern } from "./patterns.js";

const isString = (value) => {
  if (stringPattern.test(value)) {
    console.log("it is string");
  } else {
    console.log("Not string");
  }
};

const isNumber = (value) => {
  if (numberPattern.test(value)) {
    console.log("it is number");
  } else {
    console.log("Not number");
  }
};

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

isNumber(434);
