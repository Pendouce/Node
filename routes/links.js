const express = require("express");
const router = express.Router();
const linkController = require("../Controllers/linkController");
const {
  getCommentsForLink,
  createComment,
} = require("../controllers/commentController");
const protect = require("../middleware/auth");

/* Route crud pour les liens
  CRUD = Create, Read, Update, Delete
*/

router.get("/", linkController.getAllLinks);
router.post("/", protect, linkController.createLink);
router.get("/:id", linkController.getAllLinkById);
router.put("/:id", protect, linkController.updateLinkById);
router.delete("/:id", protect, linkController.deleteLinkById);

//Routes commentairs
router.get("/:id/comments", getCommentsForLink);
router.post("/:id/comments", protect, createComment);

module.exports = router;
