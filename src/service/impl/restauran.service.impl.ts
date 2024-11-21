import Restaurant from "../../model/restoran.model";
import RestaurantService from "../restoran.service";

class RestaurantServiceImpl implements RestaurantService {
    findRestaurant(): Restaurant[] {
        const restaurants = this.addRestaurants();
        return restaurants;
    }

    addRestaurants(): Restaurant[] {
        const newRestaurants: Restaurant[] = [
            {
                restaurantName: "Ayam Geprek Bensu",
                restaurantAddress: "Jl. Kemang Raya",
                menu: [
                    { name: "Ayam Geprek Original", price: 25000 },
                    { name: "Ayam Geprek Keju", price: 30000 },
                    { name: "Ayam Geprek Sambal Matah", price: 27000 },
                    { name: "Paket Geprek Hemat", price: 20000 },
                    { name: "Es Teh Manis", price: 5000 },
                ],
            },
            {
                restaurantName: "Bakso Boedjangan",
                restaurantAddress: "Jl. Margonda Depok",
                menu: [
                    { name: "Bakso Kuah Original", price: 25000 },
                    { name: "Bakso Urat Pedas", price: 30000 },
                    { name: "Bakso Keju", price: 28000 },
                    { name: "Bakso Super Jumbo", price: 35000 },
                    { name: "Es Campur Segar", price: 15000 },
                ],
            },
            {
                restaurantName: "Sate Taichan Senayan",
                restaurantAddress: "Jl. Asia Afrika",
                menu: [
                    { name: "Sate Taichan Original", price: 20000 },
                    { name: "Sate Taichan Sambal Hijau", price: 22000 },
                    { name: "Sate Taichan Keju", price: 25000 },
                    { name: "Sate Taichan Telur Puyuh", price: 27000 },
                    { name: "Teh Tawar Hangat", price: 5000 },
                ],
            },
            {
                restaurantName: "Martabak Orins",
                restaurantAddress: "Jl. Tebet Raya",
                menu: [
                    { name: "Martabak Manis Original", price: 35000 },
                    { name: "Martabak Manis Coklat Keju", price: 45000 },
                    { name: "Martabak Manis Nutella", price: 55000 },
                    { name: "Martabak Telur Ayam", price: 40000 },
                    { name: "Martabak Telur Spesial", price: 45000 },
                ],
            },
            {
                restaurantName: "Kopi Kenangan",
                restaurantAddress: "Jl. Sudirman",
                menu: [
                    { name: "Kenangan Mantan", price: 20000 },
                    { name: "Kopi Susu", price: 18000 },
                    { name: "Americano", price: 22000 },
                    { name: "Latte Art", price: 25000 },
                    { name: "Es Kopi Kenangan", price: 23000 },
                ],
            },
        ];
        return newRestaurants;
    }
}

export default RestaurantServiceImpl;