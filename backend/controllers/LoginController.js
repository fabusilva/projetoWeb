const {User: UserModel} = require('../models/User');
const {Ong: OngModel} = require('../models/Ong');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const loginController = {
    findRegister: async(req,res) =>{
        try {
            var secret;
            var usuario;
            var role;
            const email = req.params.email;
            const password = req.params.password;
            const user = await UserModel.findOne({email:email});
            if(user){
                const userPassword = await bcrypt.compare(password,user.password);
                if(!userPassword){
                    res.status(404).json({ msg: "Senha não encontrada." });
                    return;
                }
                role = "user";
                usuario = user;
                secret = process.env.SECRET_USER
            } else {
                const ong = await OngModel.findOne({email:email});
                if(ong){
                    const ongPassword = await bcrypt.compare(password,ong.password);
                    if(!ongPassword){
                        res.status(404).json({ msg: "Senha não encontrada." });
                        return;
                    }
                    role = "ong";
                    usuario = ong;
                    secret = process.env.SECRET_ONG
                }else{
                    res.status(404).json({ msg: "Email não encontrado." });
                    return;
                }
            }
            res.cookie('jwm',usuario.email,{HttpOnly:true, maxAge: 24*60*60*1000});
            const token = jwt.sign({email: usuario.email},secret);
            res.status(200).json({roles:role,usuario,msg:"Login realizado com sucesso ",token});
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = loginController;