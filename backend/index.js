const express = require("express");
const mongoose = require("mongoose");

const app = express();
const connectDB = async () => {
  mongoose.connect("mongodb://localhost:27017/e-comm");
  const prodcutSchema = new mongoose.Schema({});
  const product = mongoose.model("products", prodcutSchema);
  const data = await product.find();
  console.warn(data);
};

app.listen(5000);
