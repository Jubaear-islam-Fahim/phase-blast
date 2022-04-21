import React from "react";
import "./SectionHeader.sass";

const SectionHeader = ({ title, cate, text, center }) => {
	return (
		<div className={`sectionHeader ${center ? "center" : ""}`}>
			<h6 className="cate">{cate}</h6>
			<h2 className="title">{title}</h2>
			{text && <p>{text}</p>}
		</div>
	);
};

export default SectionHeader;
