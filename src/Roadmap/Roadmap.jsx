import React from "react";
import { Container } from "react-bootstrap";
import road_map from "../assets/data/road-map";
import image from "../assets/images/roadmap/roadmap.png";
import shape from "../assets/images/shadow-image/roadmap-shape.png";
import SectionHeader from "../components/SectionHeader";
import "./Roadmap.sass";
const Roadmap = () => {
	return (
		<section className="roadmapSection position-relative pb-150" id="roadmap">
			<div className="roadMapShape">
				<img src={shape} alt="road-map" />
			</div>
			<Container className="position-relative">
				<div className="roadmapWrapper">
					<div className="roadmapContent">
						<SectionHeader cate="Roadmap" title="Our Path Forward" />
						<div className="roadMapArea">
							{road_map.length > 0 &&
								road_map.map(({ id, year, info }) => (
									<div className="roadMapItem" key={id}>
										<h2 className="year text-gradient">{year}</h2>
										<ul className="info">
											{info.length > 0 &&
												info.map((item, i) => (
													<li key={i}>{item}</li>
												))}
										</ul>
									</div>
								))}
						</div>
					</div>
					<div className="roadmapImage">
						<div className="roadMapShape2"></div>
						<img src={image} alt="roadmap" />
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Roadmap;
