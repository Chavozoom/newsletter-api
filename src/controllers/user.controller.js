import { createService, findAllService } from "../services/user.service.js";

export const create = async (req, res) => {
  try {
    const { name, email, cpf, phone } = req.body;

    if (!name || !email || !cpf || !phone) {
      res.status(400).send({ message: "Error" });
    }
    
    const user = await createService(req.body);

    if (!user) {
      return res.status(400).send({ message: "Error creating user" });
    }

    res.status(201).send({
      message: "OK!",
      user,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findAll = async (req, res) => {
  try {
    const users = await findAllService();
    if (users.length === 0) {
      return res.status(400).send({ message: "No registred users" });
    }

    res.status(200).send({ users });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
