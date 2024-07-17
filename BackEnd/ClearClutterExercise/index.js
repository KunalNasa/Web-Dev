// given files with different extensions we have to place all the files with same 
// extension name in its folder

// steps
// traverse through files and make the folders with name same as ext name 
// traverse again on these files and add them to their folders

const fs = require("fs/promises");
const fsn = require("fs");
const path = require("path");

let basepath = __dirname;

// console.log(fs);
let files;
async function main() {
    files = await fs.readdir(__dirname);
    // console.log(files);
    for (let i = 0; i < files.length; i++) {
        let item = files[i].split(".")[files[i].split(".").length - 1];
        // console.log(item);


        if (item != "js" && item != "json"
            && files[i].split(".").length > 1) { // to not do again for existing folder

            if (fsn.existsSync(path.join(basepath, item))) {
                // move the file to this directory if its not js or json file
                fs.rename(path.join(basepath, files[i]), path.join(basepath, item, files[i]));
            }
            else {
                fs.mkdir(item);
                fs.rename(path.join(basepath, files[i]), path.join(basepath, item, files[i]));
            }
        }
    }

}
main();
