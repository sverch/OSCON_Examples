from pymongo import MongoClient

# Connect to MongoDB
client = MongoClient('localhost', 27017)

# Get Pymongo Database Object for 'oscon' db
db = client.test

# Insert a document
db.demo2.insert({ 'x' : 1 })

# Find one document
print db.demo2.find_one()

# Insert another document with a different structure
db.demo2.insert({ 'y' : 1 })

# Find all documents in our collection
cursor = db.demo2.find()
for doc in cursor:
    print doc

# Find just the first document
cursor = db.demo2.find({ 'x' : 1 })
for doc in cursor:
    print doc

# Update our second document
db.demo2.update({ 'y' : 1 }, { 'y' : 1, 'z' : 1 })

# Remove our second document
db.demo2.remove({ 'z' : 1 })
