// This script will run against whatever database the mongo shell running it is connected to

// Insert some documents
for (var i = 0; i < 100; i++) {
    db.demo2.insert({ 'x' : i });
}

// Find documents with 'x' between 20 and 40
db.demo2.find({ 'x' : { '$gt' : 20, '$lt' : 40 } });

// Find documents with 'x' in the set [ 13, 42, 71 ]
db.demo2.find({ 'x' : { '$in' : [ 13, 42, 71 ] } });

// Add 100 to the x value of all documents in the collection
db.demo2.update({}, { '$inc' : { 'x' : 100 } }, { 'multi' : true });

// Set 'y' to true on all documents with 'x' greater than 150
db.demo2.update({ 'x' : { '$gt' : 150 } }, { '$set' : { 'y' : true } }, { 'multi' : true });
