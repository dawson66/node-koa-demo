const { MongoClient } = require('mongodb');

const dbUrl = "mongodb://localhost:27017/";

const dbName = "Dawson";

const client = new MongoClient(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true });

async function run() {
    try {
        await client.connect();
        const database = client.db(dbName);
        const students = database.collection('students');
        // const one = await students.findOne();
        // const count = await students.find().count(true, { skip: 1 });
        // const result = await students.find().toArray();

        // console.log('count:', count);
        // console.log('findOne:', one);
        // console.log('all data toArray:', result);
        return students;
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);