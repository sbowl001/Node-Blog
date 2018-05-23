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

module.exports = router; 