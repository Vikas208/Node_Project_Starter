import { IsEmail, Matches, MinLength } from 'class-validator';

export class CreateLoginDto{
	@IsEmail()
		email: string;

	@MinLength(6)
	@Matches(
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
		,{
			message: 'Please Enter At least 6 character long Password at least one upper case character at least one lower case character at least one special character'
		}
	)
		password: string;
}
