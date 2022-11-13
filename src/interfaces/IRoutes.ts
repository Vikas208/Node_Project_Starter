import { Router } from 'express';

export interface IRoutes {
	path: string;
	route: Router;
}
