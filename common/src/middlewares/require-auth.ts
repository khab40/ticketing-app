import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from '../errors/not-authorized-error';

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('COMMON::Session from request is: ' + req.session!);
  console.log('COMMON::Current user from request is: ' + req.currentUser!);

  if (!req.currentUser) {
    throw new NotAuthorizedError();
  }

  next();
};
