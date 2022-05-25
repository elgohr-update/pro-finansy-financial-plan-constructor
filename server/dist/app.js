"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./config/routes"));
const modules_1 = __importDefault(require("./config/modules"));
const processes_1 = __importDefault(require("./config/processes"));
const database_1 = __importDefault(require("./config/database"));
const server_1 = require("./config/server");
const app = (0, express_1.default)();
(0, modules_1.default)(app, express_1.default);
(0, processes_1.default)();
(0, database_1.default)();
(0, routes_1.default)(app);
if (process.env.NODE_ENV === 'production') {
    (0, server_1.liveMServer)(app);
}
else {
    (0, server_1.devMServer)(app);
}
app.use(express_1.default.static(__dirname + '/public'));
app.get(/.*/, (_req, res) => res.sendFile(__dirname + '/public/index.html'));
process.on('uncaughtException', function (err) {
    console.error(err);
    console.log("Node NOT Exiting...");
});
//# sourceMappingURL=app.js.map