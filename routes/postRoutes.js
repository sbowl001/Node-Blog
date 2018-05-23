const express = require('express'); 

const router = express.Router(); 
const postDb = require("../data/helpers/postDb");

router.get("/", (req, res) => {
  postDb
    .get()
    .then(posts => res.status(200).json(posts))
    .catch(err =>
      res.status(500).json({
        error: "There was an error while getting the post from the database"
      })
    );
}); 

module.exports = router;