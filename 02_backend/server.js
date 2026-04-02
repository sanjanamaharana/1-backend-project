require("dotenv").config(); // to access the private_key and .env 
const app = require("./src/app")
const connectDB = require("./src/db/db")

connectDB()

app.listen(3000, () => {
  console.log("server is running on port 3000")
})
