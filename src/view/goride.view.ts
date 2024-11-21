import Driver from "../model/driver.model";
import History from "../model/history.model";
import generateInvoice from "../util/generatorInvoice";
import scanner from "../util/scanner";
import MainView from "./main.view";

class RideView {
    constructor(
        private riderService: RideService,
        private driverService: DriverService,
        private mainView: MainView,
        private historyList: History[]
    ) {}
    async show() {
        console.log('=============================');
        console.log('Ride');
        console.log('=============================');

        const from: string = String(await scanner("From: "));
        const to: string = String(await scanner("to: "));

        this.askToDriver(from, to)
    }

    private async askToDriver(from: string, to: string) {
        console.log('----------------------------');
        console.log('Order Now ?');
        const option: number = Number(await scanner("1.Yes\n2.Cancel\nInput: "));
        if (option == 1) {
            this.detailOrder(from, to);
        } else if (option == 2) {
            this.mainView.show();
        } else {
            console.log("Invalid input");
        }
    }

    private async detailOrder(from: string, to: string) {
        let driver: Driver = this.driverService.findDriver();
        let price: number = this.riderService.calculatepRrice(from, to);
        let invoice: string = "RIDE-" + generateInvoice();
        let type: string = "RIDE";

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
        console.log(`Price: Rp. ${price}`);
        console.log(`Type: ${type}`);
        console.log(`From: ${from}`);
        console.log(`To: ${to}`);
        console.log('----------------------------');

        this.mainView.show();

    }
}

export default RideView;