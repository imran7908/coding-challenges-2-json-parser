import * as path from "node:path";
import * as fs from "node:fs/promises";
import { exit } from "node:process";

export const jsonParser = async (file) => {
  const extension = path.extname(file);
  if (extension !== ".json") {
    console.log("This file is not a json file");
    exit(1);
  }

  const contents = await fs.readFile(file, { encoding: "utf-8" });
};

jsonParser("testfile.json");
