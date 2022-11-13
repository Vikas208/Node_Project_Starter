import { CreateLoginDto } from '../Dtos/CreateLogin.dto';

class AuthService {
	public login(body: CreateLoginDto) {
		console.log(body);
	}
}

export default AuthService;
