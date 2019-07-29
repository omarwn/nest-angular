export class Patient {
  _id?: string;
  name?: {
    firstname: string,
    secondname: string,
    thirdname?: string,
    lastname: string
  };
  create?: Date;
  update?: Date;
  gender?: string;
  age?: string;
  doctor?: any;
  user?: string;
  area?: string[];
  job?: string;
  jobdiscribe?: string;
  address?: string;
  phone?: number;
  notes?: string;
  change?: {
    order?: string,
    request?: string,
    note?: string
  };
  rm?: number;
  coupon?: Date;
  extra?: object;
  session?: string[];
  trans?: string[];
  paid?: {
    creator?: Date,
    update?: Date,
    ptype?: string,
    doctor?: string,
    orthotype?: string,
    orthodate?: Date,
    total?: number,
    currency?: string,  // ILS USD EUR JOD
    change?: {
      order?: string,
      request?: string,
      update?: { f: number, t: number }, // update from --- to ---
      note?: string
    },// 0 normal 1 send req to update 2 ok 3 to super admin 4 ok
    paid?: {
      creator?: Date,
      pay?: number,
      paytype?: object,
      paydate?: Date,
      actnumber?: number, // رقم الوصل
      note?: string,
      change?: {
        order?: string,
        request?: string,
        update?: { f: number, t: number }, // update from --- to ---
        note?: string,
      },// 0 normal 1 send req to update 2 ok 3 to super admin 4 ok
      print?: number,
      rm?: number
    }[],
    pftime?: {
      done?: number, // 1 done , 2 cancel 
      date?: Date,
      note?: string
    }[],
    Suggested?: Date,
    rm?: number
  }[];
}
