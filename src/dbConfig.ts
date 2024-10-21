const {MongoClient} = require('mongodb')
import 'dotenv/config'

const client = new MongoClient(process.env.CONNECTION_STRING)


const connectToMongo = async () => {
    try {
        await client.connect()
        const db = client.db('MongoDocker')
        const collection = db.collection('dogs')
        await collection.insertOne({dogName: 'Sinwar'})
        console.log("successfully connected to MongDB =)")
    } catch (err) {
        console.log(err)
    }
}


module.exports = {
    connectToMongo
}