const router = require("express").Router();

const trabalhoController = require("../controllers/TrabalhoController");
router.route("/trabalho").post((req,res) => trabalhoController.create(req,res));
router.route("/trabalho").get((req,res) => trabalhoController.getAll(req,res));
router.route("/trabalho/:id").get((req,res) => trabalhoController.get(req,res));
router.route("/trabalho/:id").put((req,res)=> trabalhoController.update(req,res));
router.route("/trabalho/:id").delete((req,res)=> trabalhoController.delete(req,res));

module.exports = router;