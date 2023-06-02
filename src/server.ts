import express from "express";
import morgan from "morgan";
import router from "./router";

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  console.log("hello from express");
  res.status(200);
  res.json({ message: "hello" });
});

app.use("/api", router);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

export default app;
