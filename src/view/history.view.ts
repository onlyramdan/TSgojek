import History from "../model/history.model";
import { scannerNum } from "../util/scanner";
import MainView from "./main.view";

class HistoryView {
    constructor(
        private mainView: MainView,
        private historyList: History[]
    ) { }
    async show() {
        console.log('=============================');
        console.log('History');
        console.log('=============================');
        if (this.historyList.length > 0) {
            console.log('No.| Invoice | Type | Total');
            this.historyList.forEach((history, i) => {
                console.log(`${i + 1}. | ${history.invoice} |  ${history.type} | ${history.total}`);
            });
        } else {
            console.log("No history found.");
        }

        const option: number = Number(await scannerNum("\n1.Back\nInput:", 1, 1));

        if (option === 1) {
            this.mainView.show();
        } else {
            console.log("Invalid input");
            this.show();
        }
    }
}
export default HistoryView;