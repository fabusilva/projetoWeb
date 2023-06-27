const router = require("express").Router();

const userController = require("../controllers/UserController");
router.route("/register").post((req,res) =>userController.create(req,res));
router.route("/register").get((req,res)=> userController.getAll(req,res));
router.route("/register/:id").get((req,res) => userController.get(req,res));
router.route("/register/:id").delete((req,res) => userController.delete(req,res));
router.route("/register/:id").put((req,res) => userController.update(req,res));
router.route("/login/:email").get((req,res) => userController.getEmail(req,res));
router.route("/user/causa/:id").put((req,res) => userController.arrayCausa(req,res));
router.route("/user/trabalho/:id").put((req,res) => userController.arrayTrabalho(req,res));

module.exports = router;