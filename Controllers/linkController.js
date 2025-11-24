// @ts-nocheck
const Link = require("../Models/Link");
const Comment = require("../Models/Comment");

// GET

exports.getAllLinks = async (req, res) => {
  try {
    const links = await Link.find()
      .populate("user", "email")
      .sort({ createdAt: -1 });
    res.status(200).json(links);
  } catch (error) {
    res.status(500).json({ message: `Erreur serveur : ${error.message}` });
  }
};

// GET /:id

exports.getAllLinkById = async (req, res) => {
  try {
    const link = await Link.findById(req.params.id).populate("user", "email");
    if (!link) {
      return res.status(404).json({ message: "Link not found" });
    }
    return res.status(200).json(link);
  } catch (error) {
    res.status(500).json({ message: `Erreur serveur : ${error.message}` });
  }
};

// POST = Creation d'un link
exports.createLink = async (req, res) => {
  try {
    const newLink = await Link.create({
      /* title: title,
          url: url,
          description: description, */
      ...req.body,
      user: req.user.id,
    });
    res.status(201).json(newLink);
  } catch (error) {
    res.status(400).json({ message: `Erreur validation : ${error.message}` });
  }
};

// PUT = Modification d'un link /:id
exports.updateLinkById = async (req, res) => {
  try {
    const updateLink = await Link.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updateLink) {
      return res.status(404).json({ message: "Link not found" });
    }
    return res.status(200).json(updateLink);
  } catch (error) {
    res.status(400).json({ message: `Erreur validation : ${error.message}` });
  }
};

// DELETE /:id
exports.deleteLinkById = async (req, res) => {
  try {
    const link = await Link.findByIdAndDelete(req.params.id);
    if (!link) {
      return res.status(404).json({ message: "Link not found" });
    }
    await Comment.deleteMany({ link: req.params.id });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: `Erreur serveur : ${error.message}` });
  }
};
