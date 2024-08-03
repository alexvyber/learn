let post = "";

const jsInput = document.querySelector("input");
const jsDiv = document.querySelector("div");

function dataToView() {
	jsInput.value = post;
	jsDiv.textContent = post;
}

function handleInput() {
	post = jsInput.value;
	if (post == "some") {
		jsDiv.remove();
	} else {
		if (!jsDiv.isConnected) {
			document.body.appendChild(jsDiv);
		}
	}
}

jsInput.oninput = handleInput;
setInterval(dataToView, 15);
