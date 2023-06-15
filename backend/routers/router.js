const router  =require("express").Router();

const userRouter = require("./users");
const trabalhoRouter = require("./trabalhos");
const ongRouter = require("./ongs");
const causaRouter = require("./causa");

router.use("/",userRouter);
router.use("/",trabalhoRouter);
router.use("/",ongRouter);
router.use("/",causaRouter);

module.exports = router;