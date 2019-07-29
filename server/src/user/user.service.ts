import { Injectable, Res, Optional, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from '../services/base.service';
import { ConfigService } from '../config/configur.service';
import { JwtService } from '@nestjs/jwt';
import { PassportLocalModel} from 'mongoose';
// import * as passport from "passport";
// import * as LocalStrategy from "passport-local";

@Injectable()
export class UserService extends BaseService {

  constructor(
    @Optional() @Inject('HTTP_OPTIONS') private readonly httpClient,
    @InjectModel("User") private userModel : PassportLocalModel<any>,
    public config: ConfigService,
    public readonly jwtService: JwtService) {
    super(userModel)
    // this.passportConfig()
  }

  // passportConfig = () => {
  //   passport.initialize();
  //   passport.session();
  //   passport.serializeUser(this.userModel.serializeUser());
  //   passport.deserializeUser(this.userModel.deserializeUser());
  //   passport.use(new LocalStrategy(this.userModel.authenticate()));
  // }

  createUser = async (data) => {
    return await this.userModel.register({ 
      username: data.username , 
      email : data.email , 
      role : data.role ,
      area : data.area
    }, 
    data.password, 
    (err, user) => {
      if (err) return console.log(err)
      return user
    })
  }

  login = async (data) => {
    const { user } = await this.userModel.authenticate()(data.username, data.password);
    if (!user) return console.log("error")
    const playload = { _id: user._id , role : user.role , email : user.email , username : user.username}
    return {token : this.jwtService.sign({ ...playload })}
  }

  getUserAll = async () => {
    try {
      // const docs = await this.userModel.find({});
      const docs = await this.userModel.aggregate([
        {$match : {}}
      ]);
      return {docs , http : this.httpClient}
    } catch (err) {
      return { error: err }
    }
  }

}

