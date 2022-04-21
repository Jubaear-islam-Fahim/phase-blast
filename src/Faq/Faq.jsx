import React from "react";
import { Accordion, Container } from "react-bootstrap";
import faqs from "../assets/data/faq";
import SectionHeader from "../components/SectionHeader";
import "./Faq.sass";
const Faq = () => {
	return (
		<section className="faqsSection pb-150" id="faqs">
			<Container className="position-relative">
				<SectionHeader
					cate="HELP"
					title="Frequently Asked Questions"
					center
				/>
				<Accordion defaultActiveKey={0} className="faqWrapper">
					{faqs.length > 0 &&
						faqs.map(({ id, title, info }, index) => (
							<Accordion.Item
								eventKey={index}
								className="faqCard"
								key={index}
							>
								<Accordion.Header className="title">
									{index + 1}. {title}
								</Accordion.Header>
								<Accordion.Body className="faqContent">
									{info}
								</Accordion.Body>
							</Accordion.Item>
						))}
				</Accordion>
			</Container>
		</section>
	);
};

export default Faq;
