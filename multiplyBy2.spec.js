import { multiplyBy2 } from "./index";

it("should multiply a given valid number by", () => {
	const result = multiplyBy2(2);
	expect(result).toBe(4);
});

it("should throw an error if given invalid number", () => {
	expect(() => multiplyBy2("hi")).toThrow();
});
