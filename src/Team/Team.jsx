import React from "react";
import { Container } from "react-bootstrap";
import team from "../assets/data/team";
import SectionHeader from "../components/SectionHeader";
import "./Team.sass";
const Team = () => {
	return (
		<section className="teamSection pb-150 position-relative" id="team">
			<div className="teamShapes"></div>
			<Container className="position-relative">
				<SectionHeader
					cate="OUR TEAM"
					title="Best Team to Serve You"
					center
				/>
				<div className="teamWrapper">
					<div className="row g-4">
						{team.length > 0 &&
							team.map(
								({ img, name, designation, socialLinks }, index) => (
									<div className="col-md-4 col-sm-6" key={index}>
										<div className="teamCard">
											<div className="teamCardImg">
												<img src={img} alt={name} />
											</div>
											<h5 className="name">{name}</h5>
											<span className="designation">
												{designation}
											</span>
											<ul className="socialIcons">
												{socialLinks.length > 0 &&
													socialLinks.map(({ icon, links }, i) => (
														<li key={i}>
															<a href={links}>{icon}</a>
														</li>
													))}
											</ul>
										</div>
									</div>
								)
							)}
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Team;
