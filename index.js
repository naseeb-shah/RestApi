const express= require('express')
const bodyParser=require("body-parser")
let cors = require("cors");
const app= express()
const multer= require('multer');
const { response } = require('express');
app.use(bodyParser.json());
app.use(express.static('public')); 
app.use('/images', express.static('images'));
app.use(cors());


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
     cb(null, './images');
  },
  filename: function (req, file, cb) {
     cb(null,file.originalname);
  }
}); 

 var upload=multer({storage: storage })

 app.post('/upload', upload.single('image'),(req, res) => {
  // res.setHeader('Access-Control-Allow-Origin: *');

    const image = req.image;
      res.send(apiResponse({message: 'File uploaded successfully.', image}));
  });
  function apiResponse(results){
    return JSON.stringify({"status": 200, "error": null, "response": results});
}


app.get('/',(req,res)=>{
  res.send("serveris started")
})

app.listen(3001,() =>{
  filepath=
    console.log('Server started on port ..3001.');
  });
