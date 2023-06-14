const { Trabalho: CausaModel } = require("../models/Causa");

const causaController = {
  create: async (req, res) => {
    try {
      const causa = {
        title: req.body.title,
        description: req.body.description,
        address: req.body.address,
        date: req.body.date,
        author: req.body.author,
        people: req.body.people,
      };
      const response = await CausaModel.create(causa);
      res
        .status(201)
        .json({ response, msg: "Causa " + response.title + " criada!" });
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const causa = await CausaModel.findById(id);
      if (!causa) {
        res.status(404).json({ msg: "Id não encontrado" });
        return;
      }
      const deleteCausa = await CausaModel.findByIdAndDelete(id);
      res
        .status(200)
        .json({ deleteTrabalho: deleteCausa, msg: "Causa apagada!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;
      const causa = {
        title: req.body.title,
        description: req.body.description,
        address: req.body.address,
        date: req.body.date,
        author: req.body.author,
        people: req.body.people,
      };
      const updateCausa = await CausaModel.findByIdAndUpdate(id, causa);
      if (!updateCausa) {
        res.status(404).json({ msg: "Id não encontrado." });
        return;
      }
      res.status(200).json({ causa, msg: "Trabalho atualizado!" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const causa = await CausaModel.find();
      res.json(causa);
    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const causa = await CausaModel.findById(id);
      if (!causa) {
        res.status(404).json({ msg: "Id não encontrado" });
        return;
      }
      res.json(causa);
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = causaController;
