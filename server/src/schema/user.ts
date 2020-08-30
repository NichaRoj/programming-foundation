import { Document, Schema, model } from "mongoose"
import crypto from "crypto"
import { IAccount } from "./account"

export interface IUser extends Document {
  id?: string
  username: string
  password: string
  salt: string
  accounts: IAccount[]
}

export const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  salt: String,
  accounts: [{ type: Schema.Types.ObjectId, ref: "Account" }],
})

export const User = model<IUser>("User", UserSchema)
