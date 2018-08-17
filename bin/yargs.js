"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Yargs = __importStar(require("yargs"));
const languages_1 = require("./languages");
function getArguments() {
    return Yargs
        .usage("$0 <path> [options]", "Interpret the specified file", (yargs) => yargs.positional("path", {
        describe: "The path to the file that you want to execute",
        type: "string",
        normalize: true
    }))
        .option("language", {
        alias: "l",
        describe: "The programming language that the code is in. If not provided this will be inferred from the file type.",
        type: "string",
        choices: Object.keys(languages_1.languages)
    }).argv;
}
exports.getArguments = getArguments;
//# sourceMappingURL=yargs.js.map