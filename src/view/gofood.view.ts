import CartFood from "../model/cart.model";
import Driver from "../model/driver.model";
import History from "../model/history.model";
import Restaurant from "../model/restoran.model";
import FoodService from "../service/food.service";
import RestaurantService from "../service/restoran.service";
import generateInvoice from "../util/generatorInvoice";
import scanner, { scannerNum } from "../util/scanner";
import MainView from "./main.view";

class FoodView {
    private cartList: CartFood[] = [];

    constructor(
        private mainView: MainView,
        private restaurantService: RestaurantService,
        private foodService: FoodService,
        private driverService: DriverService,
        private historyList: History[]
    ) { }
    async show() {
        console.log('=============================');
        console.log('Food');
        console.log('=============================');
        console.log("[List Restorant]")
        const restoranList = await this.restaurantService.findRestaurant();
        restoranList.forEach((restaurant, i) => {
            console.log(`${i + 1}. ${restaurant.restaurantName}`);
        });
        
        const option: number = Number(await scannerNum('Pilih Restaurant: ', 1, restoranList.length));
        const selectedRestaurant = restoranList[option - 1];
        this.chooseMenu(selectedRestaurant)
    }
    
    private async chooseMenu(selectedRestaurant: Restaurant) {
        if (selectedRestaurant) {
            console.log(`\nAnda memilih: ${selectedRestaurant.restaurantName}`);
            console.log("[List Menu]");
            selectedRestaurant.menu.forEach((item, index) => {
                console.log(`${index + 1}. ${item.name} - Rp ${item.price.toLocaleString()}`);
            });
        } else {
            console.log("Restoran tidak ditemukan.");
        }
        const optionMenu: number = Number(await scannerNum('Pilih Menu: ', 1, selectedRestaurant.menu.length));
        const selectedMenu = selectedRestaurant.menu[optionMenu - 1];
        console.log(`\nAnda memilih: ${selectedMenu.name} - Rp ${selectedMenu.price}`)
        const quantity: number = Number(await scannerNum('Masukkan Jumlah: ', 1, Infinity))

        const existingItemIndex = this.cartList.findIndex(item => item.name === selectedMenu.name);
        if (existingItemIndex !== -1) {
            this.cartList[existingItemIndex].qty += quantity;
        } else {
            this.cartList.push({
                name: selectedMenu.name,
                price: selectedMenu.price,
                qty: quantity
            });
        }
        this.cartMenu(selectedRestaurant)
    }


    private async cartMenu(selectedRestaurant: Restaurant) {
        console.log('=============================');
        console.log("Cart");
        console.log('=============================');

        if (this.cartList.length > 0) {
            this.cartList.forEach((item, index) => {
                console.log(`${index + 1}. ${item.name} - Rp ${item.price.toLocaleString()} x ${item.qty}`);
            });
            console.log(`Total: Rp ${this.cartList.reduce((acc, item) => acc + (item.price * item.qty), 0).toLocaleString()}`);
        } else {
            console.log("Tidak ada menu yang dipilih");
        }

        console.log('\n1. Order Now');
        console.log('2. Add New Food');
        console.log('3. Edit Quantity');
        console.log('4. Delete Menu');
        console.log('5. Clear cart');
        console.log('0. Back');

        const option: number = Number(await scannerNum('Pilih Opsi: ', 0, 5));
        if (option === 1) {
            this.orderNow(selectedRestaurant);
        } else if (option === 2) {
            this.chooseMenu(selectedRestaurant);
        } else if (option === 3) {
            this.editQuantity(selectedRestaurant);
        } else if (option === 4) {
            this.deleteMenu(selectedRestaurant);
        } else if (option === 5) {
            this.clearCart(selectedRestaurant);
        } else if (option === 0) {
            this.mainView.show();
        } else {
            console.log("Invalid Input");
            this.cartMenu(selectedRestaurant);
        }

    }

    private async orderNow(selectedRestaurant: Restaurant) {
        if (this.cartList.length > 0) {
            const to: string = String(await scanner('Masukkan alamat tujuan: '));
            const reciever: string = String(await scanner('Masukkan nama penerima: '));
            const totalPriceMenu: number = this.cartList.reduce((acc, item) => acc + (item.price * item.qty), 0);
            const totaPrice: number = this.foodService.calculatePrice(selectedRestaurant.restaurantAddress, to, totalPriceMenu)
            console.log('=============================');
            console.log(`Total: Rp ${totalPriceMenu.toLocaleString()}`);
            console.log('Total Dengan Ongkir: ' + totaPrice)
            console.log('=============================');
            const option: Number = Number(await scanner('Order No?\n1. Yes\n2. Cancel\nInput: '));
            if (option === 1) {
                this.orderDetail(totaPrice, selectedRestaurant, to, reciever);
            } else {
                console.log('Order cancelled.');
                this.mainView.show();
            }
        } else {
            console.log('Tidak ada menu yang dipilih');
            this.show();
        }
    }

    private orderDetail(total: number, selectedRestaurant: Restaurant, to: string, reciever: string) {
        console.log('=============================');
        console.log(`Order Detail`);
        console.log('=============================');
        let driver: Driver = this.driverService.findDriver();
        let price: number = total;
        let invoice: string = "FOOD-" + generateInvoice();
        let type: string = "FOOD";

        let history: History = {
            invoice: invoice,
            type: type,
            total: price
        }

        this.historyList.push(history);
        console.log(`Invoice: ${invoice}`);
        console.log(`Driver: ${driver.name}`);
        console.log(`Plat Number: ${driver.platNumber}`);
        console.log(`Restaurant: ${selectedRestaurant.restaurantName}`);
        console.log(`from: ${selectedRestaurant.restaurantAddress}`);
        console.log(`to: ${to}`);
        console.log(`Revciever: ${reciever}`);
        console.log(`Total: Rp ${total.toLocaleString()}`);

        this.mainView.show();
    }

    private async editQuantity(selectedRestaurant: Restaurant) {
        console.log('=============================');
        console.log("Edit Quantity");
        console.log('=============================');

        this.cartList.forEach((item, index) => {
            console.log(`${index + 1}. ${item.name} - Rp ${item.price.toLocaleString()} x ${item.qty}`);
        });

        const option: number = Number(await scannerNum('Pilih Menu: ', 1, this.cartList.length));
        const selectedMenu = this.cartList[option - 1];
        const quantity: number = Number(await scannerNum('Masukkan Jumlah: ', 1, Infinity));
        selectedMenu.qty = quantity;
        this.cartMenu(selectedRestaurant);
    }

    private async deleteMenu(selectedRestaurant: Restaurant) {
        console.log('=============================');
        console.log("Delete Menu");
        console.log('=============================');

        this.cartList.forEach((item, index) => {
            console.log(`${index + 1}. ${item.name} - Rp ${item.price.toLocaleString()} x ${item.qty}`);
        });

        const option: number = Number(await scannerNum('Pilih Menu: ', 1, this.cartList.length));
        this.cartList.splice(option - 1, 1);
        this.cartMenu(selectedRestaurant);
    }

    private async clearCart(selectedRestaurant: Restaurant) {
        this.cartList = [];
        this.cartMenu(selectedRestaurant);
    }
}

export default FoodView;