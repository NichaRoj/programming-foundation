import { Document, Schema, model } from "mongoose"

export interface IAccount extends Document {
  id?: string
  name: string
  amount: number
}

export const AccountSchema = new Schema({
  name: String,
  amount: Number,
})

export const Account = model<IAccount>("Account", AccountSchema)
