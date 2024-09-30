import dotenv from "dotenv";
import connectDB from "./db/db.js"
import app from "./app.js"

dotenv.config({
  path: './env'
});

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000,()=>{
    console.log("connected with the server"); 
  })
})
.catch((err)=>{
  console.log("MONGO DB");
  
})