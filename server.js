// const express = require('express')
// var cors = require('cors')
// const app = express()
// app.use(cors())

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)

const express = require("express");
var cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3030;
app.use(cors());

 app.get('/',  (req, res) =>{
  res.send('Hello World')
 })

 app.get('/students', (req, res)=> {
  let data = [{id:54,name:'mike'},{id:120,name:'Tony'}]
  res.send(data)
 })

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});