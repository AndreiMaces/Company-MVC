const express = require("express")
const ejs = require("ejs")
const PORT = 3000
const mongoose = require("mongoose")
const ejsMate = require("ejs-mate")
const productRoutes = require('./routes/productRoutes.js')
const productModel = require('./models/productModel.js');
const passport = require("passport")



const app = express()
app.engine('ejs' , ejsMate);
app.set("view engine" , "ejs")
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render("index")
})



app.get("/product/all",(req,res)=>{
    res.render('../views/product/products')
})

app.get("/product/:id",(req,res)=>{
    res.render('../views/product/product.ejs')
})

app.get("/product/post",(req,res)=>{
    res.render("../views/product/productForm.ejs");
})

app.get("/login",(req,res)=>{
    res.render("../views/partials/login.ejs");
})




app.use('*' , (req , res) => {
    res.send("404 not found")
})

app.listen(PORT, ()=>{
    console.log("Listening on PORT 3000")
})