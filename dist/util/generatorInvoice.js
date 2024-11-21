"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateInvoice() {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var charactersLength = characters.length;
    var counter = 0;
    while (counter < 2) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}
exports.default = generateInvoice;
