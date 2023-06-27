const router = require("express").Router();
const jwt = require('jsonwebtoken');
function checkToken(req,res,next){
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if(!token){
            return res.status(401).json({msg:"Acesso negado!!!"})
        }
        const secret = process.env.SECRET;
        jwt.verify(token,secret);
        next();
    } catch (error) {
        console.log(error);
    }
}
const trabalhoController = require("../controllers/TrabalhoController");
router.route("/trabalho").post(checkToken, (req,res) => trabalhoController.create(req,res));
router.route("/trabalho").get((req,res) => trabalhoController.getAll(req,res));
router.route("/trabalho/:id").get((req,res) => trabalhoController.get(req,res));
router.route("/trabalho/:id").put((req,res)=> trabalhoController.update(req,res));
router.route("/trabalho/person/:id").put((req,res)=> trabalhoController.addPerson(req,res));
router.route("/trabalho/:id").delete((req,res)=> trabalhoController.delete(req,res));

module.exports = router;