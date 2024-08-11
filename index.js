import * as path from "node:path";
import * as fs from "node:fs/promises";
import { exit } from "node:process";

const jsonParser = async (file) => {
  const fileExtension = path.extname(file);
  if (fileExtension !== ".json" && fileExtension !== ".JSON") {
    console.log("This file is not a json file");
    exit(1);
  }

  const contents = await fs.readFile(file, { encoding: "utf-8" });
  const trimmedContents = contents.trim();

  if (
    trimmedContents[0] === "{" &&
    trimmedContents[trimmedContents.length - 1] === "}"
  ) {
    console.log("It is a object");
  }

  if (
    trimmedContents[0] === "[" &&
    trimmedContents[trimmedContents.length - 1] === "]"
  ) {
    console.log("It is a array");
  }
};

jsonParser("testfile.json");
