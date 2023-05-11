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

app.post('/reviews/:text/:username',async(req,res)=>{
    const details=await db.collection("reviews").insertOne(
        {
            text:req.params.text,
            username:req.params.username
        });
    res.json(details)
})

app.get('/reviews/',async(req,res)=>{
    const details=await db.collection("reviews").find({}).toArray()
    res.json(details);
})
app.post('/booking/:name/:age/:email/:mobile/:aadhar/:pickup/:returndate',async(req,res)=>{
    const details=await db.collection("booking_details").insertOne(
        {
            name:req.params.name,
            age:req.params.age,
            email:req.params.email,
            mobile:req.params.mobile,
            aadhar:req.params.aaadhar,
            pickup:req.params.pickup,
            returndate:req.params.returndate
        });
        res.json(details)
})

app.get('/getdata',async(req,res)=>{
    const data=await db.collection('booking_details').find({}).sort({_id:-1}).limit(1).toArray()
    res.send(data)
})

app.get('/delete',async(req,res)=>{
    const del=await db.collection('booking_details').deleteMany()
    res.json(del)
})

connectToDB(()=>{
    app.listen(8000,()=>{
        console.log('server Running at port 8000')
    })
}
)