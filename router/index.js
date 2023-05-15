const DocumentController = require("../controller/documentController");
const UserController = require("../controller/userController");
const auth = require("../middleware/auth");
const authorizationAdmin = require("../middleware/authz");
const upload = require("../multer");
const router = require("express").Router();

router.post("/login", UserController.login);
router.post("/register", UserController.register);
// router.post("/upload", upload.single("image_url"), (req, res) => {
//   // membuat url gambar
//   // save ke db
//   try {
//     let finalImageUrl =
//       req.protocol + "://" + req.get("host") + "/upload/" + req.file.filename;
//     res.json({
//       status: "success",
//       image: finalImageUrl,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });
router.use(auth);
router.get("/document", DocumentController.GetDocument);
router.get("/document/:id", DocumentController.GetDocumentById);

router.use(authorizationAdmin);
router.post(
  "/adddocument",
  upload.single("image_url"),
  DocumentController.AddDocument
);
router.delete("/document/:id", DocumentController.DeleteDocument);

module.exports = router;
