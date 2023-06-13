const { User: UserModel } = require("../models/User");

const userController = {
    create: async (req, res) => {
        try {
            const user = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            };
            const response = await UserModel.create(user);
            res.status(201).json({ response, msg: "Usuario "+response.name+" Criado" });
        } catch (error) {
            console.log(error);
        };
    },
    getAll: async (req, res) => {
        try {
            const user = await UserModel.find();
            res.json(user);
        } catch (error) {
            console.log(error);
        };
    },
    get: async(req,res) =>{
        try {
            const id = req.params.id;
            const user = await UserModel.findById(id);
            if(!user){
                res.status(404).json({msg:"Id não encontrado."});
                return;
            }
            res.json(user);
        } catch (error) {
            console.log(error);
            
        };
    },
    getEmail: async(req,res) =>{
        try {
            const email = req.params.email;
            const user = await UserModel.findOne({ email: email });
            if (!user) {
              res.status(404).json({ msg: "Usuário não encontrado." });
              return;
            }
            res.json(user);
          } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Ocorreu um erro interno no servidor." });
          }
    },
    delete: async(req,res) =>{
        try {
            const id = req.params.id;
            const user = await UserModel.findById(id);
            if(!user){
                res.status(404).json({msg:"Id não encontrado."});
                return;
            }
            const deleteUser = await UserModel.findByIdAndDelete(id);
            res.status(200).json({deleteUser, msg: "Usuario "+deleteUser.name+" excluido"})
        } catch (error) {
            console.log(error);
        };
    },
    update: async (req,res) =>{
        try {
            const id = req.params.id;
            const user = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            };
            const updateUser = await UserModel.findByIdAndUpdate(id, user);
            if(!updateUser){
                res.status(404).json({msg:"Id não encontrado."});
                return;
            }
            res.status(200).json({user, msg:"Usuario "+updateUser.name+" atualizado"})
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = userController;