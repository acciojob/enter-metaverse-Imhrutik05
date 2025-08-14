//your JS code here. If required.
const textE = document.getElementById("status");
const buttonE = document.getElementById("enterBtn");


button.addEventListener("click" , function() {
	
	const h1E = document.createElement("h1");

	h1E.textContent = "Entered Metaverse";

	document.body.replaceChild(h1E, textE);
});