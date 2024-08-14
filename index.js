import * as path from "node:path";
import * as fs from "node:fs/promises";
import { exit } from "node:process";
import { isString } from "./helpers/isValidValue.js";

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
    const withoutBracket = trimmedContents.substring(
      1,
      trimmedContents.length - 1
    );
    const entities = withoutBracket.split(",");
    for (const entity of entities) {
      const trimmedEntity = entity.trim();
      const keyValue = trimmedEntity.split(":");
      if (keyValue.length !== 2) {
        console.log("not valid due to missing of standard key value");
        break;
      }

      if (isString(keyValue[0])) {
        console.log(keyValue[0], "string");
      } else {
        console.log("not valid");
        break;
      }
    }
  }

  if (
    trimmedContents[0] === "[" &&
    trimmedContents[trimmedContents.length - 1] === "]"
  ) {
    console.log("It is a array");
  }
};

jsonParser("testfile.json");
