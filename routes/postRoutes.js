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

router.get("/:id", (req, res) => {
  const postId = req.params.id;
  postDb
    .get(postId)
    .then(post => res.status(200).json({ post }))
    .catch(err =>
      res
        .status(404)
        .json({ message: "The post with the specified ID does not exist." })
    );
});

module.exports = router;