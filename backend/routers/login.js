const router = require("express").Router();

const loginController = require('../controllers/LoginController');
router.route("/login/:email/:password").get((req,res) => loginController.findRegister(req,res));
module.exports = router;