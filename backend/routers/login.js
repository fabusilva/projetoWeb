const router = require("express").Router();

const loginController = require('../controllers/LoginController');
router.route("/login").get((req,res) => loginController.findRegister(req,res));
module.exports = router;