var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var db = require("./pg");
var express = require('express');
var app = express.Router();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
function createid(country) {
    return __awaiter(this, void 0, void 0, function () {
        var abv, countryMap, value, Query, result, count;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    abv = "";
                    countryMap = new Map();
                    countryMap.set("Japan", "JP");
                    countryMap.set("Korea", "KR");
                    countryMap.set("Taiwan", "TW");
                    abv = countryMap.get(country);
                    value = [country];
                    Query = "SELECT count(*) from esims WHERE country = $1";
                    return [4 /*yield*/, db.query(Query, value)];
                case 1:
                    result = _a.sent();
                    count = parseInt(result.rows[0].count);
                    return [2 /*return*/, abv + String(count + 1)];
            }
        });
    });
}
app.post("/", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var _a, username, country, data, duration, status, data_remaining, expires_at, planid, insertQuery, values, result, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, username = _a.username, country = _a.country, data = _a.data, duration = _a.duration, status = _a.status, data_remaining = _a.data_remaining, expires_at = _a.expires_at;
                return [4 /*yield*/, createid(country)];
            case 1:
                planid = _b.sent();
                insertQuery = 'INSERT INTO esims (userid, planid, country, data, duration, status, data_remaining, expires_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
                values = [username, planid, country, data, duration, status, data_remaining, expires_at];
                _b.label = 2;
            case 2:
                _b.trys.push([2, 4, , 5]);
                return [4 /*yield*/, db.query(insertQuery, values)];
            case 3:
                result = _b.sent();
                console.log('Row inserted:', result.rows[0]);
                return [2 /*return*/, res.status(201).json({ message: "new plans added to database" })];
            case 4:
                err_1 = _b.sent();
                console.error(err_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
module.exports = app;
