const router = require("express").Router();
const jwt = require('jsonwebtoken');
function checkToken(req,res,next){
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if(!token){
            return res.status(401).json({msg:"Acesso negado!!!"});
        }
        const secret = process.env.SECRET_USER;
        jwt.verify(token,secret, (error, decoded) =>{
            if(error){
                return res.sendStatus(403)
            }
            //req.usuario.email = decoded.email   
            next();
        });
    } catch (error) {
        res.status(401).json({ error: 'Token JWT inválido' });
        console.log(error);
    }
}
const trabalhoController = require("../controllers/TrabalhoController");
router.route("/trabalho").post((req,res) => trabalhoController.create(req,res));
router.route("/trabalho").get((req,res) => trabalhoController.getAll(req,res));
router.route("/trabalho/:id").get((req,res) => trabalhoController.get(req,res));
router.route("/trabalho/:id").put((req,res)=> trabalhoController.update(req,res));
router.route("/trabalho/person/:id").put((req,res)=> trabalhoController.addPerson(req,res));
router.route("/trabalho/:id").delete((req,res)=> trabalhoController.delete(req,res));

module.exports = router;