import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import partners from "../assets/data/partners";
import SectionHeader from "../components/SectionHeader";
import "./Partners.sass";

const Partners = () => {
	let settings = {
		infinite: true,
		speed: 5000,
		slidesToShow: 6,
		slidesToScroll: 1,
		cssEase: "linear",
		autoplay: true,
		autoplaySpeed: 0,
		arrows: false,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 5,
				},
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	};
	return (
		<section className="partnersSection pb-150" id="partner">
			<div className="auto-container container">
				<SectionHeader
					center
					cate="Our Partners"
					title="Trusted by World Class Companies"
				/>

				<Slider {...settings}>
					{partners.length > 0 &&
						partners.map(({ img }, index) => (
							<div className="partnersThumb" key={index}>
								<img src={img} alt="partner" />
							</div>
						))}
				</Slider>
			</div>
		</section>
	);
};

export default Partners;
