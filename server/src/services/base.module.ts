import { Module } from "@nestjs/common";
import { BaseService } from './base.service';
import { IsAdminGuard } from './isadmin.gruad';
import { IsUserGuard } from './isuser.gruad';
import { IsLoginGuard } from './islogin.guard';

@Module({
    providers : [{provide : BaseService ,useFactory : (model)=> model} , IsAdminGuard , IsUserGuard , IsLoginGuard],
    exports : [ BaseService]
})

export class BaseModule{}