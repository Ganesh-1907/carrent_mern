import {MongoClient} from "mongodb";

let db; 

async function connectToDB(cb){
    const url = "mongodb+srv://bora1132004:Ganesh@cluster0.a93zhxx.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("CAR_RENT");
    cb();
}

export {db,connectToDB};