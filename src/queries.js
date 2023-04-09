export const getStudentQuery = "SELECT * FROM tbl_std";
export const getStudentByIdQuery = "SELECT * FROM tbl_std WHERE id= $1";
export const checkStdEmailExitsQuery = "SELECT std FROM tbl_std std WHERE std.email = $1";
export const addStudentQuery = "INSERT INTO tbl_std (name, email, age) VALUES ($1,$2,$3)";
export const deleteStudentQuery = "DELETE FROM tbl_std WHERE id=$1";
export const updateStudentQuery = "UPDATE tbl_std SET name=$2,email=$3,age=$4 WHERE id=$1";
