class RideServiceImpl implements RideService{
    calculatepRrice(from: string, to: string): number {
        const price: number = (from.length + to.length) * 1000;
        return price;
    }
}
export default RideServiceImpl;