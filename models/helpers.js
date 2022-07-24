const path = require("path");
const fs = require("fs").promises;

const getPath = (filename) =>
  path.join(
    path.dirname(process.mainModule.filename),
    "data",
    `${filename}.json`
  );

const saveFile = async (filename, data) => {
  const stringifyData = JSON.stringify(data);
  await fs.writeFile(getPath(filename), stringifyData);
};

const readFile = async (filename) => {
  let jsonData = await fs.readFile(getPath(filename), "binary");
  jsonData = Buffer.from(jsonData);
  return JSON.parse(jsonData);
};

module.exports.saveFile = saveFile;
module.exports.readFile = readFile;
