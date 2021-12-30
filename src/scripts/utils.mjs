import fs from "fs";

/**
 * Retrieve items from the given directory.
 */
export const getItemsFromPath = (path) =>
  fs
    .readdirSync(path)
    .filter((file) => fs.statSync(path + "/" + file).isDirectory())
    .map((projectName) => `${path}/${projectName}`);
