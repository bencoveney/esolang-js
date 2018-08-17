"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Brainfuck = __importStar(require("./interpreters/brainfuck"));
exports.languages = {
    brainfuck: {
        extension: ".bf",
        interpreter: Brainfuck.interpreter
    }
};
/**
 * Gets the interpreter for the corresponding language or file.
 * @param language The name of the language, if known.
 * @param file The name of the file.
 * @returns The found interpreter.
 */
function getInterpreter(language, file) {
    const languageDefinition = language !== undefined ? lookUpLanguage(language) : inferLanguage(file);
    return languageDefinition.interpreter;
}
exports.getInterpreter = getInterpreter;
// Build a list of valid languages and their extensions.
const validLanguages = Object
    .keys(exports.languages)
    .map(language => `${language} (${exports.languages[language].extension})`);
/**
 * Helper function to throw a useful error in the event of failed language resolution.
 * @param message The error message to throw.
 */
function throwLanguageError(message) {
    throw new Error(`${message} Valid languages (and extensions) are:
${validLanguages.join("\n")}`);
}
function lookUpLanguage(language) {
    const foundLanguage = exports.languages[language];
    if (!foundLanguage) {
        // Yargs option validation will probably prevent us getting here.
        throwLanguageError(`The specified language ${language} could not be found.`);
    }
    return foundLanguage;
}
function inferLanguage(file) {
    const foundLanguages = Object
        .keys(exports.languages)
        .map(language => exports.languages[language])
        .filter(language => file.endsWith(language.extension));
    if (foundLanguages.length !== 1) {
        throwLanguageError(`Could not infer language for the file ${file}. ${foundLanguages.length} languages we found that supported the extension.`);
    }
    return foundLanguages[0];
}
//# sourceMappingURL=languages.js.map