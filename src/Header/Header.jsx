import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FaBars, FaRegTimesCircle } from "react-icons/fa";
import menuLinks from "../assets/data/menu-links";
import socialLinks from "../assets/data/social-links";
import logo from "../assets/images/logo.png";
import "./Header.sass";
const Header = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const [headerTop, setHeaderTop] = useState(false);

	const handleMenuToggle = () => {
		setOpenMenu(!openMenu);
	};

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 10) {
				setHeaderTop(true);
			} else {
				setHeaderTop(false);
			}
		});
	}, []);

	return (
		<header className={`headerSection ${headerTop ? "topFixed" : ""}`}>
			<Container className="auto-container">
				<div className="headerWrapper">
					<div className="logo">
						<a href="/">
							<img src={logo} alt="logo" />
						</a>
					</div>
					<div className={`menuWrapper ${openMenu ? "active" : ""}`}>
						<div className="menuWrapperInner">
							<ul className="menu">
								{menuLinks.map(({ id, links, name }) => (
									<li key={id}>
										<a href={links} onClick={handleMenuToggle}>
											{name}
										</a>
									</li>
								))}
							</ul>
							<ul className="socialLinks">
								{socialLinks
									.map(({ links, icon }, index) => (
										<li key={index}>
											<a href={links}>{icon}</a>
										</li>
									))
									.slice(0, 4)}
							</ul>
							<a href="/" className="btn--base">
								<span>Connect Wallet</span>
							</a>
							<div
								className="header-close-button d-lg-none"
								onClick={handleMenuToggle}
							>
								<FaRegTimesCircle />
							</div>
						</div>
					</div>
					<div className="menuToggle d-lg-none" onClick={handleMenuToggle}>
						<FaBars />
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
