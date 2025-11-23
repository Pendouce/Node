const express = require("express");
const router = express.Router();
const linkController = require("../Controllers/linkController");

/* Route crud pour les liens
  CRUD = Create, Read, Update, Delete
*/

router.get("/", linkController.getAlllinks);
router.post("/", linkController.createLink);
router.get("/:id", linkController.getAlllinkById);
router.put("/:id", linkController.updateLinkById);
router.delete("/:id", linkController.deleteLinkById);

module.exports = router;
