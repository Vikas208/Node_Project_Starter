import path from 'path';
import winston from 'winston';
const levels = {
	levels: {
		error: 0,
		warn: 1,
		info: 2,
		http: 3,
		verbose: 4,
		debug: 5,
		silly: 6,
	},
	colors: {
		error: 'red',
		warn: 'yellow',
		info: 'blue',
		debug: 'green',
	},
};

const option = {
	file: {
		handelExceptions: true,
		json: true,
		maxsize: 5242880,
		maxFiles: 5,
		colorize: true,
	},
	console: {
		level: 'debug',
		handleExceptions: true,
		json: false,
		colorize: true,
	},
};

const opt = winston.format.combine(
	winston.format.timestamp({ format: 'YY-MM-DD HH:MM:SS' }),
	winston.format.colorize({
		all: true,
	}),
	winston.format.label({
		label: '[LOGGER]',
	}),
	winston.format.printf(
		(info) => `[${info.level}]  [${info.timestamp}] : ${info.message}`,
	),
);

export const logger = winston.createLogger({
	levels: levels.levels,
	transports: [
		new winston.transports.File({
			filename: path.join(__dirname, '../logs/serverInfo.log'),
			level: 'info',
			options: option,
			format: winston.format.combine(
				winston.format.timestamp(),
				winston.format.json(),
			),
		}),
		new winston.transports.File({
			filename: path.join(__dirname, '../logs/serverError.log'),
			level: 'error',
			options: option,
			format: winston.format.combine(
				winston.format.timestamp(),
				winston.format.json(),
			),
		}),
		new winston.transports.Console({
			format: opt,
		}),
	],
});

export default logger;
