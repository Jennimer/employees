const express = require('express');
const bodyParser = require('body-parser');
const routes = require("./routes")

const app = express();
app.use(bodyParser.json());
app.use('/', routes);
 
//MongoDB connection
const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://jennimerisalo2:nqbyb9TErC1Inal0@orderdatabase.jt3vaxt.mongodb.net/employeesdb?retryWrites=true&w=majority';
mongoose.connect(mongoURL, { useNewUrlParser: true , useUnifiedTopology: true})
.then(() => {
    console.log('connected to MongoDB')
    app.listen(process.env.PORT || 3000, ()=> {
        console.log(`Node API app is running on port 3000`)
    });
}).catch((error) => {
    console.log(error)
})
