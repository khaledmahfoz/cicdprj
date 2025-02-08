const multiplyBy2 = (number) => {
	if (!Number(number)) throw new Error();
	return number * 2;
};

export { multiplyBy2 };
