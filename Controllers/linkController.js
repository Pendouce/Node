let links = [
  {
    id: 1,
    title: "super article sur Node.js",
    url: "https://exemple.com/node",
    description: "Un bon tuto.",
  },
  {
    id: 2,
    title: "React Hooks",
    url: "https://exemple.com/react",
    description: "Tout sur les hooks.",
  },
];
let nextId = 3;

// GET

// @ts-ignore
exports.getAlllinks = (req, res) => {
  res.status(200).json(links);
};

// GET /:id

// @ts-ignore
exports.getAlllinkById = (req, res) => {
  const link = links.find((l) => l.id === parseInt(req.params.id));
  if (!link) {
    return res.status(404).json({ message: "Link not found" });
  }
  return res.status(200).json(link);
};

// POST = Creation d'un link
// @ts-ignore
exports.createLink = (req, res) => {
  const { title, url, description } = req.body;
  if (!title || !url) {
    return res.status(404).json({ message: "Title and url are required" });
  }
  const newLink = {
    id: nextId++,
    title: title,
    url: url,
    description: description,
  };
  links.push(newLink);
  res.status(201).json(newLink);
};

// PUT = Modification d'un link /:id
// @ts-ignore
exports.updateLinkById = (req, res) => {
  const link = links.find((l) => l.id === parseInt(req.params.id));
  if (!link) {
    return res.status(404).json({ message: "Link not found" });
  }
  link.title = req.body.title || link.title;
  link.title = req.body.url || link.url;
  link.title = req.body.description || link.description;

  return res.status(200).json(link);
};

// DELETE /:id
// @ts-ignore
exports.deleteLinkById = (req, res) => {
  const linkIndex = links.findIndex((l) => l.id === parseInt(req.params.id));
  if (linkIndex === -1) {
    return res.status(404).json({ message: "Link not found" });
  }
  links.splice(linkIndex, 1);
  res.status(204).send();
};
