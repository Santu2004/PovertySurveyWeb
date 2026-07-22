import db from "./db.js";


export const findAdminByUsername = (username, callback) => {
  const sql = "SELECT * FROM admins WHERE username = ?";

  db.query(sql, [username], callback);
};