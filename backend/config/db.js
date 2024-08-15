import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://prakshal840:prakshal@cluster0.xe74rtd.mongodb.net/food-delivery"
    )
    .then(() => {
      console.log("DB Connected");
    });
};
