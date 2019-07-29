import * as plm from "passport-local-mongoose";
import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, trim: true, require: true },
    email : { type: String, unique: true, trim: true},
    role : String,
    area : String,
    permissions : [Number]
});

userSchema.plugin(plm)

