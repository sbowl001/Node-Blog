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

router.post("/", (req, res) => {
  const {text, userId} = req.body;
  const newPost = {text, userId};
  if (newPost.userId === undefined || !(typeof userId === 'number')) { //not fully working - userid is not constrained 
    
    res.status(400).json({
      errorMessage: "User id does not exist or is not a number. "
    });
  }
  postDb
    .insert(newPost)
    .then(post => {
      res.status(201).json(post);
    })
    .catch(err => {
      res.status(500).json({
        error: "There was an error while saving the post to the database"
      });
    });
});

 
module.exports = router;