import mongoose from "mongoose";

const Order = new mongoose.Schema({
  id: { type: Number, required: true },
  data: { type: String, required: true },
  title: { type: String, required: true },
  quantity: { type: Number, required: true },
  distance: { type: Number, required: true },
});

export default mongoose.model("Order", Order);
