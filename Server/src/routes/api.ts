import express from 'express'
var router = express.Router();
import { MongoHelper } from '../db/DataBase'

const getDbInstance = () =>{
    return MongoHelper.client.db('test');
}

router.get('/', (req,res) =>{
    res.send("api");
})
.get('/check', (req,res)=>{
    let data = { aa : "aa"};
    res.send(data);
})

.get('/product', (req,res)=>{
    const db : any = getDbInstance();
    const results = db.collection("product").find({}).toArray((err, items) =>{
        if (err) {
            res.send("error");
        }
        else{
            res.json(items);
        }
    })
})
.post('/saveProduct', async (req,res)=>{
    let product = req.body.data;

    const db : any = getDbInstance();
    await db.collection("product").insert(product);
    res.json(product);
})

.post('/saveProducts', async (req,res)=>{
    let products = req.body.data;
    const db : any = getDbInstance();
    await db.collection("product").insert(products);
    res.json(products);
})
module.exports = router;