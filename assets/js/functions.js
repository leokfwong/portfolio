window.onload = function() {
	console.log("Javascript working, website loaded.");
	// Initialize or fetch current view
	let view = localStorage.getItem("view");
	if (view == undefined) {
		localStorage.setItem("view", "about");
	}

	let url = window.location.href;
	let on_homepage = true;
	if (url.search("/blog/") > -1) {
		on_homepage = false
	};
	if (on_homepage) {
		if (view == "blog") {
			displayBlog();
		}
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
	}

	// Display projects
	let proj_featured = document.getElementById("projects-menu-featured");
	let proj_data = document.getElementById("projects-menu-data");
	let proj_web = document.getElementById("projects-menu-web");
	proj_featured.addEventListener("click", function() {
		proj_featured.className = "projects-menu-item projects-menu-active";
		proj_data.className = "projects-menu-item";
		proj_web.className = "projects-menu-item";
		displayProjects("featured");
	});
	proj_data.addEventListener("click", function() {
		proj_featured.className = "projects-menu-item";
		proj_data.className = "projects-menu-item projects-menu-active";
		proj_web.className = "projects-menu-item";
		displayProjects("data");
	});
	proj_web.addEventListener("click", function() {
		proj_featured.className = "projects-menu-item";
		proj_data.className = "projects-menu-item";
		proj_web.className = "projects-menu-item projects-menu-active";
		displayProjects("web");
	});

	displayProjects("featured");

	// Alternate between about and blog
	let about_button = document.getElementById("nav-bar-about");
	let blog_button = document.getElementById("nav-bar-blog");

	about_button.addEventListener("click", function() {
		if (on_homepage) {
			document.getElementById("side-page").style.display = "none";
			document.getElementById("nav-bar-blog").className = "nav-bar-item";
			document.getElementById("main-page").style.display = "block";
			document.getElementById("nav-bar-about").className = "nav-bar-item nav-bar-active";
			window.scrollTo(0, 0);
			localStorage.setItem("view", "about");
		} else {
			localStorage.setItem("view", "about");
			window.location.href = "../../index.html";
		}
	});
	blog_button.addEventListener("click", function() {
		if (on_homepage) {
			displayBlog();
			localStorage.setItem("view", "blog");
		} else {
			localStorage.setItem("view", "blog");
			window.location.href = "../../index.html";
		}
	});

	// Set up logo button
	let homepage_logo = document.getElementById("nav-bar-name");
	homepage_logo.addEventListener("click", function() {
		window.location.href = "../../index.html";
	});

	// Set up back to top button
	let back2top = document.getElementById("back-to-top");
	back2top.addEventListener("click", function() {
		back2Top();
	});
}

function displayProjects(category) {
	let project_container = document.getElementById("projects-content");
	let projects = project_container.childNodes;
	for (let i = 0; i < projects.length; i++) {
		if (projects[i].tagName == "DIV") {
			let project_category = projects[i].getAttribute("data-project-category");
			if (project_category.indexOf(category) > -1) {
				projects[i].className = "project-container project-container-show";
			} else {
				projects[i].className = "project-container project-container-hide";
			}
		}
	}
}

function displayBlog() {
	document.getElementById("main-page").style.display = "none";
	document.getElementById("nav-bar-blog").className = "nav-bar-item nav-bar-active";
	document.getElementById("side-page").style.display = "block";
	document.getElementById("nav-bar-about").className = "nav-bar-item";

	viewportWidth = window.innerWidth || document.documentElement.clientWidth;
	if (viewportWidth < 1024) {
		document.getElementById("side-page").scrollIntoView();
		window.scrollBy(0, -70);
	} else {
		window.scrollTo(0, 0);
	}

}

function back2Top() {
	window.scrollTo(0, 0);
}