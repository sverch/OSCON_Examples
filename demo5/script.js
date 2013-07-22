// This script will run against whatever database the mongo shell running it is connected to

// All in separate collections
var tag1 = { 'value' : 'cats', 'post_id' : 'postid64' }
var tag2 = { 'value' : 'kittens', 'post_id' : 'postid64' }
var post = { '_id' : 'postid64',
    'title' : 'New kitten',
    'body' : 'Look at it!  Look at it!  I want all of you to look at it!'
}
var comment1 = { 'body' : 'OMG!' }
var comment2 = { 'body' : 'I like dogs better.' }

// Insert documents
db.tags1.insert(tag1);
db.tags1.insert(tag2);
db.posts1.insert(post);
db.comments1.insert(comment1);
db.comments1.insert(comment2);

// Get the post with tags and comments
var kittenpost = db.posts1.findOne({ 'title' : 'New kitten' });
var kittentags = db.tags1.find({ 'post_id' : kittenpost._id }).toArray();
var kittencomments = db.comments1.find({ 'post_id' : kittenpost._id }).toArray();

// All in single document
post = { 'title' : 'New kitten',
    'body' : 'Look at it!  Look at it!  I want all of you to look at it!',
    'tags' : [ 'cats', 'kittens' ],
    'comments' : [ 'OMG!', 'I like dogs better.' ]
}

// Insert post
db.posts2.insert(post);

// Find post
kittenpost = db.posts2.findOne({ 'title' : 'New kitten' });
kittentags = kittenpost.tags;
kittencomments = kittenpost.comments;
