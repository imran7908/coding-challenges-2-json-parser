import { numberPattern, stringPattern } from "./patterns.js";

const isString = (value) => {
  return stringPattern.test(value) ? true : false;
};

const isNumber = (value) => {
  return numberPattern.test(value) ? true : false;
};

export const isSNNTF = (value) => {
  const res =
    isString(value) |
    isNumber(value) |
    (value === true) |
    (value === false) |
    (value === null);

  return res;
};
