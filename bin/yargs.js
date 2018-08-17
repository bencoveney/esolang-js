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
function getArguments() {
    return Yargs
        .usage("$0 <path>", "Interpret the specified file", (yargs) => yargs.positional("path", {
        describe: "The path to the file that you want to execute",
        type: "string",
        normalize: true
    })).argv;
}
exports.getArguments = getArguments;
//# sourceMappingURL=yargs.js.map