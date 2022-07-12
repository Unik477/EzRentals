import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app=express()
 app.use(express.urlencoded())
 app.use(express.json())
 app.use(cors())

 mongoose.connect('mongodb://localhost:27017/deliveryDetails', {
     useNewUrlParser: true,
     useUnifiedTopology: true
 }, ()=>{
     console.log("database connected for delivery details")
 })
 

 // delivery details backend

 const billSchema= new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    dlNumber: String,
    mobile: Number,
    address: String,
    city: String,
    state: String,
    time: String ,
    zip: Number,
    date: Date
 })
 
 const Bill= new mongoose.model("Bill",billSchema)


//routes
app.post("/Checkout", (req, res)=> {
   const{firstName,lastName,email,dlNumber,mobile,address,city,state,time,zip,date}= req.body
   const bill= new Bill({
    firstName,lastName,email,dlNumber,mobile,address,city,state,time,zip,date
   })
   bill.save(err=> {
       if(err){
           res.send(err)
       } else{
           res.send({message: "Successfully Saved"})
       }
   })
})

app.listen(9008,()=> {
    console.log("BE started at port 9008")
})



//contact us backend

// mongoose.connect("mongodb://localhost:27017/ContactUsDB2",{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }, () => {
//     console.log("Contact DB connected")
// })

const contactusSchema= new mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    altMobile: String,
    city: String,
    state: String,
    zip: String

})

const Contactus = new mongoose.model("Contactus", contactusSchema)

//routes
app.post("/contactus", (req, res)=> {
   console.log(req.body)
   const{name,email,mobile,altMobile,city,state,zip}= req.body
   const contact=new Contactus({
    name,email,mobile,altMobile,city,state,zip
   })
   contact.save(err=>{
       if (err){
           res.send(err)
       } else{
           res.send({message: "Successfully Sent to DB"})
       }
   })
})


//login register backend

// mongoose.connect('mongodb://localhost:27017/LoginRegisterDB2', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//  },() =>{
//      console.log("DB connected successfully")
//  } )

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User",userSchema)



 //routes
 app.post("/login", (req, res)=> {
   const {email, password}=req.body
   User.findOne({email:email},(err, user) =>{
       if(user){
         if(password == user.password ){
            
             res.send({message: "Logged in successfully", user: user})
             
         } else{
             res.send({message: "Password-Incorrect" })
         }
       } else{
           res.send({ message: "user-not-registered"})
       }
   })
 })



 

 app.post("/register", (req, res)=> {
   //  res.send("my API Register")
   const {name, email, password}=req.body

   User.findOne({email: email},(err, user)=>{
     if(user){
         res.send({message: "user already registered"})
     } else{
       const user = new User({
           name,
           email,
           password
       })
       user.save(err => {
           if(err){
               res.send(err)
           } else{
               res.send({ message: "successfully registered"})
           }
       }) 
     }
   })
   
})