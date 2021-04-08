import fs from 'fs';
import resizeImg from 'resize-img';

const __staticPath = './static/images/projects';
const projects = fs.readdirSync(__staticPath).filter(function (file) {
    return fs.statSync(__staticPath + '/' + file).isDirectory();
});

const directories = projects.map(projectName => `${__staticPath}/${projectName}`);

directories.forEach((project, key) => {
    fs.readdir(project, (err, files) => {
        if (err) {
            throw err;
        }
        files
            .filter(file => file.match(/(\w+-[0-9]+\.\w{3})/))
            .forEach(file => {
                console.info(`Resizing project image: ${file}`);
                const fileName = file.substring(0, file.length - 4);
                const fileExtension = file.substring(file.length - 4, file.length);
                (async () => {
                    const image = await resizeImg(fs.readFileSync(`${project}/${file}`), {
                        width: 64,
                        height: 36
                    });

                    fs.mkdirSync(`${project}/`, { recursive: true }, (err) => {
                        if (err) throw err;
                    });
                    fs.writeFileSync(`${project}/${fileName}.thumb${fileExtension}`, image);
                })();
            });
    });
});