import fs from "fs";
import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

import { getItemsFromPath } from "./utils.mjs";

/**
 * Convert images to webp in the given path.
 */
const convertImages = (paths) => {
  paths.forEach((path) => {
    getItemsFromPath(path).forEach((item, index, array) => {
      fs.readdir(item, (err, files) => {
        if (err) {
          throw err;
        }

        files
          .filter((file) => file.match(/(\w+-[0-9]+\.(thumb\.)?\w{3,4})/))
          .forEach((file) => {
            fs.mkdirSync(`${item}/`, { recursive: true }, (e) => {
              if (e) throw e;
            });
            imagemin([`${item}/${file}`], {
              destination: `${item}/`,
              plugins: [imageminWebp({ quality: 90 })],
            });
            console.log(`Converting ${file}...`);
          });
      });
    });
  });
};

convertImages(["./static/images/projects", "./static/images/workshop"]);
