import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { MongoHelper } from './db/DataBase';
const routes = require('./routes/routes');  

const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + "/src"));

app.use(bodyParser.urlencoded({
  extended: false
}));

// init cors
app.use(cors());

// config routesaa
app.use('/', routes);

const port = 3000;

app.listen(port, async (err) => 
  {
    if (err) {
    return console.error(err);
  }
  
  console.log(`server is listening on ${port}`);

  try 
  {
    await MongoHelper.connect('mongodb://localhost:27017');
    console.log("connected to db")
  }
  catch(err){
    console.log("cannot connect to db");
  }
});