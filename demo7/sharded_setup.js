// Add our shards
sh.addShard("localhost:30001")
sh.addShard("localhost:30002")

// Go into the config database and list the shards we added
db.getSiblingDB("config").shards.find().pretty()

// Enable sharding on 'shardeddb'
sh.enableSharding("shardeddb");

// Shard the collection 'shardeddb.shardedcoll' on the key 'shardkey' ascending
sh.shardCollection("shardeddb.shardedcoll", { 'shardkey' : 1 });

// List all the chunks in our newly sharded collection
db.getSiblingDB("config").chunks.find().pretty()

// Insert some data
for (var i = 0; i < 10000; i++) {
    db.shardedcoll.insert({ 'shardkey' : i });
}

// List all the chunks to look for splits
db.getSiblingDB("config").chunks.find().pretty()
