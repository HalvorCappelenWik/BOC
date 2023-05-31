import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import BOCLogo from "../Resources/Logo.png";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<img src={BOCLogo} alt="BOC Logo" />
			<nav ref={navRef}>
				<a href="/#">Tjenester</a>
				<a href="/#">Prosjekter</a>
				<a href="/#">Jobb</a>
				<a href="/#">Om oss</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;