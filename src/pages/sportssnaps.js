import React from "react";
import { Helmet } from "react-helmet";
import Container from "../components/container";

export default function Sportssnaps() {
	return (
		<Container>
			<Helmet title="Sportssnaps | Trøstival" />
			<h1>Sportssnaps</h1>
			<p>Drikken til den aktive alkoholiker!</p>

			<img src="./sportssnaps-etikket.jpg" alt="" />

			<h2>Opskrift (shh, den er top-hemmelig!)</h2>
			<ul>
				<li>Druesukker (i store mængder)</li>
				<li>Vodka</li>
				<li>Grøn saftevand</li>
			</ul>

			<img src="./sportssnaps.jpg" alt="" />
		</Container>
	)
}
