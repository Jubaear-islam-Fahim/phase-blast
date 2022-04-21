import React from "react";
import { Container } from "react-bootstrap";
import token_info from "../assets/data/token-info";
import imageShapes from "../assets/images/shadow-image/token-shapes.png";
import image from "../assets/images/token/token.png";
import tokenLogo from "../assets/images/token_logo.png"
import SectionHeader from "../components/SectionHeader";
 

import "./Token.sass";



const Token = () => {
	 
	return (
		<section className="tokenSection position-relative pb-150" id="token">
			<div className="tokenImageShape">
				<img src={imageShapes} alt="token" />
			</div>
			<Container className="position-relative">
				<div className="tokenWrapper">
					<div className="tokenImage">
						<div className="tokenCont">
							<div className="tokenLogo"> 
								<img src={tokenLogo} alt="token" />
							</div>
							 
							<ul className="token_cheat">
								<li className="cheat_list"> <span>1.0 <br/> <b>m</b> </span> </li>
								<li className="cheat_list"> <span>1.0 <br/> <b>m</b></span> </li>
								<li className="cheat_list"> <span>1.0 <br/> <b>m</b></span> </li>
								<li className="cheat_list"> <span>1.0 <br/> <b>m</b></span> </li>
								<li className="cheat_list"> <span>9.12 <br/> <b>m</b></span> </li>
							</ul>
						</div>
					</div>
					<div className="tokenContent">
						<SectionHeader
							cate="Token"
							title="Token Destribution"
							text="The initial token distribution was completed on April 4, 2021 as an airdrop to thousands of people from all over the world as ROPE, and as mentioned will undergo a 1:1 token swap to PHASE on February 1st 2022."
						/>
						<div className="aboutContent text-start">
							<p>
								The remaining tokens that aren't listed as 'existing
								ROPE supply' will be vested through the Bonfida Vesting
								Contract, and the softened cap will serve as a means to
								safeguard the index pool from depletion via a mint/burn
								mechanism—a feature that can increase or decrease the
								total supply when utilized. This mechanism will be
								described in greater detail later on in this paper.
							</p>
						</div>
						<ul className="tokenInfo">
							{token_info.length > 0 &&
								token_info.map(({ txt }, index) => (
									<li key={index}>{txt}</li>
								))}
						</ul>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Token;
