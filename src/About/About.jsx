import React from "react";
import { Col, Row } from "react-bootstrap";
import phase from "../assets/data/phase";
import shape1 from "../assets/images/shadow-image/phase-shape.png";
import shape2 from "../assets/images/shadow-image/phase-shape2.png";
import SectionHeader from "../components/SectionHeader";
import "./About.sass";
const About = () => {
	return (
		<section className="aboutSection position-relative pb-150" id="about">
			<div className="aboutShpae1">
				<img src={shape1} alt="images/phase" />
			</div>
			<div className="aboutShpae2">
				<img src={shape2} alt="images/phase" />
			</div>
			<div className="container position-relative">
				<SectionHeader
					cate="About"
					title="What is Phase"
					text="This ecosystem is built on top of the high-performance Proof of History (PoH) technology made possible by the Solana layer 1 blockchain. In the current state of the market, most DeFi projects run on congested and backdated networks with staggering fees incurred on every transaction."
					center
				/>
				<div className="aboutContent">
					<p>
						The ground-breaking technology that Solana brings to the table
						with PoH solves the problems of scalability and practicality
						to bring billions of people into an integrated world of
						digital assets. In its current state, the network can process
						over 50,000 transactions per second with near-zero latency and
						is capable of scaling to over 700,000+
					</p>
				</div>
				<Row className="g-4 justify-content-center">
					{phase.length > 0 &&
						phase.map(({ img, title, txt }, index) => (
							<Col md="6" lg="4" key={index}>
								<div className="phaseCard">
									<div className="img">
										<img src={img} alt={title} />
									</div>
									<h5 className="title">{title}</h5>
									<p className="txt">{txt}</p>
								</div>
							</Col>
						))}
				</Row>
			</div>
		</section>
	);
};

export default About;
