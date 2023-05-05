import express from 'express';
import cors from "cors";
import {db,connectToDB} from './db.js';

const app=express()
app.use(express.json())
app.use(cors())

app.get('/login/:username/:password',async(req,res)=>{
    const details=await db.collection("user_data").findOne({
        username:req.params.username,
        password:req.params.password
       });
    res.json(details)
})

app.post('/Register/:username/:password/:email',async(req,res)=>{
    const details=await db.collection("user_data").insertOne({
        username:req.params.username,
        password:req.params.password,
        email:req.params.email
       });
    res.json(details)
})

// app.get('/data/:name/:car',async(req,res)=>{
//     const details=await db.collection("cars_data").findOne({
//         name:req.params.name,
//         car:req.params.car
//     })
//     res.json(details)
//     console.log(details)
// })

connectToDB(()=>{
    app.listen(8000,()=>{
        console.log('server Running at port 8000')
    })
}
)