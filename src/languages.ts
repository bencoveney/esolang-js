import { Interpreter } from "./interpreter";
import * as Brainfuck from "./interpreters/brainfuck";

interface Language {
	extension: string;
	interpreter: Interpreter;
}

export const languages: { [name: string]: Language } = {
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
export function getInterpreter(language: string | undefined, file: string): Interpreter {
	const languageDefinition = language !== undefined ? lookUpLanguage(language) : inferLanguage(file);
	return languageDefinition.interpreter;
}

// Build a list of valid languages and their extensions.
const validLanguages = Object
	.keys(languages)
	.map(language => `${language} (${languages[language].extension})`);

/**
 * Helper function to throw a useful error in the event of failed language resolution.
 * @param message The error message to throw.
 */
function throwLanguageError(message: string) {
	throw new Error(`${message} Valid languages (and extensions) are:
${validLanguages.join("\n")}`);
}

/**
 * Look up the specified language.
 * @param language The name of the language.
 * @returns The details of the language.
 */
function lookUpLanguage(language: string): Language {
	const foundLanguage = languages[language];

	if (!foundLanguage) {
		// Yargs option validation will probably prevent us getting here.
		throwLanguageError(`The specified language ${language} could not be found.`);
	}

	return foundLanguage;
}

/**
 * Infer the language from the file name.
 * @param file The file name or path.
 * @returns The details of the language.
 */
function inferLanguage(file: string): Language {
	const foundLanguages = Object
		.keys(languages)
		.map(language => languages[language])
		.filter(language => file.endsWith(language.extension));

	if (foundLanguages.length !== 1) {
		throwLanguageError(`Could not infer language for the file ${file}. ${foundLanguages.length} languages we found that supported the extension.`);
	}

	return foundLanguages[0];
}