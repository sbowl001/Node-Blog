const express = require('express');

const router = express.Router();

const tagDb = require("../data/helpers/tagDb");

router.get("/", (req, res) => {
  tagDb
    .get()
    .then(tags => res.status(200).json(tags))
    .catch(err =>
      res.status(500).json({
        error: "There was an error while getting the post from the database"
      })
    );
}); 


router.get("/:id", (req, res) => {
  const tagId = req.params.id;
  tagDb
    .get(tagId)
    .then(tag => res.status(200).json({ tag }))
    .catch(err =>
      res
        .status(404)
        .json({ message: "The tag with the specified ID does not exist." })
    );
});

module.exports = router; 