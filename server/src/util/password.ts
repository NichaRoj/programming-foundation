import crypto from "crypto"

export const encryptPassword = (input: string) => {
  const salt = crypto.randomBytes(16).toString("hex")
  const password = crypto
    .pbkdf2Sync(input, salt, 1000, 64, "sha512")
    .toString("hex")

  return { salt, password }
}

export const isCorrectPassword = (
  salt: string,
  password: string,
  input: string
) => {
  const hashedInput = crypto
    .pbkdf2Sync(input, salt, 1000, 64, "sha512")
    .toString("hex")
  return password === hashedInput
}
