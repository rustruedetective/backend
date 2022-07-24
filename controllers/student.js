const model = require("../models/model");
const crypto = require("crypto");

const create = async (req, res, next) => {
  const id = crypto.randomBytes(16).toString("hex");
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;

  console.log(req.body);

  if (id && first_name && last_name) {
    await model.create("student", { id, first_name, last_name, books: [] });
    res.status(200).json({ status: 200 });
  } else {
    res.status(400).json({ status: 400 });
  }
};

const readAll = async (req, res, next) => {
  const list = await model.readAll("student");
  res.status(200).json({ status: 200, list });
};

const read = async (req, res, next) => {
  const id = req.body.id;
  const item = await model.read("student", id);

  if (item) res.status(200).json({ status: 200, item });
  else res.status(500).json({ status: 500 });
};

const update = async (req, res, next) => {
  const id = req.body.id;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;

  const item = await model.read("student", id);
  if (item) {
    if (id && first_name && last_name) {
      console.log(item);
      await model.update("student", { ...item, first_name, last_name }, id);
      res.status(200).json({ status: 200 });
    } else res.status(400).json({ status: 400 });
  } else res.status(500).json({ status: 500 });
};

const remove = async (req, res, next) => {
  const id = req.body.id;

  const item = await model.read("student", id);
  if (item) {
    await model.remove("student", id);
    res.status(200).json({ status: 200 });
  } else res.status(500).json({ status: 500 });
};

module.exports.create = create;
module.exports.readAll = readAll;
module.exports.read = read;
module.exports.update = update;
module.exports.remove = remove;
