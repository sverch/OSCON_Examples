#!/bin/bash

# Start two shards (normal mongods)
mongod --shardsvr --port 30001 --dbpath /Users/sv/OSCON/demo7/shard1/data --logpath /Users/sv/OSCON/demo7/shard1/mongod.log --fork
mongod --shardsvr --port 30002 --dbpath /Users/sv/OSCON/demo7/shard2/data --logpath /Users/sv/OSCON/demo7/shard2/mongod.log --fork

# Start a config server (normal mongod with --configsvr option)
mongod --configsvr --port 20000 --dbpath /Users/sv/OSCON/demo7/config/data --logpath /Users/sv/OSCON/demo7/config/mongod.log --fork
sleep 1

# Start a mongos router
mongos --configdb localhost:20000 --chunkSize 1 --logpath /Users/sv/OSCON/demo7/mongos/mongod.log --fork
