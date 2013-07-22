#!/bin/bash

# Start a single mongod
mongod --dbpath /Users/sv/OSCON/demo1/data --logpath /Users/sv/OSCON/demo1/mongod.log --fork

# Connect using the mongo shell
mongo
