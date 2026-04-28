import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true },
    phone: { type: String, required: true },
    items: [
      {
        productId: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    total: { type: Number, required: true },
    status: { type: String, enum: ["pending", "completed"], default: "pending" },
    note: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
