import { Injectable } from "@nestjs/common";
import { Model, Document } from 'mongoose';

@Injectable()
export class BaseService {
  // model
  constructor(private model: Model<Document>) {

  }

  //  Get all
  getAll = async () => {
    try {
      const docs = await this.model.find({});
      return docs
    } catch (err) {
      return { error: err }
    }
  }

  // Get sub of all to stor in table 20 to 23 element
  // data = {page : number , 
  //         data : object , 
  //         limit : number , 
  //         filter : string , 
  //         populate : {path : string , select : string}
  //    }
  getSub = async (data) => {
    let s = data.data ? { ...data.data } : {}
    let l = data.limit ? data.limit : 20
    let f = data.filter ? data.filter : ''
    let p = data.populate ? data.populate : {path : '' , select : ''}
    try {
      const docs = await this.model.find(s)
        .sort({ _id: -1 })
        .skip((data.page - 1) * l)
        .select(f)
        .limit(l)
        .populate(p.path, p.select);
      return docs
    } catch (err) {
      return { error: err }
    }
  }

  // Count all
  count = async () => {
    try {
      const count = await this.model.count({});
      return count
    } catch (err) {
      return { error: err }
    }
  }

  // Insert
  insert = async (data) => {
    try {
      const obj = await new this.model(data).save();
      return obj;
    } catch (err) {
      return { error: err }
    }
  }

  // Get by id
  get = async (data) => {
    try {
      const obj = await this.model.findOne({ _id: data.id });
      return obj
    } catch (err) {
      return { error: err }
    }
  }

  // Update by id
  update = async (data) => {
    try {
      console.log(data)
      await this.model.findOneAndUpdate({ _id: data.id }, { name: data.body.name, age: data.body.age, weight: data.body.weight }).exec();

    } catch (err) {
      return { error: err }
    }
  }

  // Delete by id
  delete = async (data) => {
    try {
      await this.model.findOneAndRemove({ _id: data.id }).exec();
    } catch (err) {
      return { error: err }
    }
  }
}