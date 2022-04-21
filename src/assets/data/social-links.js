import { BsFacebook, BsGithub, BsMedium, BsTwitter } from "react-icons/bs";
import { FaInstagram, FaRegPaperPlane } from "react-icons/fa";
import { ImReddit } from "react-icons/im";
const socialLinks = [
	{
		icon: <BsGithub />,
		links: "/",
		name: "Github",
	},
	{
		icon: <FaRegPaperPlane />,
		links: "/",
		name: "Telegram",
	},
	{
		icon: <BsTwitter />,
		links: "/",
		name: "Twitter",
	},
	{
		icon: <ImReddit />,
		links: "/",
		name: "Reddit",
	},
	{
		icon: <FaInstagram />,
		links: "/",
		name: "Instagram",
	},
	{
		icon: <BsFacebook />,
		links: "/",
		name: "Facebook",
	},
	{
		icon: <BsMedium />,
		links: "/",
		name: "Medium",
	},
];

export default socialLinks;
