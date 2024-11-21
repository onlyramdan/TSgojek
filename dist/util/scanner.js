"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scannerNum = scannerNum;
exports.closeScanner = closeScanner;
var readline = require("readline");
var createInterface = readline.createInterface({
    input: process.stdin, output: process.stdout
});
function scanner(question) {
    return new Promise(function (resolve) {
        createInterface.question(question, resolve);
    });
}
function scannerNumFunc(question, resolve, min, max) {
    createInterface.question(question, function (answer) {
        var finalNum = Number(answer);
        if (!isNaN(finalNum)) {
            if (min !== undefined && max !== undefined) {
                if (finalNum >= min && finalNum <= max) {
                    resolve(answer);
                }
                else {
                    scannerNumFunc(question, resolve, min, max);
                }
            }
            else {
                resolve(answer);
            }
        }
        else {
            scannerNumFunc(question, resolve, min, max);
        }
    });
}
function scannerNum(question, min, max) {
    return new Promise(function (resolve) {
        scannerNumFunc(question, resolve, min, max);
    });
}
function closeScanner() {
    createInterface.close();
}
exports.default = scanner;
