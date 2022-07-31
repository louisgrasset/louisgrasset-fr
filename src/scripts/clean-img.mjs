import {getItemsFromPath} from "./utils.mjs";
import fs from "fs";
import logUpdate from "log-update";

/**
 * Clear old images thumbnails made.
 */

const cleanImages = (paths, _sizes) => {
    let stepsDone = 0;
    let stepsTotal = 0
    paths.forEach((path, _pathIndex) => {
        getItemsFromPath(path).forEach((item, _index, _array) => {
            fs.readdir(item, (err, files) => {
                if (err) {
                    throw err;
                }
                const eligibleFiles = files.filter((file) =>
                    file.match(/(\w+-[0-9]+.thumb\.\w{3,4})|(\w+-[0-9]+\.webp)/)
                );
                stepsTotal += eligibleFiles.length
                eligibleFiles.forEach((file, i, total) => {
                        stepsDone += 1
                        logUpdate(`🗑️Clearing ${stepsDone}/${stepsTotal}`);
                        fs.rmSync(`${item}/${file}`);
                    });
            });
        });
    })
    logUpdate.done()
};

cleanImages(["./static/images/projects", "./static/images/workshop"]);
