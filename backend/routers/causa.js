const router = require("express").Router();

const causaController = require("../controllers/CausaController");
router.route("/causa").post((req,res) => causaController.create(req,res));
router.route("/causa").get((req,res) => causaController.getAll(req,res));
router.route("/causa/:id").get((req,res) => causaController.get(req,res));
router.route("/causa/:id").put((req,res) => causaController.update(req,res));
router.route("/causa/person/:id").put((req,res)=> causaController.addPerson(req,res));
router.route("/causa/:id").delete((req,res) => causaController.delete(req,res));

module.exports = router;