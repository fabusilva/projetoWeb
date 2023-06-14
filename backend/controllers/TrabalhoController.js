const { Trabalho: TrabalhoModel } = require("../models/Trabalho");

const trabalhoController = {
  create: async (req, res) => {
    try {
      const trabalho = {
        title: req.body.title,
        description: req.body.description,
        address: req.body.address,
      };
      const response = await TrabalhoModel.create(trabalho);
      res
        .status(201)
        .json({ response, msg: "Trabalho " + response.title + " criado!" });
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const trabalho = await TrabalhoModel.findById(id);
      if (!trabalho) {
        res.status(404).json({ msg: "Id não encontrado" });
        return;
      }
      const deleteTrabalho = await TrabalhoModel.findByIdAndDelete(id);
      res.status(200).json({ deleteTrabalho, msg: "Trabalho apagado!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;
      const trabalho = {
        title: req.body.title,
        description: req.body.description,
        address: req.body.address,
      };
      const updateTrabalho = await TrabalhoModel.findByIdAndUpdate(
        id,
        trabalho
      );
      if (!updateTrabalho) {
        res.status(404).json({ msg: "Id não encontrado." });
        return;
      }
      res.status(200).json({ trabalho, msg: "Trabalho atualizado!" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async(req,res) =>{
    try {
        const trabalho = await TrabalhoModel.find();
        res.json(trabalho);
    } catch (error) {
        console.log(error);
    }
  },
  get: async(req,res) =>{
    try {
        const id = req.params.id;
      const trabalho = await TrabalhoModel.findById(id);
      if (!trabalho) {
        res.status(404).json({ msg: "Id não encontrado" });
        return;
      }
      res.json(trabalho);
    } catch (error) {
        console.log(error);
    }
  }
};
module.exports = trabalhoController;