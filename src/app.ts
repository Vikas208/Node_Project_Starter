import express, { Router, Express } from 'express';
import { IRoutes } from '@src/interfaces/IRoutes';
import logger from '@src/utils/logger';
import httpLogger from '@src/utils/httpLogger';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import path from 'path';
class App {
	private PORT: number;
	private app: Express;
	private routes: Array<IRoutes>;
	constructor(routes: Array<IRoutes>) {
		this.app = express();
		this.PORT = 3000;
		this.routes = routes;
		this.initializeServer();
		this.initializeMiddleware();
		this.initializeRoutes();
		this.unHandelException();
	}
	initializeServer() {
		this.app.listen(this.PORT, () => {
			logger.info(`Server Started At PORT ${this.PORT} 🚀 `);
			console.log(`=== Server Started At PORT ${this.PORT}🚀 ===`);
		});
	}
	initializeRoutes() {
		this.routes.forEach((_e) => {
			this.app.use(_e.path, _e.route);
		});
	}
	initializeMiddleware() {
		this.app.use(httpLogger);
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({extended:true}));
	}
	unHandelException() {
		process.on('unhandledRejection', (reason) => {
			logger.error(reason);
		});
	}
}

export default App;
