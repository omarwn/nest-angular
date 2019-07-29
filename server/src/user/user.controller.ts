import { Controller, Get, Post, Body, UseFilters, Param, Put, Delete, UseGuards, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { IsAdminGuard } from '../services/isadmin.gruad';
import { IsLoginGuard } from '../services/islogin.guard';



@Controller('api/users')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Get()
     @UseGuards(IsLoginGuard)
        @UseGuards(IsAdminGuard)
            getUsers(@Req() req) {
                return this.userService.getUserAll()
            }

    @Post()
        inserUser(@Body() data) {
            return this.userService.createUser(data)
        }

    @Post("login")
        loginUser(@Body() data) {
            return this.userService.login(data);
        }

    @Get("count")
        countUser(){
            return this.userService.count()
        }

    @Get(":id")
        getUser(@Param() id){
            return this.userService.get(id)
        }

    @Put(":id")
        editCat(@Param() params, @Body() da) {
            delete da._id
            let data = {
                id: params.id,
                body: da
            }
            return this.userService.update(data)
        }

    @Delete(":id")
        DeleteUser(@Param() id){
            return this.userService.delete(id)
        }
}
