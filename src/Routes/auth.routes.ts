import { IRoutes } from '@src/interfaces/IRoutes';
import { Validators } from '@src/utils/validators';
import { CreateLoginDto } from '@src/Dtos/CreateLogin.dto';
import AuthController from '@src/Controllers/auth.controllers';
import {Router} from 'express';
class Auth implements IRoutes {
	public path: string;
	public route: Router;
	private static controller = new AuthController();
	constructor() {
		this.path = '/';
		this.route = Router();
		this.initializeRoutes();
	}
	initializeRoutes() {
		this.route.get(`${this.path}`,(req,res)=>{
			return res.status(200).send("Hello world");
		})
		this.route.post(
			`${this.path}login`,
			Validators(CreateLoginDto),
			Auth.controller.login,
		);
	}
}
export default Auth;
