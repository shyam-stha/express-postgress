import pool from "../../db.js";
import {
  addStudentQuery,
  checkStdEmailExitsQuery,
  deleteStudentQuery,
  getStudentByIdQuery,
  getStudentQuery,
  updateStudentQuery,
} from "../queries.js";

export const getStudents = (req, res, next) => {
  pool.query(getStudentQuery, (error, results) => {
    if (error) next(error);
    res.status(200).json(results.rows);
  });
};

export const getStudentById = (req, res, next) => {
  const id = parseInt(req.params?.id);
  pool.query(getStudentByIdQuery, [id], (error, results) => {
    if (error) next(error);
    res.status(200).json(results.rows);
  });
};

export const addStudent = (req, res, next) => {
  const { name, email, age } = req.body;

  //check if email exits
  pool.query(checkStdEmailExitsQuery, [email], (error, results) => {
    if (results.rows.length) {
      res.send("Email already exits.");
    }

    pool.query(addStudentQuery, [name, email, age], (error, results) => {
      if (error) next(error);

      res.status(201).send("studnet created successfully!");
    });
  });
};

export const deleteStudent = (req, res, next) => {
  const id = req.params?.id;

  //check if student with this parameter id exits or not
  pool.query(getStudentByIdQuery, [id], (error, results) => {
    const studentNotFound = !results.rows?.length;
    if (studentNotFound) {
      res.status(401).send("student does not exits in database");
    }

    pool.query(deleteStudentQuery, [id], (error, results) => {
      if (error) next(error);
      res.status(200).send("student details deleted successfully!");
    });
  });
};

export const updateStudent = (req, res, next) => {
  const id = parseInt(req.params?.id);
  const { name, email, age } = req.body;

  //check if student with this parameter id exits or not
  pool.query(getStudentByIdQuery, [id], (error, results) => {
    const studentNotFound = !results.rows?.length;
    if (studentNotFound) {
      res.status(401).send("student does not exits in database");
    }

    pool.query(updateStudentQuery, [id, name, email, age], (error, results) => {
      if (error) next(error);
      res.status(200).send("student details updated successfully!");
    });
  });
};
