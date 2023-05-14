const DocumentController = require("../controller/documentController");
const UserController = require("../controller/userController");
const auth = require("../middleware/auth");
const authorizationAdmin = require("../middleware/authz");

const router = require("express").Router();

router.post("/login", UserController.login);
router.post("/register", UserController.register);
router.use(auth);
router.get("/document", DocumentController.GetDocument);

router.use(authorizationAdmin);
router.post("/adddocument", DocumentController.AddDocument);
router.delete("/document/:id", DocumentController.DeleteDocument);

module.exports = router;
