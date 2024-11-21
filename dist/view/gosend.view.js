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
Object.defineProperty(exports, "__esModule", { value: true });
var generatorInvoice_1 = require("../util/generatorInvoice");
var scanner_1 = require("../util/scanner");
var SendView = /** @class */ (function () {
    function SendView(mainView, driverService, sendService, historyList) {
        this.mainView = mainView;
        this.driverService = driverService;
        this.sendService = sendService;
        this.historyList = historyList;
    }
    SendView.prototype.show = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sender, _a, reciever, _b, from, _c, to, _d, item, _e, weight, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        console.log('=============================');
                        console.log('Send');
                        console.log('=============================');
                        _a = String;
                        return [4 /*yield*/, (0, scanner_1.default)("sender: ")];
                    case 1:
                        sender = _a.apply(void 0, [_g.sent()]);
                        _b = String;
                        return [4 /*yield*/, (0, scanner_1.default)("reciever: ")];
                    case 2:
                        reciever = _b.apply(void 0, [_g.sent()]);
                        _c = String;
                        return [4 /*yield*/, (0, scanner_1.default)("from: ")];
                    case 3:
                        from = _c.apply(void 0, [_g.sent()]);
                        _d = String;
                        return [4 /*yield*/, (0, scanner_1.default)("to: ")];
                    case 4:
                        to = _d.apply(void 0, [_g.sent()]);
                        _e = String;
                        return [4 /*yield*/, (0, scanner_1.default)("item: ")];
                    case 5:
                        item = _e.apply(void 0, [_g.sent()]);
                        _f = Number;
                        return [4 /*yield*/, (0, scanner_1.scannerNum)("weight(/kg): ")];
                    case 6:
                        weight = _f.apply(void 0, [_g.sent()]);
                        this.askToDriver(sender, reciever, from, to, item, weight);
                        return [2 /*return*/];
                }
            });
        });
    };
    SendView.prototype.askToDriver = function (sender, reciever, from, to, item, weight) {
        return __awaiter(this, void 0, void 0, function () {
            var option, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('----------------------------');
                        console.log('Order Now ?');
                        _a = Number;
                        return [4 /*yield*/, (0, scanner_1.default)("1.Yes\n2.Cancel\nInput: ")];
                    case 1:
                        option = _a.apply(void 0, [_b.sent()]);
                        if (option == 1) {
                            this.detailOrder(sender, reciever, from, to, item, weight);
                        }
                        else if (option == 2) {
                            this.mainView.show();
                        }
                        else {
                            console.log("Invalid input");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SendView.prototype.detailOrder = function (sender, reciever, from, to, item, weight) {
        return __awaiter(this, void 0, void 0, function () {
            var driver, price, invoice, type, history;
            return __generator(this, function (_a) {
                driver = this.driverService.findDriver();
                price = this.sendService.calculatePrice(from, to, weight);
                invoice = "SEND-" + (0, generatorInvoice_1.default)();
                type = "SEND";
                history = {
                    invoice: invoice,
                    type: type,
                    total: price
                };
                this.historyList.push(history);
                console.log('----------------------------');
                console.log('Detail Order');
                console.log('----------------------------');
                console.log("Invoice: ".concat(invoice));
                console.log("Driver: ".concat(driver.name));
                console.log("Plat Number: ".concat(driver.platNumber));
                console.log("Sender: ".concat(sender));
                console.log("Revciever: ".concat(reciever));
                console.log("Item: ".concat(item));
                console.log("Weight: ".concat(weight));
                console.log("Price: Rp. ".concat(price));
                console.log("Type: ".concat(type));
                console.log("From: ".concat(from));
                console.log("To: ".concat(to));
                console.log('----------------------------');
                this.mainView.show();
                return [2 /*return*/];
            });
        });
    };
    return SendView;
}());
exports.default = SendView;
