import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import * as jwt from "jsonwebtoken"
import { Observable } from 'rxjs';

@Injectable()
export class IsLoginGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
      if(context.switchToHttp().getRequest().headers.authorization){
          // let s:any = jwt.decode(context.switchToHttp().getRequest().headers.authorization.split(" ")[1])
          //   if(s.role == "admin")
            return true;
      }
  }
}