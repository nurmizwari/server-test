const { Document } = require("../models");
class DocumentController {
  static async GetDocument(req, res) {
    try {
      const data = await Document.findAll();
      res.status(200).json({
        data: data,
        message: "sukses dapatkan data",
        status: 200,
      });
    } catch (error) {
      console.log(error);
    }
  }
  static async AddDocument(req, res) {
    try {
      //   console.log(req, "req user");
      //   if (req.user.role !== "amin") {
      //     return res.status(403).json({ message: "Akses ditolak" });
      //   }
      const { judul, deskripsi, nama, tanggal_unggah } = req.body;
      const data = await Document.create({
        judul,
        deskripsi,
        nama,
        tanggal_unggah,
      });
      res.status(201).json({
        data: data,
        message: "sukses tambah data",
        status: 201,
      });
    } catch (error) {
      console.log(error);
    }
  }
  static async DeleteDocument(req, res) {
    try {
      const id = req.params.id;
      const data = await Document.destroy({
        where: { id },
      });
      res.status(200).json({
        data: data,
        message: "sukses delete data",
        status: 200,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = DocumentController;
