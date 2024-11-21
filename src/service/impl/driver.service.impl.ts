import Driver from "../../model/driver.model";
class DriverServiceImpl implements DriverService {
    findDriver(): Driver {
        const driver = this.addDriver();
        const randomIndex = Math.floor(Math.random() * driver.length);
        return driver[randomIndex];
    }

    addDriver(): Driver[] {
        const drivers: Driver[] = [
            {
                name: 'Budi',
                platNumber: 'A 1234 ABC',
            },
            {
                name: 'Andi',
                platNumber: 'B 5678 DEF',
            },
            {
                name: 'Supri',
                platNumber: 'C 9012 GHI',
            }
        ];
        return drivers;
    }
}
export default DriverServiceImpl;