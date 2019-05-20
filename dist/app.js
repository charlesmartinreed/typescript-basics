"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import available because we're having the ts compiler compiled down to es2015
const express_1 = __importDefault(require("express"));
// when implementing the package @types/express, we get the above Express Types
const app = express_1.default();
const add = (a, b) => a + b;
app.get("/", (req, res, next) => {
    console.log(add(5, 5));
    res.send("Hello, world!");
});
app.listen(5000, () => console.log("Server running"));
