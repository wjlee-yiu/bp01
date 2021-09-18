const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://wjlee:cs1134@bp01.crufi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => console.log(`Mongo DB Connected...`))
.catch(err => console.log(err)); 

app.get('/', (req, res) => res.send('Hello, World, Uhaha~~'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// mongodb+srv://wjlee:<password>@bp01.crufi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// mongodb+srv://wjlee:<password>@bp01.crufi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority