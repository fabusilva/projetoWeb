const router = require("express").Router();

const ongController = require("../controllers/OngController");
router.route("/ong").post((req,res) => ongController.create(req,res));
router.route("/ong").get((req,res) => ongController.getAll(req,res));
router.route("/ong/:id").get((req,res) => ongController.get(req,res));
router.route("/ong/:id").put((req,res)=> ongController.update(req,res));
router.route("/ong/:id").delete((req,res)=> ongController.delete(req,res));

module.exports = router;