const mongoose = require("mongoose") 
//sever connect to database use a package i.e, mongoose

async function connectDB() {
  await mongoose.connect(process.env.MONGO_URL) 
  console.log("connected to db")
}

module.exports = connectDB