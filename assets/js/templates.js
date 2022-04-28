class myHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<header>
				<div id="nav-bar" class="bottom-shadow">
					<div id="nav-bar-wrapper">
						<div id="nav-bar-name">
							Leo Wong
						</div>
						<div id="nav-bar-menu" class="nav-bar-menu-desktop">
							<div id="nav-bar-about" class="nav-bar-item">
								About
							</div>
							<div id="nav-bar-projects" class="nav-bar-item">
								Projects
							</div>
							<div id="nav-bar-blog" class="nav-bar-item nav-bar-active">
								Blog
							</div>
							<div id="nav-bar-cv" class="nav-bar-item">
								CV
							</div>
							<div id="nav-bar-lightswitch" class="nav-bar-item">
								<img id="nav-bar-lightswitch-image" src="/assets/img/lightmode_icon.png" alt="Icon">
							</div>
							<div id="nav-bar-coffee" class="nav-bar-item">
								<a class="coffee-color pulsate" href="https://www.buymeacoffee.com/leowong442G" target="_blank"> Buy me a coffee <3 </a>
							</div>
						</div>
						<div id="nav-bar-hamburger" class="nav-bar-item">
							<i class="fas fa-bars"></i>
						</div>
					</div>
				</div>
			</header>
		`
	}
}

customElements.define('my-header', myHeader)

class myFooter extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<footer>
				<div id="footer-main-container">
					<div id="footer-social">
						<a href="mailto: leo.wong2@mail.mcgill.ca">
							<div id="footer-social-email-icon" class="footer-social-icon">
								<i class="fas fa-envelope-square"></i>
							</div>
						</a>
						<a href="https://www.linkedin.com/in/leo-wong-486343120" target="_blank">
							<div id="footer-social-linkedin-icon" class="footer-social-icon">
								<i class="fab fa-linkedin"></i>
							</div>
						</a>
						<a href="https://github.com/leokfwong" target="_blank">
							<div id="footer-social-github-icon" class="footer-social-icon">
								<i class="fab fa-github-square"></i>
							</div>
						</a>
						<a href="https://www.researchgate.net/profile/Leo_Wong19" target="_blank">
							<div id="footer-social-researchgate-icon" class="footer-social-icon">
								<i class="fab fa-researchgate"></i>
							</div>
						</a>
					</div>
					<div id="footer-copyright">
						<small>&copy; Copyright 2022 Leo Wong</small>
					</div>
					<div id="back-to-top">
						<div id="back-to-top-button">
							Back to Top
						</div>
						<img src="/assets/img/rocket_1f680.png" alt="Rocket Emoji">
					</div>
				</div>
			</footer>
		`
	}
}

customElements.define('my-footer', myFooter)