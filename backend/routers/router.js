const router  =require("express").Router();

const userRouter = require("./users");
const trabalhoRouter = require("./trabalhos");

router.use("/",userRouter);
router.use("/",trabalhoRouter);

module.exports = router;