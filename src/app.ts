// import available because we're having the ts compiler compiled down to es2015
import express, { Application, Request, Response, NextFunction } from "express";

// when implementing the package @types/express, we get the above Express Types
const app: Application = express();

const add = (a: number, b: number): number => a + b;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log(add(5, 5));
  res.send("Hello, world!");
});

app.listen(5000, () => console.log("Server running"));
