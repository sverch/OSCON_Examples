#!/bin/bash

mongod --replSet myReplSet --port 30001 --dbpath /Users/sv/OSCON/demo6/rs1/data --logpath /Users/sv/OSCON/demo6/rs1/mongod.log --fork
mongod --replSet myReplSet --port 30002 --dbpath /Users/sv/OSCON/demo6/rs2/data --logpath /Users/sv/OSCON/demo6/rs2/mongod.log --fork
mongod --replSet myReplSet --port 30003 --dbpath /Users/sv/OSCON/demo6/rs3/data --logpath /Users/sv/OSCON/demo6/rs3/mongod.log --fork
