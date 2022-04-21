import React, { useState } from "react";
import menuLinks from "../assets/data/menu-links";
import socialLinks from "../assets/data/social-links";
import logo from "../assets/images/footer-logo.png";
import Button from "../components/Button";
import "./Footer.sass";
const Footer = () => {
	const [email, setEmail] = useState("");
	return (
		<footer>
			<div className="footerShape"></div>
			<div className="container auto-container">
				<div className="footerWrapper">
					<div className="footerWidget logoWidget">
						<a href="/" className="logo">
							<img src={logo} alt="logo" />
						</a>
					</div>
					<div className="footerWidget linkWidget ms-auto">
						<h6 className="text-gradient">Navigate</h6>
						<ul className="usefulLinks">
							{menuLinks &&
								menuLinks.map(({ id, links, name }, index) => (
									<li key={index}>
										<a href={links}>{name}</a>
									</li>
								))}
						</ul>
					</div>
					<div className="footerWidget linkWidget me-auto">
						<h6 className="text-gradient">Social</h6>
						<ul className="usefulLinks">
							{socialLinks &&
								socialLinks.map(({ icon, links, name }, index) => (
									<li key={index}>
										<a href={links}>
											{icon} {name}
										</a>
									</li>
								))}
						</ul>
					</div>
					<div className="footerWidget newsletterWidget">
						<h6 className="text-gradient">Join Our Newsletter</h6>
						<form className="subscribeForm">
							<div className="input-group">
								<input
									className="form-control"
									type="text"
									name="email"
									value={email}
									placeholder="Enter Email Address"
									onChange={(e) => setEmail(e.target.value)}
								/>
								<Button text="Subscribe" classes="subscribeButton" />
							</div>
						</form>
						<p>
							By submitting your email you agree to our Terms of Use and
							Sale and Privacy Policy. You will receive email
							communications from us for marketing, informational, and
							promotional purposes and can opt-out at any time.
						</p>
					</div>
				</div>
			</div>
			<div className="footerBottom">
				<div className="container auto-container">
					<div className="d-flex flex-wrap justify-content-evenly justify-content-md-between">
						<div className="text-center m-2">
							&copy; 2022 Phase, All rights reserved
						</div>
						<ul className="quickLinks m-2">
							<li>
								<a href="">Privacy Policy</a>
							</li>
							<li>
								<a href="">Terms &amp; Condition</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
