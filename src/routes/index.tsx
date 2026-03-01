import { createFileRoute } from "@tanstack/react-router";
import { Compliance } from "../components/Compliance";
import { Cta } from "../components/Cta";
import { Divisions } from "../components/Divisions";
import { Ecosystem } from "../components/Ecosystem";
import { Hero } from "../components/Hero";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<>
			<Hero />
			<Divisions />
			<Ecosystem />
			<Compliance />
			<Cta />
		</>
	);
}
