import { Module, forwardRef, Global } from '@nestjs/common';
import { UserController } from "./user.controller"
import { UserService } from './user.service';
import { MongooseModule } from "@nestjs/mongoose"
import { userSchema } from './user.model';
import { BaseModule } from '../services/base.module';
import { ConfigModule } from '../config/configur.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "User", schema: userSchema }]),
    BaseModule,
    ConfigModule,
    PassportModule.register({ session: true, property: "User", defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'secretKey',
      signOptions: {
        expiresIn: 24 * 60 * 60 * 1000,
      }
    })
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserModule]
})
export class UserModule { }