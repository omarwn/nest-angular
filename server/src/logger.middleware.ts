import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: Function) {
    await console.log(new Date().toLocaleDateString().slice(0 , 10)+"..."+req.path);
    next();
  }
}