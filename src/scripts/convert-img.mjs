import fs from "fs";
import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

import { getItemsFromPath } from "./utils.mjs";
import logUpdate from "log-update";

/**
 * Convert images to webp in the given path.
 */
const convertImages = (paths) => {
    let stepsDone = 0;
    let stepsTotal = 0;
    paths.forEach((path) => {
        getItemsFromPath(path).forEach((item, _index, _array) => {
            fs.readdir(item, async (err, files) => {
                if (err) {
                    throw err;
                }

                const eligibleFiles = files.filter((file) =>
                    file.match(/(\w+-[0-9]+\.(thumb\.)?\w{3,4})/)
                );
                stepsTotal += eligibleFiles.length;
                for (const file of eligibleFiles) {
                    stepsDone += 1;
                    fs.mkdirSync(`${item}/`, {recursive: true}, (e) => {
                        if (e) throw e;
                    });
                    await imagemin([`${item}/${file}`], {
                        destination: `${item}/`,
                        plugins: [imageminWebp({quality: 90})],
                    }).then(() => logUpdate(`💫 Converting ${stepsDone}/${stepsTotal}`))
                }
            });
        });
    });
    logUpdate.done();
};

convertImages(["./static/images/projects", "./static/images/workshop"]);
