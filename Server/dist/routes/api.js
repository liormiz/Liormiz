"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
const DataBase_1 = require("../db/DataBase");
const getDbInstance = () => {
    return DataBase_1.MongoHelper.client.db('test');
};
router.get('/', (req, res) => {
    res.send("api");
})
    .get('/check', (req, res) => {
    let data = { aa: "aa" };
    res.send(data);
})
    .get('/product', (req, res) => {
    const db = getDbInstance();
    const results = db.collection("product").find({}).toArray((err, items) => {
        if (err) {
            res.send("error");
        }
        else {
            res.json(items);
        }
    });
})
    .post('/saveProduct', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let product = req.body.data;
    const db = getDbInstance();
    yield db.collection("product").insert(product);
    res.json(product);
}))
    .post('/saveProducts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let products = req.body.data;
    const db = getDbInstance();
    yield db.collection("product").insert(products);
    res.json(products);
}));
module.exports = router;
//# sourceMappingURL=api.js.map