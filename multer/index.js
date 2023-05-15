const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Tentukan folder tempat menyimpan file yang diunggah
    cb(null, "/TEST MEI/server/public/upload");
  },
  filename: function (req, file, cb) {
    // Tentukan nama file yang akan disimpan
    cb(
      null,
      path.parse(file.originalname).name +
        "-" +
        Date.now() +
        path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });
module.exports = upload;
