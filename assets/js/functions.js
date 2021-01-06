window.onload = function() {
	console.log("Javascript working, website loaded.");
	// Initialize or fetch current view
	let view = sessionStorage.getItem("view");
	if (view == null) {
		sessionStorage.setItem("view", "about");
	}
	// Initialize or fetch current view mode (ie. dark mode)
	let viewmode = localStorage.getItem("viewmode");
	if (viewmode == null) {
		localStorage.setItem("viewmode", "light");
	}

	function applyLightswitch(param_dict) {
		document.getElementsByTagName("body")[0].style.background = param_dict.bodyBackground;
		document.getElementById("wrapper").style.color = param_dict.color;
		let publications_content = document.getElementById("publications-content");
		if (publications_content != undefined) {
			publications_content.style.color = param_dict.color;
		}
		for (social_item of document.getElementsByClassName("social-item")) {
			if (social_item != undefined) {
				social_item.style.color = param_dict.color;
			}
		}
		for (blog of document.getElementsByClassName("blog-title")) {
			let h2 = blog.getElementsByTagName("h2")[0];
			if (h2 != undefined) {
				if (h2.childNodes[0].href != undefined) {
					h2.childNodes[0].style.color = param_dict.color;	
				}
			}
		}
		for (code of document.getElementsByTagName("code")) {
			if (code != undefined) {
				if (code.className == "") {
					code.style.color = param_dict.color;
					code.style.background = param_dict.codeBackground;
				}
			}
		}
		for (item of document.getElementsByClassName("blog-section-item")) {
			item.style.color = param_dict.color;
		}
		for (item of document.getElementsByClassName("reference_item")) {
			item.style.color = param_dict.color;	
		}
	}

	let lightswitch_image = document.getElementById("nav-bar-lightswitch-image");
	if (viewmode == "light") {
		lightswitch_image.src = "/assets/img/lightmode_icon.png";
		applyLightswitch({"bodyBackground":"white", "color":"#242424", "codeBackground":"rgba(0,0,0,.1)"})
	} else {
		lightswitch_image.src = "/assets/img/darkmode_icon.png";
		applyLightswitch({"bodyBackground":"#101010", "color":"lightgrey", "codeBackground":"rgba(255,255,255,.21)"})
	}

	let url = window.location.href;
	let on_homepage = true;
	if ((url.search("/blog/") > -1) | (url.search("/projects/") > -1)) {
		on_homepage = false
	};

	// Toggle dark mode
	let lightswitch = document.getElementById("nav-bar-lightswitch");
	lightswitch.addEventListener("click", function() {
		let viewmode = localStorage.getItem("viewmode");
		if (viewmode == "light") {
			localStorage.setItem("viewmode", "dark");
			lightswitch_image.src = "/assets/img/darkmode_icon.png";
			applyLightswitch({"bodyBackground":"#101010", "color":"lightgrey", "codeBackground":"rgba(255,255,255,.15)"})
		} else {
			localStorage.setItem("viewmode", "light");
			lightswitch_image.src = "/assets/img/lightmode_icon.png";
			applyLightswitch({"bodyBackground":"white", "color":"#242424", "codeBackground":"rgba(0,0,0,.1)"})
		}
	});

	// Hamburger on mobile
	let hamburger_button = document.getElementById("nav-bar-hamburger");
	hamburger_button.addEventListener("click", function() {
		let mobile_menu = document.getElementById("nav-bar-menu");
		if (mobile_menu.className == "nav-bar-menu-desktop") {
			mobile_menu.className = "nav-bar-menu-mobile";
		} else {
			mobile_menu.className = "nav-bar-menu-desktop";
		}
	});

	if (on_homepage) {
		if (view == "blog") {
			displayBlog();
		} else if (view == "projects") {
			displayProject();
		} else {
			console.log("About me.")
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

		// Display projects
		let proj_featured = document.getElementById("projects-menu-featured");
		let proj_data = document.getElementById("projects-menu-data");
		let proj_web = document.getElementById("projects-menu-web");
		proj_featured.addEventListener("click", function() {
			displayProjects("featured");
		});
		proj_data.addEventListener("click", function() {
			displayProjects("data");
		});
		proj_web.addEventListener("click", function() {
			displayProjects("web");
		});

		displayProjects("featured");

		// Publications toggle
		let publications_toggle = document.getElementById("publications-toggle-button");
		publications_toggle.addEventListener("click", function() {
			publications_toggle = document.getElementById("publications-toggle-button");
			console.log(publications_toggle.className);
			if (publications_toggle.className == "publications-hidden") {
				publications_toggle.className = "publications-shown";
				publications_toggle.innerHTML = "Show less";
				document.getElementById("publication-4-hidden").style.display = "block";
			} else {
				publications_toggle.className = "publications-hidden";
				publications_toggle.innerHTML = "Show more";
				document.getElementById("publication-4-hidden").style.display = "none";
			}
		});
	}

	// Alternate between about and blog
	let about_button = document.getElementById("nav-bar-about");
	let projects_button = document.getElementById("nav-bar-projects");
	let blog_button = document.getElementById("nav-bar-blog");

	about_button.addEventListener("click", function() {
		if (on_homepage) {
			document.getElementById("side-page-blog").style.display = "none";
			document.getElementById("nav-bar-projects").className = "nav-bar-item";
			document.getElementById("nav-bar-blog").className = "nav-bar-item";
			document.getElementById("about-me-section").style.display = "block";
			document.getElementById("experience-section").style.display = "block";
			document.getElementById("projects-section").style.display = "block";
			document.getElementById("publications-section").style.display = "block";
			document.getElementById("nav-bar-about").className = "nav-bar-item nav-bar-active";
			window.scrollTo(0, 0);
			sessionStorage.setItem("view", "about");
		} else {
			sessionStorage.setItem("view", "about");
			window.location.href = "/index.html";
		}
	});
	projects_button.addEventListener("click", function() {
		if (on_homepage) {
			displayProject();
			sessionStorage.setItem("view", "projects");
		} else {
			sessionStorage.setItem("view", "projects");
			window.location.href = "/index.html";
		}
	});
	blog_button.addEventListener("click", function() {
		if (on_homepage) {
			displayBlog();
			sessionStorage.setItem("view", "blog");
		} else {
			sessionStorage.setItem("view", "blog");
			window.location.href = "/index.html";
		}
	});

	// Set up logo button
	let homepage_logo = document.getElementById("nav-bar-name");
	homepage_logo.addEventListener("click", function() {
		window.location.href = "/index.html";
	});

	// Set up back to top button
	let back2top = document.getElementById("back-to-top");
	back2top.addEventListener("click", function() {
		back2Top();
	});
}

function displayProjects(category) {
	let proj_featured = document.getElementById("projects-menu-featured");
	let proj_data = document.getElementById("projects-menu-data");
	let proj_web = document.getElementById("projects-menu-web");
	proj_featured.className = "projects-menu-item";
	proj_data.className = "projects-menu-item";
	proj_web.className = "projects-menu-item";
	if (category == "featured") {
		proj_featured.className += " projects-menu-active";
	} else if (category == "data") {
		proj_data.className += " projects-menu-active";
	} else if (category == "web") {
		proj_web.className += " projects-menu-active";
	} else {
		// Other category
	}
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

function displayProject() {
	displayProjects("featured");
	document.getElementById("about-me-section").style.display = "none";
	document.getElementById("experience-section").style.display = "none";
	document.getElementById("projects-section").style.display = "block";
	document.getElementById("publications-section").style.display = "none";
	document.getElementById("side-page-blog").style.display = "none";
	document.getElementById("nav-bar-projects").className = "nav-bar-item nav-bar-active";
	document.getElementById("nav-bar-blog").className = "nav-bar-item";
	document.getElementById("nav-bar-about").className = "nav-bar-item";

	viewportWidth = window.innerWidth || document.documentElement.clientWidth;
	if (viewportWidth < 1024) {
		document.getElementById("projects-section").scrollIntoView();
		window.scrollBy(0, -70);
	} else {
		window.scrollTo(0, 0);
	}
}

function displayBlog() {
	document.getElementById("about-me-section").style.display = "none";
	document.getElementById("experience-section").style.display = "none";
	document.getElementById("projects-section").style.display = "none";
	document.getElementById("publications-section").style.display = "none";
	document.getElementById("nav-bar-blog").className = "nav-bar-item nav-bar-active";
	document.getElementById("side-page-blog").style.display = "block";
	document.getElementById("nav-bar-about").className = "nav-bar-item";
	document.getElementById("nav-bar-projects").className = "nav-bar-item";

	viewportWidth = window.innerWidth || document.documentElement.clientWidth;
	if (viewportWidth < 1024) {
		document.getElementById("side-page-blog").scrollIntoView();
		window.scrollBy(0, -70);
	} else {
		window.scrollTo(0, 0);
	}

}

function back2Top() {
	window.scrollTo(0, 0);
}

// Function to offset anchor
function offsetAnchor() {
	if (location.hash.length !== 0) {
		window.scrollTo(window.scrollX, window.scrollY - 60);
	}
}

// Indentify clicks that jump to another location on page
document.addEventListener("click", function(event) {
	if (event.target.matches("a[href^='#']")) {
		window.setTimeout(function() {
			offsetAnchor();
		}, 0);
	}
}, false);