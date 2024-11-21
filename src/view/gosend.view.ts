import Driver from "../model/driver.model";
import History from "../model/history.model";
import SendService from "../service/send.service";
import generateInvoice from "../util/generatorInvoice";
import scanner, { scannerNum } from "../util/scanner";
import MainView from "./main.view";

class SendView {
    constructor(
        private mainView: MainView,
        private driverService: DriverService,
        private sendService: SendService,
        private historyList: History[]
    ) {
    }
    async show() {
        console.log('=============================');
        console.log('Send');
        console.log('=============================');
        
        const sender: string = String(await scanner("sender: "));
        const reciever: string = String(await scanner("reciever: "));
        const from: string = String(await scanner("from: "));
        const to: string = String(await scanner("to: "));
        const item: string = String(await scanner("item: "));
        const weight: number = Number(await scannerNum("weight(/kg): "));

        this.askToDriver(sender, reciever, from, to, item ,weight);
    }

    private async askToDriver(sender: string, reciever: string, from: string, to: string, item: string, weight: number) {
        console.log('----------------------------');
        console.log('Order Now ?');
        const option: number = Number(await scanner("1.Yes\n2.Cancel\nInput: "));
        if (option == 1) {
            this.detailOrder(sender,reciever, from, to, item ,weight);
        } else if (option == 2) {
            this.mainView.show();
        } else {
            console.log("Invalid input");
        }

    }

    private async detailOrder(sender: string, reciever: string, from: string, to: string, item: string, weight: number) {
        let driver: Driver = this.driverService.findDriver();
        let price: number = this.sendService.calculatePrice(from, to,weight);
        let invoice: string = "SEND-" + generateInvoice();
        let type: string = "SEND";

        let history: History = {
            invoice: invoice,
            type: type,
            total: price
        }

        this.historyList.push(history);

        console.log('----------------------------');
        console.log('Detail Order');
        console.log('----------------------------')
        console.log(`Invoice: ${invoice}`);
        console.log(`Driver: ${driver.name}`);
        console.log(`Plat Number: ${driver.platNumber}`);
        console.log(`Sender: ${sender}`);
        console.log(`Revciever: ${reciever}`);
        console.log(`Item: ${item}`);
        console.log(`Weight: ${weight}`);
        console.log(`Price: Rp. ${price}`);
        console.log(`Type: ${type}`);
        console.log(`From: ${from}`);
        console.log(`To: ${to}`);
        console.log('----------------------------');
        this.mainView.show();
    }

}

export default SendView;