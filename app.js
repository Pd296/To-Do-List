
const express = require('express');
const bodyParser= require('body-parser');
const date=require(__dirname+"/date.js");

const app=express();
app.use(bodyParser.urlencoded ({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');

let items=["wake up","brush"]
let workItems=[]


app.get("/",function(req,res){
    
    let day=date.getDay();
    console.log(date);
    res.render("list",{ListTitle : day,newItems:items});
})

app.post("/",function(req,res){
  let item=req.body.addItem;
  console.log(req.body)
  if(req.body.list==="Work"){
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
 
  }
  
})

app.get("/work",function(req,res){
    res.render("list",{ ListTitle : "Work List",newItems:workItems})
})

app.post("/work",function(req,res){
     let item=req.body.addItem;
     workItems.push(item);
     res.redirect("/work"); 
})

app.get("/about",function(req,res){
    res.render("about");
})


app.listen(3000,function(){
    console.log("Server is listening on port 3000.");
})

