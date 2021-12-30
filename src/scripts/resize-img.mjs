import fs from "fs";
import resizeImg from "resize-img";

import { getItemsFromPath } from "./utils.mjs";

/**
 * Generate images thumbnails in the given path.
 */
const resizeImages = (paths) => {
  paths.forEach((path) => {
    getItemsFromPath(path).forEach((item, index, array) => {
      fs.readdir(item, (err, files) => {
        if (err) {
          throw err;
        }
        files
          .filter((file) => file.match(/(\w+-[0-9]+\.\w{3,4})/))
          .forEach(async (file) => {
            const fileName = file.substring(0, file.length - 4);
            const fileExtension = file.substring(file.length - 4, file.length);

            (async () => {
              const image = await resizeImg(
                fs.readFileSync(`${item}/${file}`),
                {
                  width: 64,
                  height: 36,
                }
              );

              fs.mkdirSync(`${item}/`, { recursive: true }, (err) => {
                if (err) throw err;
              });
              fs.writeFileSync(
                `${item}/${fileName}.thumb${fileExtension}`,
                image
              );
            })();
            console.log(`Resizing ${file}...`);
          });
      });
    });
  });
};

resizeImages(["./static/images/projects", "./static/images/workshop"]);
