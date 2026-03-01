import { ChevronRight } from "lucide-react";
import type React from "react";
import { siteContent } from "../content";
import { LogoMark } from "./LogoMark";

export const Hero: React.FC = () => {
	const { hero } = siteContent;

	return (
		<section className="relative min-h-screen flex flex-col items-center justify-center pt-28 md:pt-36 pb-16 md:pb-24 px-4 sm:px-8 text-center overflow-hidden hero-glow">
			{/* Decorative background grid */}
			<div
				className="absolute inset-0 opacity-10"
				style={{
					backgroundImage:
						"linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
					backgroundSize: "80px 80px",
					maskImage:
						"radial-gradient(ellipse 60% 50% at 50% 50%, black 30%, transparent 100%)",
				}}
			/>

			<div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
				<div className="inline-flex items-center gap-2 text-[0.72rem] font-medium tracking-[0.18em] uppercase text-primary border border-primary/20 bg-primary/10 px-4 py-1.5 rounded-full mb-8 md:mb-10 animate-fade-up">
					<span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--primary)] animate-pulse" />
					{hero.badge}
				</div>

				<div
					className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12 animate-fade-up"
					style={{ animationDelay: "0.1s" }}
				>
					<LogoMark className="h-[44px] w-auto md:h-[70px] text-primary shrink-0" />
					<div className="text-left flex flex-col justify-center">
						<div className="font-serif text-3xl md:text-5xl font-semibold tracking-tight leading-none mb-1">
							<span className="text-primary">Akanors</span>
						</div>
						<div className="text-[0.8rem] md:text-lg font-sans font-light tracking-[0.3em] uppercase text-muted-foreground leading-none">
							Ventures Ltd
						</div>
					</div>
				</div>

				<h1
					className="font-serif text-[clamp(2rem,6vw,5rem)] font-semibold leading-[1.1] tracking-tight text-foreground mb-6 animate-fade-up"
					style={{ animationDelay: "0.2s" }}
				>
					Building <em className="italic text-primary not-italic">Trust</em>{" "}
					Across Technology,
					<br className="hidden sm:block" /> Agriculture & Enterprise
				</h1>

				<p
					className="text-base md:text-xl font-light text-muted-foreground max-w-2xl mx-auto leading-[1.7] animate-fade-up"
					style={{ animationDelay: "0.35s" }}
				>
					{hero.tagline}
				</p>

				<p
					className="text-xl md:text-2xl text-primary/70 tracking-widest mt-6 md:mt-8 animate-fade-up"
					style={{ animationDelay: "0.45s" }}
				>
					{hero.arabic}
				</p>

				<div
					className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mt-10 md:mt-12 w-full sm:w-auto animate-fade-up"
					style={{ animationDelay: "0.55s" }}
				>
					<a
						href="#divisions"
						className="inline-flex items-center justify-center gap-2 text-[0.82rem] font-medium tracking-wider uppercase text-background bg-primary px-8 py-4 rounded-sm hover:opacity-90 transition-all transform hover:-translate-y-px"
					>
						{hero.primaryCta}
					</a>
					<a
						href={hero.ctaLink}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center justify-center gap-2 text-[0.82rem] font-medium tracking-wider uppercase text-muted-foreground border border-border px-8 py-4 rounded-sm hover:border-primary/60 hover:text-foreground transition-all transform hover:-translate-y-px"
					>
						{hero.secondaryCta}
					</a>
				</div>
			</div>

			{/* Scroll Hint */}
			<div
				className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/60 text-[0.7rem] tracking-[0.12em] uppercase animate-fade-up"
				style={{ animationDelay: "1s" }}
			>
				<span>Scroll</span>
				<ChevronRight size={14} className="rotate-90 animate-bounce" />
			</div>
		</section>
	);
};
