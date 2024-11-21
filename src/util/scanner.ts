import * as readline from "readline";

const createInterface = readline.createInterface({
    input: process.stdin, output: process.stdout
})

function scanner(question: string): Promise<string> {
    return new Promise((resolve) => {
        createInterface.question(question, resolve);
    });
}

function scannerNumFunc(
    question: string,
    resolve: (param: string) => void,
    min?: number, max?: number) {
    createInterface.question(question, answer => {
        const finalNum = Number(answer)
        if (!isNaN(finalNum)) {
            if (min !== undefined && max !== undefined) {
                if (finalNum >= min && finalNum <= max) {
                    resolve(answer);
                } else {
                    scannerNumFunc(question, resolve, min, max);
                }
            } else {
                resolve(answer);
            }
        } else {
            scannerNumFunc(question, resolve, min, max);
        }
    });
}

export function scannerNum(question: string, min?: number, max?: number): Promise<string> {
    return new Promise((resolve) => {
        scannerNumFunc(question, resolve, min, max)
    });
}

export function closeScanner() {
    createInterface.close();
}
export default scanner