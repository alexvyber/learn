export const initializeCounter = (doc = globalThis.document) => {
	const countElement = doc.getElementById("count");
	const incrementButton = doc.getElementById("increment");
	const decrementButton = doc.getElementById("decrement");

	let count = 0;

	const render = () => {
		countElement.textContent = count;

		if(count < -3) {
			import("./banner").then(({ addBanner}) => addBanner("Less than -3"))
		}
	};

	const increment = () => {
		count++;
		render();
	};

	const decrement = () => {
		count--;
		render();
	};

	incrementButton.addEventListener("click", increment);
	decrementButton.addEventListener("click", decrement);

	render();

	return () => {
		incrementButton.removeEventListener("click", increment);
		decrementButton.removeEventListener("click", decrement);
	};
};
