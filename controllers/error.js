exports.get404 = (req, res, next) => {
  res.status(404);
  res.json({ status: "error", code: 404 });
};
