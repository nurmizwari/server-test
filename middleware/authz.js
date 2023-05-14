const { User } = require("../models");

async function authorizationAdmin(req, res, next) {
  console.log(req.user);
  try {
    let data = await User.findByPk(req.user.id);
    console.log(data, "data");
    if (!data) {
      res.status(404).json({ message: "Data not found" });
    } else if (req.user.role === "admin") {
      next(); //! ini admin tidak usah ada pengecekan id karena bebas hapus yang mana aja!
    } else {
      res.status(403).json({ message: "forbidden" });
    }
  } catch (error) {
    if (error.name === "forbidden") {
      res.status(403).json({ message: "forbidden" });
    }
    res.status(500).json({ message: "Internal Server Error" });
    console.log(error);
  }
}
//! baca dulu data yang ingin diubah
//! apakah authorId sesuai dengan yang login
module.exports = authorizationAdmin;
