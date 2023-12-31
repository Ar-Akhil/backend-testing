import express from "express";
import mongoose from "mongoose";
import booksroutes from "./routes/booksRoutes.js";
import cors from "cors";
import mongoDBURL from "./config.js";

const app = express();

//middleware for parsing request body
app.use(
  cors({
    origin: "https://backend-testing-nu.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(909).send("Testing");
});

app.use("/books", booksroutes);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("app is connected to db");
    app.listen("https://backend-testing-nu.vercel.app/");
  })
  .catch((error) => {
    console.log(error);
  });
