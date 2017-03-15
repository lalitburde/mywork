console.log("Hi, Welcome to app.js");

const form = document.getElementById("registrar");
const input = form.querySelector("input");

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const inviteeName = input.value;
	const ul = document.getElementById("invitedList");
	const li = document.createElement("li");
	li.textContent = inviteeName;
	ul.appendChild(li);
	const checkBox = document.createElement("input");
	checkBox.type ="checkBox";
	li.appendChild(checkBox);
	checkBox.value = true;
});
//console.log("input is " + input);