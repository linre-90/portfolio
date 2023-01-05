/**
 * Node js deployment script.
 * This builds folder from project that contains all required files
 * to crate deployment on remote machine.
 */

const JAR_FILE = process.argv[2];
const fs = require("fs");
const path = require("path");

const destinationPath = "./deployment/";
const copyFiles = [
    { file: "../docker-compose-prod.yml", dest: destinationPath },
    { file: "../robots.txt", dest: destinationPath },
    { file: "../sitemap.xml", dest: destinationPath },
    { file: "../default.conf", dest: destinationPath },
    { file: `../target/${JAR_FILE}`, dest: destinationPath + "target/" },
    { file: "../Dockerfile", dest: destinationPath },
    { file: "../docker-compose-build.yml", dest: destinationPath },
];

// If jar file is not defined abort!
if (JAR_FILE == undefined) {
    throw new Error("jar file name must be passed as argument!");
}

// Remove all previous jar files from Build/deployment/target dir.
console.log("Deleting old jar file");
const targetDirContent = [];
const targetPath = "./deployment/target";
fs.readdirSync(targetPath).forEach((file) => targetDirContent.push(file));

for (let i = 0; i < targetDirContent.length; i++) {
    const file = targetDirContent[i];
    fs.unlinkSync(targetPath + "/" + file);
}

console.log("All old jar files cleaned!");

// Start copying files to build the folder that contains everything needed for deployment.
copyFiles.forEach((fileObject) => {
    console.log("Starting copying file: " + fileObject.file);
    fs.copyFile(
        fileObject.file,
        fileObject.dest + path.basename(fileObject.file),
        (error) => {
            if (error) {
                console.log(error);
                throw new Error("File copy failed");
            }
        }
    );
});

console.log("Deployment folder build");
