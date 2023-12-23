import express from "express";
import user from "../controllers/user.controllers";

const router = express.Router();

router.get("/userinfo", async (req, res, next) => {
  console.log("Route with: ", req.query);
  try {
    const data = await user.getUserInfo(req);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

export default router;
