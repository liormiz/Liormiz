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
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const DataBase_1 = require("./db/DataBase");
const routes = require('./routes/routes');
const app = express_1.default();
app.use(body_parser_1.default.json());
app.use(express_1.default.static(__dirname + "/src"));
app.use(body_parser_1.default.urlencoded({
    extended: false
}));
// init cors
app.use(cors_1.default());
// config routesaa
app.use('/', routes);
const port = 3000;
app.listen(port, (err) => __awaiter(void 0, void 0, void 0, function* () {
    if (err) {
        return console.error(err);
    }
    console.log(`server is listening on ${port}`);
    try {
        yield DataBase_1.MongoHelper.connect('mongodb://localhost:27017');
        console.log("connected to db");
    }
    catch (err) {
        console.log("cannot connect to db");
    }
}));
//# sourceMappingURL=app.js.map