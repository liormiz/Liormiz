"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongo = __importStar(require("mongodb"));
class MongoHelper {
    constructor() {
        this.port = 27017;
        this.host = "localhost";
        this.name = "test";
    }
    static connect(url) {
        return new Promise((resolve, reject) => {
            mongo.MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
                if (err) {
                    reject(err);
                }
                else {
                    MongoHelper.client = client;
                    resolve(client);
                }
            });
        });
    }
    disconnect() {
        MongoHelper.client.close();
    }
}
exports.MongoHelper = MongoHelper;
//# sourceMappingURL=DataBase.js.map