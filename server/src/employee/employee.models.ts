import * as mongoose from "mongoose";
// var mongoosePaginate = require('mongoose-paginate');

export const employeeSchema = new mongoose.Schema({
  name : {
    firstname : {type : String,trim : true, required : true},
    secondname : {type : String,trim : true},
    thirdname : {type : String,trim : true},
    lastname : {type : String,trim : true, required : true},
  },
  workstart :Date,
  gender : String,
  type :{
    obj : String,
    class : {type : String , default : "null"}
  },
  eid : Number,//رقم الهوية
  wid :Number,//رقم الوظيفة
  email: {type : String, lowercase: true,trim : true},
  address :{type : String,trim : true},
  phone : Number,
  note : {type : String,trim : true},
  workplace   : {
                    area : [String],
                  },
  code : {type : Number , default : 0} ,
  // code : {type : Number , unique : true} ,
  rm : {type : Number,default:0},
 
});

// employeeSchema.plugin(mongoosePaginate);

  // name : firstname @ scondname & thirdname
  // class doctor-a "عام"
  // class doctor-b "تقويم"
  // class doctor-c "جراحة"
  // class doctor-d "تركيبات"