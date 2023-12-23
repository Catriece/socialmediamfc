import express from "express";
import login from "../controllers/login.controllers";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    let data = await login.loginAuthentication(req.body);

    res.json(data);
  } catch (err) {
    next(err);
  }
});

export default router;
