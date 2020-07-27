import { connectToDb, disconnectFromDb } from "./util/mongooser";

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

connectToDb();
disconnectFromDb();
