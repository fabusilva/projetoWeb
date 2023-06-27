const router  =require("express").Router();

const userRouter = require("./users");
const trabalhoRouter = require("./trabalhos");
const ongRouter = require("./ongs");
const causaRouter = require("./causa");
const loginRouter = require("./login");

router.use("/",userRouter);
router.use("/",trabalhoRouter);
router.use("/",ongRouter);
router.use("/",causaRouter);
router.use("/",loginRouter);
module.exports = router;