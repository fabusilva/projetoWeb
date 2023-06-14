const router = require("express").Router();

const trabalhoController = require("../controllers/TrabalhoController");
router.route("/ong").post((req,res) => trabalhoController.create(req,res));
router.route("/ong").get((req,res) => trabalhoController.getAll(req,res));
router.route("/ong/:id").get((req,res) => trabalhoController.get(req,res));
router.route("/ong/:id").put((req,res)=> trabalhoController.update(req,res));
router.route("/ong/:id").delete((req,res)=> trabalhoController.delete(req,res));

module.exports = router;