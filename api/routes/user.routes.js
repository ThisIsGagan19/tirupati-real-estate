import express from "express";
import { test } from "../controllers/user.controllers.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("User route is working!");
});
export default router;
