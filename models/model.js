const { saveFile, readFile } = require("./helpers");

const create = async (filename, item) => {
  const list = await readFile(filename);
  list.push(item);
  await saveFile(filename, list);
};

const readAll = async (filename) => {
  return await readFile(filename);
};

const read = async (filename, id) => {
  const list = await readFile(filename);
  return list.find((el) => el.id === id);
};

const update = async (filename, item, id) => {
  let list = await readFile(filename);
  list = list.map((el) => {
    if (el.id === id) {
      return item;
    } else {
      return el;
    }
  });
  await saveFile(filename, list);
};

const remove = async (filename, id) => {
  let list = await readFile(filename);
  list = list.filter((el) => el.id !== id);
  await saveFile(filename, list);
};

module.exports.create = create;
module.exports.readAll = readAll;
module.exports.read = read;
module.exports.update = update;
module.exports.remove = remove;
