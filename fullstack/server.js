const express= require("express")
const cors= require("cors")
const app=express()
app.use(cors());

var server=app.listen(4000, function(){
var host=server.address().address
var port=server.address().port
})

app.get('/',function(req,res){
    res.send("start server")
    })

    app.get('/getData',function(req,res){
        res.json({name:"ahmad" , age:"22", major:"Electrical/Computer Engineering"})
    })
    

    app.get('/getPrice',function(req,res){
            res.json({price1:"20jds", price2:"40jds", price3:"33jds", price4:"56jds"})
    })