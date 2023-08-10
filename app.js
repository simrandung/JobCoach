const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
const Detail=require("./models/Detail");
const slider = require("./models/slider");
const about = require("./models/About");
const login = require("./models/login");
const bodyParser = require("body-parser");
const app = express();
const routes = require('./routes/main');
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use('/static',express.static("public"));
app.use('',routes);

app.use(express.urlencoded({extended:false}));
//template engine

app.set('view engine', 'hbs');
app.set("views","views");
hbs.registerPartials("views/partials");


//db connections
function connect() {
    return new Promise((resolve, reject) => {
  
         mongoose.connect(
            `mongodb+srv://simranwebsite:fullstackwebsite@cluster0.dlwzxjc.mongodb.net/`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }).then(()=>{
                console.log('Connected to database');
                resolve();
            }).catch((err)=>{
                console.log('Error connecting to database'+ err);
                reject(err);
            });
  
    });
  }
  
async function main(){
  await connect().then(async () => {
    console.log("DONE");
}
)}
main();

app.listen(process.env.PORT | 5556, ()=>{
    console.log("Server Started");
});