import { Metadata } from "next";

export const dynamic = "force-static"; // no necessary, just for demonstration

export const metadata: Metadata = {
	title: "Chi siamo",
	description: "About NextSpace",
};

export default function About() {
	return (
		<div>
			<h1>Chi siamo</h1>
			<p>We are a social media company that wants to bring people together!</p>
			<p>{"Siamo una compagnia di social media che vuole tenere unite le persone! :)"}</p>
		</div>
	);
}
