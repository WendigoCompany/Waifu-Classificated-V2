
const fs = require("fs");
const util = require("util");
const url = require("url");
const path = require("path");
const __dirname = path.resolve(path.dirname(''));
let base_proyect = __dirname;
let breaker_primary = 0;

do {
    breaker_primary++
    if (base_proyect.includes('\\')) {
        base_proyect = base_proyect.replace('\\', "/")
    } else {
        break;
    }
} while (breaker_primary < 1000);

const read = util.promisify(fs.readFile);
const readdir = util.promisify(fs.readdir);

const IS_DEV = JSON.parse(localStorage.getItem("ISDEV"));


//GETTING OS
(() => {

    if (!IS_DEV ) {
        switch (process.platform) {
            case 'aix':
                break;
            case 'darwin':
                break;
            case 'freebsd':
                break;
            case 'linux':
                break;
            case 'openbsd':
                break;
            case 'sunos':
                break;
            case 'win32':
                base_proyect += "/" + "www" + "/" + "gamedata";
                break;
            case 'android':
                break;
        }
    } else {
        base_proyect += "/" + "gamedata";
    }

})()


const replaceAll = (base, replacedata, newdata) => {
    let breaker = 0;
    do {
        breaker++
        if (base.includes(replacedata)) {
            base = base.replace(replacedata, newdata)
        } else {
            return base
        }
    } while (breaker < 1000);
}

document.title = "HOT CLASSIFIED";

if (sessionStorage.getItem("actual_page") == null) {
    sessionStorage.setItem("actual_page", 1)
}

$(document).ready(function () {
    $("#title").text(document.title.toUpperCase());
});

const proyect_dir = "../";

const params = {
    media: "Media/",
    gallery: "gallery/",
}


window.addEventListener("keydown", (e) => {
    switch (e.key.toLowerCase()) {
        case "f5": {
            window.location.reload()

        }
            break;
        case "f12": {
            require('nw.gui').Window.get().showDevTools();

        }
            break;
    }


})

