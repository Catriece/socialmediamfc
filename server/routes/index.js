import express from "express";
import userRouter from "./user.routes";
import loginRouter from "./login.routes";

const router = express.Router();

router.get("/test", (req, res, next) => {
  res.send("Hello World!");
});

router.use("/login", loginRouter);
router.use("/user", userRouter);

export default router;
