import * as mongoose from "mongoose";

export const PatientSchema =  new mongoose.Schema({
        name: {
          firstname: { type: String, trim: true, required: true },
          secondname: { type: String, trim: true },
          thirdname: { type: String, trim: true },
          lastname: { type: String, trim: true, required: true },
        },
        create: { type: Date, default: Date.now },
        update: { type: Date, default: Date.now },
        gender: String,
        age: String,
        doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        area: [String],
        job: String,
        jobdiscribe: String,
        address: { type: String, trim: true },
        phone: Number,
        notes: { type: String, trim: true },
        change: {
          order: { type: String, default: null },
          request: { type: Number, default: 0 },
          note: String
        }, // 0 normal 1 send req to update 2 ok 3 to super admin 4 ok
        rm: { type: Number, default: 0 },
        extra: Object,
        session: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Session' }],
        trans: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Trans' }],
        paid: [{
          creator: { type: Date, default: Date.now },
          update: { type: Date, default: Date.now },
          ptype: String,
          doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
          orthotype: String,
          orthodate: Date,
          total: Number,
          currency: { type: String, default: 'ILS' },  // ILS USD EUR JOD
          change: {
            order: { type: String, default: null },
            request: { type: Number, default: 0 },
            update: { f: Number, t: Number }, // update from --- to ---
            note: String
          },// 0 normal 1 send req to update 2 ok 3 to super admin 4 ok
          paid: [{
            creator: { type: Date, default: Date.now },
            pay: Number,
            paytype: Object,
            paydate: { type: Date, default: Date.now },
            actnumber: Number, // رقم الوصل
            note: String,
            change: {
              order: { type: String, default: null },
              request: { type: Number, default: 0 },
              update: { f: Number, t: Number }, // update from --- to ---
              note: String,
            },// 0 normal 1 send req to update 2 ok 3 to super admin 4 ok
            print: {type : Number , default: 0},
            rm: { type: Number, default: 0 }
          }],
          pftime: [{
            done: Number, // 1 done , 2 cancel 
            date: { type: Date, default: Date.now },
            note: String
          }],
          Suggested: Date,
          rm: { type: Number, default: 0 }
        }],
        coupon : Date
      }, { timestamps: true }
)
