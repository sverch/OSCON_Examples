var conf = {
    _id : "myReplSet",
    members : [
        { '_id' : 0, 'host' : 'localhost:30001', 'priority' : 2 },
        { '_id' : 1, 'host' : 'localhost:30002' },
        { '_id' : 2, 'host' : 'localhost:30003', 'arbiterOnly' : true }
    ]
}

rs.initiate(conf)
