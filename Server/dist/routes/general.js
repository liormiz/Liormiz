"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router
    // Add a binding to handle '/test'
    .get('/', (req, res) => {
    res.send('The sedulous hyena ate the antelope!');
})
    // Import my automated routes into the path '/tests/automated'
    // This works because we're already within the '/tests' route so we're simply appending more routes to the '/tests' endpoint
    .get('/check', (req, res) => {
    res.send("checked");
});
module.exports = router;
//# sourceMappingURL=general.js.map