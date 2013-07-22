// This script will run against whatever database the mongo shell running it is connected to

// The documents we are working with
var post = {
    'title' : 'First Post',
    'body' : 'I just wanted to be first',
    'comments' : [
        {
            'id' : 'comment236',
            'body' : 'I love commenting on things'
        },
        {
            'id' : 'comment120',
            'body' : 'Oh wow, comments!'
        }
    ]
}

// Insert our post
db.posts.insert(post);

// Take 1:

// Create our BAD index
db.posts.ensureIndex({ 'comments' : 1 });

// This is the type of query that we want to use the index
db.posts.find({ 'comments.id' : 'comment120' });

// Take 2:

// Create two indexes
db.posts.ensureIndex({ 'comments.id' : 1 });
db.posts.ensureIndex({ 'title' : 1 });

// The type of query we expect to use both indexes
db.posts.find({ 'title' : 'First Post', 'comments.id' : 'comment236' })

// Take 3:

// Create a compound index
db.posts.ensureIndex({ 'comments.id' : 1, 'title' : 1 });

// Query on title we expect to use the index
db.posts.find({ 'title' : 'First Post' })

// Take 4:

// Create an index on body
db.posts.ensureIndex({ 'body' : 1 });

// The regex search we expect to use this index
db.posts.find({ 'body' : /first/i });

// Take 5:

// Mash the keyboard in frustration
db.posts.ensureIndex({ 'comments' : 1 });
db.posts.ensureIndex({ 'comments.id' : 1 });
db.posts.ensureIndex({ 'comments.body' : 1 });
db.posts.ensureIndex({ 'comments' : 1, 'comments.body' : 1 });
db.posts.ensureIndex({ 'comments' : 1, 'comments.id' : 1 });
db.posts.ensureIndex({ 'comments.body' : 1, 'comments' : 1 });
db.posts.ensureIndex({ 'comments.id' : 1, 'comments' : 1 });
db.posts.ensureIndex({ 'comments.body' : 1, 'comments.id' : 1 });
db.posts.ensureIndex({ 'comments.id' : 1, 'comments.body' : 1 });

// Our writes look like this
db.posts.update({ 'title' : 'First Post' }, { '$push' : { 'comments' : { 'id' : 'comment1337', 'body' : 'U mad bro?' } } })

// Drop all our bad indexes
db.posts.dropIndex({ 'comments' : 1 });
db.posts.dropIndex({ 'comments.id' : 1 });
db.posts.dropIndex({ 'title' : 1 });
db.posts.dropIndex({ 'comments.id' : 1, 'title' : 1 });
db.posts.dropIndex({ 'body' : 1 });
db.posts.dropIndex({ 'comments' : 1 });
db.posts.dropIndex({ 'comments.id' : 1 });
db.posts.dropIndex({ 'comments.body' : 1 });
db.posts.dropIndex({ 'comments' : 1, 'comments.body' : 1 });
db.posts.dropIndex({ 'comments' : 1, 'comments.id' : 1 });
db.posts.dropIndex({ 'comments.body' : 1, 'comments' : 1 });
db.posts.dropIndex({ 'comments.id' : 1, 'comments' : 1 });
db.posts.dropIndex({ 'comments.body' : 1, 'comments.id' : 1 });
db.posts.dropIndex({ 'comments.id' : 1, 'comments.body' : 1 });
