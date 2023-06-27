const {User: UserModel} = require('../models/User');
const {Ong: OngModel} = require('../models/Ong');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const loginController = {
    findRegister: async(req,res) =>{
        try {
            var usuario;
            const email = req.body.email;
            const password = req.body.password;
            const user = await UserModel.findOne({email:email});
            if(user){
                const userPassword = await bcrypt.compare(password,user.password);
                if(!userPassword){
                    res.status(404).json({ msg: "Senha não encontrada." });
                    return;
                }
                usuario = user;
            } else {
                const ong = await OngModel.findOne({email:email});
                if(ong){
                    const ongPassword = await bcrypt.compare(password,ong.password);
                    if(!ongPassword){
                        res.status(404).json({ msg: "Senha não encontrada." });
                        return;
                    }
                    usuario = ong;
                }else{
                    res.status(404).json({ msg: "Email não encontrado." });
                    return;
                }
            }

            const secret = process.env.SECRET;
            const token = jwt.sign({
                id: usuario._id
            },secret,)
            res.status(200).json({usuario,msg:"Login realizado com sucesso ",token});
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = loginController;