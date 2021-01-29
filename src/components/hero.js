import React from "react";
import "./hero.css";
import Navigation from "./navigation";
import Counter from "./counter";

export default function Hero() {
	return (
		<header className="hero">
			<Navigation />
			<h1 className="brand">
				<img src="./Troestival_logo_forside.svg" alt="Trøstival 2021 - 6. - 9. august" />
			</h1>
			<Counter />
		</header>
	)
}
