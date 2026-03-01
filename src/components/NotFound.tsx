import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type React from "react";

export const NotFound: React.FC = () => {
	return (
		<section className="relative min-h-screen flex flex-col items-center justify-center pt-36 pb-24 px-8 text-center overflow-hidden">
			{/* Decorative background grid — mirrors Hero */}
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

			{/* Ambient glow */}
			<div
				className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[min(600px,100vw)] h-[600px] pointer-events-none"
				style={{
					background:
						"radial-gradient(ellipse, color-mix(in oklch, var(--primary) 8%, transparent) 0%, transparent 70%)",
				}}
			/>

			<div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
				{/* 404 display */}
				<div className="font-serif text-[clamp(6rem,18vw,11rem)] font-semibold leading-none tracking-tight text-primary/20 select-none mb-2 animate-fade-up">
					404
				</div>

				<div
					className="inline-flex items-center gap-2 text-[0.72rem] font-medium tracking-[0.18em] uppercase text-primary border border-primary/20 bg-primary/10 px-4 py-1.5 rounded-full mb-8 animate-fade-up"
					style={{ animationDelay: "0.1s" }}
				>
					<span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
					Page Not Found
				</div>

				<h1
					className="font-serif text-[clamp(2rem,5vw,3.2rem)] font-semibold leading-tight tracking-tight text-foreground mb-4 animate-fade-up"
					style={{ animationDelay: "0.2s" }}
				>
					This page doesn't <em className="not-italic text-primary">exist.</em>
				</h1>

				<p
					className="text-[0.95rem] font-light text-muted-foreground max-w-md leading-relaxed animate-fade-up"
					style={{ animationDelay: "0.3s" }}
				>
					The page you're looking for may have moved, or the URL may be
					incorrect. Head back to the Akanors homepage or explore our live
					platform.
				</p>

				<div
					className="flex flex-wrap gap-4 justify-center mt-10 animate-fade-up"
					style={{ animationDelay: "0.4s" }}
				>
					<Link
						to="/"
						className="inline-flex items-center gap-2 text-[0.82rem] font-medium tracking-wider uppercase text-background bg-primary px-8 py-4 rounded-sm hover:opacity-90 transition-all transform hover:-translate-y-px"
					>
						Back to Home
						<ChevronRight size={14} strokeWidth={2.5} />
					</Link>
					<a
						href="https://wathiqah.akanors.com"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 text-[0.82rem] font-medium tracking-wider uppercase text-muted-foreground border border-border px-8 py-4 rounded-sm hover:border-primary/60 hover:text-foreground transition-all transform hover:-translate-y-px"
					>
						Open Wathīqah ↗
					</a>
				</div>
			</div>
		</section>
	);
};
