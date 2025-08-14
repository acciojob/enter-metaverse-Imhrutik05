//your JS code here. If required.
const textE = document.querySelector("#status");
const buttonE = document.querySelector("#enterBtn");


buttonE.addEventListener("click" , function() {
	
	const h1E = document.createElement("h1");

	h1E.textContent = "Entered Metaverse";

	document.body.replaceChild(h1E, textE);
});