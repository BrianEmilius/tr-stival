import React from "react";
import "./navigation.css"
import { Link } from "react-router-dom";

export default function Navigation() {
	return (
		<nav role="navigation">
			<ul role="menu" className="primaryNavigation">
				<li>
					<Link to="/" className="primaryNavigation__link">Trøstival</Link>
				</li>
				<li>
					<Link to="/pris" className="primaryNavigation__link">Pris</Link>
				</li>
				<li>
					<Link to="/tidsplan" className="primaryNavigation__link">Tidsplan</Link>
				</li>
				<li>
					<Link to="/merch" className="primaryNavigation__link">Merch</Link>
				</li>
				<li>
					<Link to="/login" className="primaryNavigation__link">Login</Link>
				</li>
				<li>
					<Link to="/sportssnaps" className="primaryNavigation__link">Sportssnaps</Link>
				</li>
			</ul>
		</nav>
	)
}
