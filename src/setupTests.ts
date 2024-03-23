import "@testing-library/jest-dom";
import "jest-localstorage-mock";

URL.createObjectURL = jest
	.fn()
	.mockReturnValue("blob:http://localhost:3000/1234");
