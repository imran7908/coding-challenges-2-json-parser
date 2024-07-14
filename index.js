import * as path from "node:path";
import { exit } from "node:process";

export const jsonParser = (file) => {
  const extension = path.extname(file);
  if (extension !== ".json") {
    console.log("This file is not a json file");
    exit(1);
  }
  exit(0);
};

jsonParser("testfile");
