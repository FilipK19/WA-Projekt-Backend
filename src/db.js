import mongo from "mongodb";

console.log("OK")

// zamijeni sa svojim connection stringom
let connection_string = "mongodb+srv://admin:1234@cluster0.1cbo1.mongodb.net/?retryWrites=true&w=majority";
let client = new mongo.MongoClient(connection_string, {
 useNewUrlParser: true,
 useUnifiedTopology: true
});

let db = null;

function isConnected() {
    return !!client && !!client.topology && client.topology.isConnected();
}

export default async () => {
    if (!db || !isConnected()) {
        await client.connect();
        db = client.db("test");
        console.log("Connected OK");
    }
    return db;
};