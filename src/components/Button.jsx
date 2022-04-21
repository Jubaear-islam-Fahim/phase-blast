import React from "react";

const Button = ({ link, classes, text, icon }) => {
	if (!link) {
		return (
			<button className={classes}>
				<span>
					{text}
					{icon && icon}
				</span>
			</button>
		);
	}
	return (
		<a href={link} className={classes}>
			<span>
				{text}
				{icon && icon}
			</span>
		</a>
	);
};

export default Button;
