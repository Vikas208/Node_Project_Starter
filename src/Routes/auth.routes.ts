import { IRoutes } from '@src/interfaces/IRoutes';
import { Validators } from '@src/utils/validators';
import { CreateLoginDto } from '@src/Dtos/CreateLogin.dto';
import AuthController from '@src/Controllers/auth.controllers';
import {Router} from 'express';
class Auth implements IRoutes {
	public path: string;
	public route: Router;
	private controller: AuthController;
	constructor() {
		this.path = '/';
		this.controller = new AuthController();
		this.route = Router();
		this.initializeRoutes();
		console.log('Auth Routes',this);
	}
	initializeRoutes() {
		this.route.get(`${this.path}`,(req,res)=>{
			return res.status(200).send("Hello world");
		})
		this.route.post(
			`${this.path}login`,
			Validators(CreateLoginDto),
			this.controller.login,
		);
	}
}
export default Auth;
