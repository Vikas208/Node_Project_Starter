import { NextFunction, Request, Response } from 'express';
import { CreateLoginDto } from '@src/Dtos/CreateLogin.dto';
import AuthService from '@src/Services/auth.service';

class AuthController {
	private service: AuthService;
	constructor() {
		this.service = new AuthService();
		console.log('Controller', this)
	}
	public login(req: Request, res: Response, next: NextFunction) {
		try {
			const body: CreateLoginDto = req.body;
			console.log({service:this})
			this.service.login(body);
		} catch (err) {
			next(err);
		}
	}
}

export default AuthController;
