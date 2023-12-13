import fs from 'fs';
import {buildFull} from './full.js';
import {_TARGET_PATH} from './constants.js';
import {buildTagless} from './tagless.js';
import {buildTaglessNoRoman} from './tagless-noroman.js';

async function start() {
	if (!fs.existsSync(_TARGET_PATH)) {
		await fs.promises.mkdir(_TARGET_PATH);
	}
	await buildFull();
	await buildTagless();
	await buildTaglessNoRoman();
}

start();
