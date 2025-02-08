const multiplyBy2 = (number) => {
	if (!Number(number)) throw new Error();
	console.log("multiply starting...");
	return number * 2;
};

export { multiplyBy2 };
