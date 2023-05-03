import express from 'express';
import cors from "cors";
import {db,connectToDB} from './db.js';

const app=express()
app.use(express.json())
app.use(cors())

app.get('/insert',async(req,res)=>{
    const details=await db.collection("user_data").insertOne({"name":"ganesh","password":"password"});
    res.json(details)
})
connectToDB(()=>{
    app.listen(8000,()=>{
        console.log('server Running at port 8000')
    })
}
)