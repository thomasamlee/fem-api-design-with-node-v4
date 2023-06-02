import express from "express";
import morgan from "morgan";
import router from "./router";
import { protect } from "./modules/auth";
import { createNewUser, signin } from "./handlers/user";

import * as dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("hello from express");
  res.status(200);
  res.json({ message: "hello" });
});

app.post("/user", createNewUser);
app.post("/signin", signin);

app.use("/api", protect, router);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

export default app;
