window.onload = function() {
	console.log("Javascript working, website loaded.");
	// Type Erase
	const passions_data = ["Data Science.   ", "Web Development.   ", "Cybersecurity.   "];
	let i = 0;
	let timer;
	let type_interval = 150;
	let erase_interval = 100;
	// Find div containing text
	let div = document.getElementById("passions-type-erase");
	div.innerHTML = "";
	// Typing effect
	function typingEffect() {
		let word = passions_data[i].split("");
		var loopTyping = function() {
			if (word.length > 0) {
				div.innerHTML += word.shift();
			} else {
				deletingEffect();
				return false;
			};
			timer = setTimeout(loopTyping, type_interval);
		};
		loopTyping();
	};
	// Deleting effect
	function deletingEffect() {
		let word = passions_data[i].split("");
		var loopDeleting = function() {
			if (word.length > 0) {
				word.pop();
				div.innerHTML = word.join("");
			} else {
				if (passions_data.length > (i + 1)) {
					i++;
				} else {
					i = 0;
				};
				typingEffect();
				return false;
			};
			timer = setTimeout(loopDeleting, erase_interval);
		};
		loopDeleting();
	};
	// Call typing effect function
	typingEffect();

	// Alternate between about and blog
	let about_button = document.getElementById("nav-bar-about");
	let blog_button = document.getElementById("nav-bar-blog");

	about_button.addEventListener("click", function() {
		document.getElementById("side-page").style.display = "none";
		document.getElementById("nav-bar-blog").className = "nav-bar-item";
		document.getElementById("main-page").style.display = "block";
		document.getElementById("nav-bar-about").className = "nav-bar-item nav-bar-active";
	});
	blog_button.addEventListener("click", function() {
		document.getElementById("main-page").style.display = "none";
		document.getElementById("nav-bar-blog").className = "nav-bar-item nav-bar-active";
		document.getElementById("side-page").style.display = "block";
		document.getElementById("nav-bar-about").className = "nav-bar-item";
	});
}