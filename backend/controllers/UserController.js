const { User: UserModel } = require("../models/User");
const { Causa: CausaModel } = require("../models/Causa");
const { Trabalho: TrabalhoModel } = require("../models/Trabalho");
const bcrypt = require('bcrypt');
const userController = {
  create: async (req, res) => {
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(req.body.password,salt);
    try {
      const user = {
        name: req.body.name,
        email: req.body.email,
        password: passwordHash,
        causasContributions: req.body.causasContributions,
        trabalhosContributions: req.body.trabalhosContributions,
      };
      const response = await UserModel.create(user);
      res
        .status(201)
        .json({ response, msg: "Usuario " + response.name + " Criado" });
    } catch (error) {
      console.log(error);
      res
        .status(401)
        .json({ msg: "Erro ao cadastrar usuario" });
    }
  },
  getAll: async (req, res) => {
    try {
      const user = await UserModel.find();
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const user = await UserModel.findById(id);
      if (!user) {
        res.status(404).json({ msg: "Id não encontrado." });
        return;
      }
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  },
  getEmail: async (req, res) => {
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
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const user = await UserModel.findById(id);
      if (!user) {
        res.status(404).json({ msg: "Id não encontrado." });
        return;
      }
      const deleteUser = await UserModel.findByIdAndDelete(id);
      res
        .status(200)
        .json({ deleteUser, msg: "Usuario " + deleteUser.name + " excluido" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(req.body.password,salt);
    try {
      const id = req.params.id;
      const user = {
        name: req.body.name,
        email: req.body.email,
        password: passwordHash,
        causasContributions: req.body.causasContributions,
        trabalhosContributions: req.body.trabalhosContributions,
      };
      const updateUser = await UserModel.findByIdAndUpdate(id, user);
      if (!updateUser) {
        res.status(404).json({ msg: "Id não encontrado." });
        return;
      }
      res
        .status(200)
        .json({ user, msg: "Usuario " + updateUser.name + " atualizado" });
    } catch (error) {
      console.log(error);
    }
  },
  arrayCausa: async (req, res) => {
    try {
      const userId = req.params.id;
      const causaId = req.body.id;

      const user = await UserModel.findById(userId);
      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }
      const causa = await CausaModel.findById(causaId);
      if (!causa) {
        return res.status(404).json({ error: "Causa não encontrado" });
      }
      user.causasContributions.push(causaId);
      await user.save();
      res.status(200).json({ message: "Contribuição adicionada com sucesso" });
    } catch (error) {
      console.log(error);
    }
  },
  arrayTrabalho: async (req, res) => {
    try {
      const userId = req.params.id;
      const trabalhoId = req.body.id;
      const user = await UserModel.findById(userId);
      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }
      const trabalho = await TrabalhoModel.findById(trabalhoId);
      if (!trabalho) {
        return res.status(404).json({ error: "Trabalho não encontrado" });
      }
      user.trabalhosContributions.push(trabalhoId);
      await user.save();

      res.status(200).json({ message: "Contribuição adicionada com sucesso" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = userController;
