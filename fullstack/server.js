const express= require("express")
const cors= require("cors")
const app=express()
app.use(cors());

var server=app.listen(4000, function(){
var host=server.address().address
var port=server.address().port
})

const {MongoClient}=require('mongodb')
var connection="mongodb+srv://ahmadhendawi:B2yoNUb5pDl7nGGM@cluster0.uswjlnp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client= new MongoClient(connection)

const mydb= client.db('test')

const collection= mydb.collection('users')

app.get("/users", async(req,res)=>{
    const users=await collection.find({}).toArray()
    res.send(users)
})

app.get("/user/:Username", async(req,res)=>{
    const users= await collection.findOne({'Username':req.params.Username})
    res.send(users)
}

)

app.get('/',function(req,res){
    res.send("start server")
    })

    app.get('/getData',function(req,res){
        res.json({name:"ahmad" , age:"22", major:"Electrical/Computer Engineering"})
    })
    

    app.get('/getPrice',function(req,res){
            res.json({price1:"20jds", price2:"40jds", price3:"33jds", price4:"56jds"})
    })