"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// rest of the code remains same
const app = express_1.default();
const PORT = 8000;
app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.get('/restservices/reai/v1/labelStudioService/images/next', (req, res) => {
    res.json({
        name: "fredy",
        email: 'fredywhatley@fgasdf.com'
    });
});
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
