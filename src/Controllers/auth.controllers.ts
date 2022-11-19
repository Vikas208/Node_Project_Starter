import { NextFunction, Request, Response } from 'express';
import { CreateLoginDto } from '@src/Dtos/CreateLogin.dto';
import AuthService from '@src/Services/auth.service';

class AuthController {
	private static service = new AuthService();
	constructor() {
	}
	public login(req: Request, res: Response, next: NextFunction) {
		try {
			const body: CreateLoginDto = req.body;
			let message = AuthController.service.login(body);
			res.status(200).json(message);
		} catch (err) {
			next(err);
		}
	}
}

export default AuthController;
