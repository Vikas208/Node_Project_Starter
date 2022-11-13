import { IsEmail, Matches, MinLength } from 'class-validator';

export class CreateLoginDto{
	@IsEmail()
		email: string;

	@MinLength(6)
	@Matches(
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
	)
		password: string;
}
