import express from "express";

const app = express();

console.log("hello");

app.listen(8800, () => {
  console.log("Server is running!");
});
