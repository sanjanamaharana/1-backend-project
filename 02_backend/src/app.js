const express = require('express');
const multer = require('multer'); //middleware due to photo/file  // not text 
const uploadFile = require("./services/storage.service")
// const postModel = require("./models/post.model")
const postModel = require("./models/post.model")
const cors = require('cors');



const app = express();
app.use(cors())
app.use(express.json()); //middleware

const upload = multer({storage:multer.memoryStorage()}) // add multer storage 

app.post('/create-post',upload.single("image"), async (req,res) => {
  // console.log(req.body) //[Object: null prototype] { caption: 'test_ride' }
  // console.log(req.file) //{  fieldname: 'image',  originalname: 'IMG_20251223_123455.jpg',  encoding: '7bit',  mimetype: 'image/jpeg',  buffer: <Buffer ff d8 ff e1 c9 a6 45 78 69 66 00 00 49 49 2a 00 08 00 00 00 14 00 00 01 04 00 01 00 00 00 f4 0b 00 00 01 01 04 00 01 00 00 00 f0 0f 00 00 0e 01 02 00 ... 3696215 more bytes>,  size: 3696265}

  const result = await uploadFile(req.file.buffer) // buffer is your actual file .buffer send in imagekit. imagekit gives us string
  // console.log(result)
  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption
  })
  return res.status(201).json({
    message : "post creates successfull",
    post
  })
})

app.get("/posts", async (req, res) => {
  const posts = await postModel.find()

  return res.status(200).json({
    message:"post fetched successful",
    posts
  })
})

module.exports = app
