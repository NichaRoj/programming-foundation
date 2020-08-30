import { connectToDb } from "./util/mongooser"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import { User } from "./schema/user"
import { Account } from "./schema/account"
import { encryptPassword, isCorrectPassword } from "./util/password"

/**
 * Welcome to the server for our online banking service!
 * The server will usually be where all the business logics is processed
 * because it also connects to the database.
 *
 * But before we can create a database, first, we need to understand what an API means.
 * API is short for Application Programming Interface. Tough words, but imagine we are
 * going to get some burgers from a McDonalds drive-thru. You don't know how the staff operates inside
 * but you know that there are defined menu items you can order, you have to order at one gate,
 * and then you have to receive your order at another gate.
 *
 * API is basically the same thing. When you want your web to use APIs,
 * first, you need to look up APIs (the menu items) that you can call.
 * In API documentation, usually they will define the request (the order) that
 * we need to send, and the response (the food) that we will receive.
 * Try looking up Shopee Open API at https://open.shopee.com/
 *
 * Also, there are many protocols for API, the most popular being HTTP,
 * and even design patterns such as REST as well.
 *
 * Well, let's focus on creating a server that can handle HTTP APIs using Express first.
 */

connectToDb()

const app = express()
const port = 8080

app.use(cors())
app.use(bodyParser.json()) // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
)

app.get("/ping", (req, res) => {
  res.send("pong")
})

app.post("/register", async (req, res) => {
  const { username, password } = req.body

  const newUser = await User.create({
    username,
    ...encryptPassword(password),
    accounts: [],
  })

  res.send({ id: newUser.id, username: newUser.username })
})

app.post("/login", async (req, res) => {
  const { username, password } = req.body

  const user = await User.findOne({ username })
  if (!user) return res.status(400).send({ message: "User not found" })

  if (isCorrectPassword(user.salt, user.password, password))
    return res.send({ id: user.id, username: user.username })
  else return res.status(400).send({ message: "Incorrect password" })
})

app.listen(port, () =>
  console.log(`Server is listening at http://localhost:${port}`)
)
