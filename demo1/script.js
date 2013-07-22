// This script will run against whatever database the mongo shell running it is connected to

// Insert a document
db.demo1.insert({ 'x' : 1 });

// Find one document
db.demo1.findOne();

// Insert another document with a different structure
db.demo1.insert({ 'y' : 1 });

// Find all documents in our collection
db.demo1.find();

// Find just the first document
db.demo1.find({ 'x' : 1 });

// Update our second document
db.demo1.update({ 'y' : 1 }, { 'y' : 1, 'z' : 1 });

// Remove our second document
db.demo1.remove({ 'z' : 1 });
