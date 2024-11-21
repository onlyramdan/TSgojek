function generateInvoice(): string {
	let result: string = "";
	const characters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	const charactersLength: number = characters.length;
	let counter: number = 0;
	while (counter < 2) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
		counter += 1;
	}

	return result;
}

export default generateInvoice;