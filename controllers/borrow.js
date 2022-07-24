const model = require("../models/model");
const crypto = require("crypto");

const borrow = async (req, res, next) => {
  const studentId = req.body.studentId;
  const bookId = req.body.bookId;

  const student = await model.read("student", studentId);
  const book = await model.read("book", bookId);

  if (student && book) {
    student.books.find((el) => el === bookId) || student.books.push(bookId);
    book.borrowers.find((el) => el === studentId) ||
      book.borrowers.push(studentId);

    await model.update(
      "student",
      { ...student, books: student.books },
      studentId
    );
    await model.update("book", { ...book, borrowers: book.borrowers }, bookId);
    res.status(200).json({ status: 200 });
  } else res.status(500).json({ status: 500 });
};

const remove = async (req, res, next) => {
  const studentId = req.body.studentId;
  const bookId = req.body.bookId;

  const student = await model.read("student", studentId);
  const book = await model.read("book", bookId);

  if (student || book) {
    if (student) student.books = student?.books?.filter((el) => el !== bookId);
    if (book)
      book.borrowers = book?.borrowers?.filter((el) => el !== studentId);

    await model.update(
      "student",
      { ...student, books: student.books },
      studentId
    );
    await model.update("book", { ...book, borrowers: book.borrowers }, bookId);
    res.status(200).json({ status: 200 });
  } else res.status(500).json({ status: 500 });
};

module.exports.borrow = borrow;
module.exports.remove = remove;
