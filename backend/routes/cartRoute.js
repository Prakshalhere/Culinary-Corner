import express from "express";
import {
  addToCart,
  removeFromCart,
  getCart,
  removeItemFromCart,
} from "../controllers/cartController.js";
import authMiddleware from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add", authMiddleware, addToCart);
cartRouter.post("/remove", authMiddleware, removeFromCart);
cartRouter.post("/get", authMiddleware, getCart);
cartRouter.post("/removeItem" , authMiddleware, removeItemFromCart)
export default cartRouter;
