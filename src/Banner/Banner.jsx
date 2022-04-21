import React from "react";
import { Container } from "react-bootstrap";
import { CgArrowLongRight } from "react-icons/cg";
import bannerImage from "../assets/images/banner.png";
import shadow from "../assets/images/shadow-image/ellipse.png";
import Button from "../components/Button";
import "./Banner.sass";
const Banner = () => {
	return (
		<section className="bannerSection">
			<div className="shadow__image">
				<img src={shadow} alt="banner-shadow" />
			</div>
			<div className="overflow-hidden">
				<Container className="auto-container">
					<div className="bannerWrapper">
						<div className="bannerContent">
							<h1 className="title">A Decentralized Volatility Index</h1>
							<p className="text">
								This index will provide an implied volatility forecast
								that can be used as a tool to hedge during times of
								extreme price fluctuations and speculate on volatility
								versus direction in price movement, just as the VIX is
								used for the equities markets.
							</p>
							<div className="btnContainer">
								<Button
									link="/"
									classes="btn--default"
									text="Launch Index"
								/>
								<Button
									link="/"
									classes="btn--default outline ms-1"
									text="Learn More"
									icon={<CgArrowLongRight className="ms-2" />}
								/>
							</div>
						</div>
						<div className="bannerThumb">
							<img src={bannerImage} alt="banner" />
						</div>
					</div>
				</Container>
			</div>
		</section>
	);
};

export default Banner;
