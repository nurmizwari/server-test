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
  static async GetDocumentById(req, res) {
    try {
      const { id } = req.params;
      console.log(id, "iddd");
      const data = await Document.findByPk(id);
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
      let finalImageUrl =
        req.protocol + "://" + req.get("host") + "/upload/" + req.file.filename;
      // res.json({
      //   status: "success",
      //   image: finalImageUrl,
      // });
      const data = await Document.create({
        judul,
        deskripsi,
        nama,
        tanggal_unggah,
        image_url: finalImageUrl,
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
