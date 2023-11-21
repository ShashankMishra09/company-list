import express from "express";
import { Company } from "../models/companyModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (!req.body.name || !req.body.owner || !req.body.description || !req.body.location || !req.body.numEmp || !req.body.contact) {
      return res.status(400).send({
        message: "Send all fields: name, owner, description",
      });
    }
    const newCompany = {
      name: req.body.name,
      owner: req.body.owner,
      location: req.body.location,
      numEmp: req.body.numEmp,
      contact: req.body.contact,
      description: req.body.description,
    };
    const company = await Company.create(newCompany);
    return res.status(201).send(company);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const companies = await Company.find({});
    return res.status(200).json({
      count: companies.length,
      data: companies,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findById(id);

    return res.status(200).json(company);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});




export default router;
