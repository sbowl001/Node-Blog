const express = require("express");

const router = express.Router();

const userDb = require("../data/helpers/userDb");

router.get("/",  (req, res) => {
    userDb
      .get()
      .then(users => res.status(200).json(users))
      .catch(err =>
        res
          .status(500)
          .json({
            error:
              "There was an error while getting the post from the database"
          })
      );

}) 

router.get("/:id", (req, res) => {
  const userId = req.params.id;
  userDb
    .get(userId)
    .then(user => res.status(200).json({ user}))
    .catch(err =>
      res
        .status(404)
        .json({ message: "The user with the specified ID does not exist." })
    );
});

 
module.exports = router;