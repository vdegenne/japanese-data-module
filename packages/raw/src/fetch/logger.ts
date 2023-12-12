export function log(text: string) {
	let file: string, func: string;
	try {
		throw new Error();
	} catch (error) {
		const stackLines = error.stack?.split('\n');
		if (stackLines && stackLines.length >= 3) {
			// Get the second line starting with "file://"
			const fileNameLine = stackLines[2].trim();
			const info = getErrorInfo(fileNameLine);
			file = info.file;
			func = info.func;
		}
	}
	if (process.env.NODE_ENV === 'DEV') {
		console.log(`[${file.toUpperCase()}${func ? ` / ${func}` : ''}] ${text}`);
	}
}

export function getErrorInfo(line: string): {
	func: string | null;
	file: string | null;
} {
	// const functionFileRegex =
	// 	/\bat\s(?:\w+\s)?(?:\((\w+)\)\s)?\(file:\/\/.*\/([^\/]+):\d+:\d+\)/;
	const functionFileRegex = /\bat\s([^\s]*)\s?\(?file:.*\/([^:]+).*\)?$/;
	const match = line.match(functionFileRegex);

	if (match && match.length === 3) {
		const functionName = match[1] !== undefined ? match[1] : null;
		return {func: functionName, file: match[2]};
	} else {
		return {func: null, file: null};
	}
}
