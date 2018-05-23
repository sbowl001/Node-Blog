// get(): calling find returns a promise that resolves to an array of all the resources contained in the database.
// If you pass an id to this method it will return the resource with that id if found.

// insert(): calling insert passing it a resource object will add it to the database and return an object with the id 
//of the inserted resource. The object looks like this: { id: 123 }.

// update(): accepts two arguments, the first is the id of the resource to update and the second is an object with the changes to apply. It returns the count of updated records. If the count is 1 it means the record was updated correctly.
// remove(): the remove method accepts an id as it's first parameter and, upon successfully deleting the resource from the database, returns the number of records deleted.
// The postDb.js helper includes an extra method called getPostTags() that when passed a post id as it's only argument, returns a list of all the tags for the post.

// The userDb.js helper includes an extra method called getUserPosts() that when passed a user id as it's only argument, returns a list of all the posts for the user.

const express = require('express');

const userRouter = require('./routes/userRoutes');
const postRouter = require('./routes/postRoutes');
const tagRouter = require('./routes/tagRoutes');


const server = express();

server.listen(5000, ()=> {
    console.log('App running on port 5000')
})
server.use(express.json());

server.get('/', (req, res) => {
    console.log("get Request"); 
    res.send("Got request")
})

server.use("/api/users", userRouter);
server.use("/api/posts", postRouter);
server.use("/api/tags", tagRouter);
// Users
// id: number, no need to provide it when creating users, the database will generate it.
// name: up to 128 characters long, required.
// Posts
// id: number, no need to provide it when creating posts, the database will automatically generate it.
// userId: number, required, must be the id of an existing user.
// text: string, no size limit, required.
// Tags
// id: number, no need to provide it when creating tags, the database will generate it.
// tag: string up to 80 characters long, must be a unique value.