import { plainToClass, plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { NextFunction, Response, Request } from 'express';

export const Validators = (
	dto: any,
	skipMissingProperties = false,
	whitelist = false,
	forbidNonWhitelisted = false,
	forbidUnknownValues = false,
	stopAtFirstError = false,
) => {
	return function (req: Request, res: Response, next: NextFunction) {
		const body = plainToInstance(dto, req.body);
		validate(body, {
			skipMissingProperties,
			whitelist,
			forbidNonWhitelisted,
			forbidUnknownValues,
			stopAtFirstError,
		})
			.then((error) => {
				if (error.length > 0) {
					let err: ({ [type: string]: string; } | undefined)[] = [];
					error.forEach((_e)=>err.push(_e.constraints))
					res.status(400).json(err);
				} else {
					next();
				}
			})
			.catch((err) => {
				next(err);
			});
	};
};
