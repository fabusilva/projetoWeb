const { Ong: OngModel } = require("../models/Ong");
const { Causa: CausaModel } = require("../models/Causa");
const bcrypt = require('bcrypt');
const ongController = {
  create: async (req, res) => {
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(req.body.password,salt);
    try {
      const ong = {
        name: req.body.name,
        email: req.body.email,
        cnpj: req.body.cnpj,
        password: passwordHash,

        description: req.body.description,
        address: req.body.address,
        causas: req.body.causas,
      };
      const response = await OngModel.create(ong);
      res
        .status(201)
        .json({ response, msg: "ONG " + response.name + " foi criada!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(req.body.password,salt);
    try {
      const id = req.params.id;
      const ong = {
        name: req.body.name,
        email: req.body.email,
        cnpj: req.body.cnpj,
        password: passwordHash,

        description: req.body.description,
        address: req.body.address,
        causas: req.body.causas,
      };
      const updateOng = await OngModel.findByIdAndUpdate(id, ong);
      if (!updateOng) {
        res.status(404).json({ msg: "Id não encontrado." });
        return;
      }
      res
        .status(200)
        .json({ updateOng, msg: "Usuario " + updateOng.name + " atualizado" });
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const ong = await OngModel.findById(id);
      if (!ong) {
        res.status(404).json({ msg: "Id não encontrado." });
        return;
      }
      const deleteOng = await OngModel.findByIdAndDelete(id);
      res.status(200).json({deleteOng, msg:"ONG "+deleteOng.name+" apagado!"})
    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
        const id = req.params.id;
      const ong = await OngModel.findById(id);
      if (!ong) {
        res.status(404).json({ msg: "Id não encontrado." });
        return;
      }
      res.json(ong);
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
        const ong = await OngModel.find();
        res.json(ong);
    } catch (error) {
      console.log(error);
    }
  },
  addCausas: async(req,res) =>{
    try {
      const ongId = req.params.id;
      const causaId = req.body.id;

      const ong = await OngModel.findById(ongId);
      if(!ong){
        return res.status(404).json({error:"ONG não encontrada"});
      }
      const causa = await CausaModel.findById(causaId);
      if(!causa){
        return res.status(404).json({error:"Causa não encontrada"});
      }
      ong.causas.push(causaId);
      await ong.save();
      res.status(200).json({ message: "Operação realizada com sucesso" });
    } catch (error) {
      console.log(error);
    }
  }
};
module.exports = ongController;