const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

//Database Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/awp_prac_12", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection successfull..."))
  .catch((err) => console.log(err));

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

const Product = new mongoose.model("product", productSchema);

app.post("/add", async (req, res) => {
  const { name, price } = req.body;
  console.log(req.body);
  const newData = new Product({ name, price });
  const ack = await newData.save();
  res.status(200).json(ack);
});

app.get("/product", async (req, res) => {
  const ack = await Product.find();
  res.status(200).json(ack);
});

app.listen(8000, () => {
  console.log("listening the port at 8000");
});