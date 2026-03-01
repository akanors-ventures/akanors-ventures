import type React from "react";
import { siteContent } from "../content";

export const Ecosystem: React.FC = () => {
	const { ecosystem } = siteContent;

	return (
		// biome-ignore lint/correctness/useUniqueElementIds: static in-page anchor, rendered once
		<section
			id="ecosystem"
			className="px-8 py-24 bg-background transition-colors overflow-hidden"
		>
			<div className="max-w-6xl mx-auto">
				<p className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-primary mb-3 text-center">
					{ecosystem.label}
				</p>
				<h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-foreground text-center mb-16">
					Not Four Businesses.
					<br />
					<em className="not-italic text-primary">One System.</em>
				</h2>

				<div className="grid lg:grid-cols-2 gap-20 items-start">
					{/* Ecosystem visual diagram */}
					<div className="relative h-[400px] w-full max-w-[500px] mx-auto reveal">
						{/* SVG connecting lines — use style prop so CSS vars resolve correctly */}
						<svg
							className="absolute inset-0 w-full h-full pointer-events-none"
							viewBox="0 0 400 400"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Ecosystem connection diagram</title>
							{/* Top — Wathīqah */}
							<line
								x1="200"
								y1="200"
								x2="200"
								y2="64"
								style={{
									stroke:
										"color-mix(in oklch, var(--primary) 30%, transparent)",
								}}
								strokeWidth="1.5"
								strokeDasharray="4 4"
							/>
							{/* Right — Agriculture */}
							<line
								x1="200"
								y1="200"
								x2="376"
								y2="200"
								style={{
									stroke:
										"color-mix(in oklch, var(--primary) 30%, transparent)",
								}}
								strokeWidth="1.5"
								strokeDasharray="4 4"
							/>
							{/* Bottom — RAPI */}
							<line
								x1="200"
								y1="200"
								x2="200"
								y2="336"
								style={{
									stroke:
										"color-mix(in oklch, var(--primary) 30%, transparent)",
								}}
								strokeWidth="1.5"
								strokeDasharray="4 4"
							/>
							{/* Left — Akanors Labs */}
							<line
								x1="200"
								y1="200"
								x2="24"
								y2="200"
								style={{
									stroke:
										"color-mix(in oklch, var(--primary) 30%, transparent)",
								}}
								strokeWidth="1.5"
								strokeDasharray="4 4"
							/>

							<circle
								cx="200"
								cy="64"
								r="4"
								style={{
									fill: "color-mix(in oklch, var(--primary) 60%, transparent)",
								}}
							/>
							<circle
								cx="376"
								cy="200"
								r="4"
								style={{
									fill: "color-mix(in oklch, var(--primary) 60%, transparent)",
								}}
							/>
							<circle
								cx="200"
								cy="336"
								r="4"
								style={{
									fill: "color-mix(in oklch, var(--primary) 60%, transparent)",
								}}
							/>
							<circle
								cx="24"
								cy="200"
								r="4"
								style={{
									fill: "color-mix(in oklch, var(--primary) 60%, transparent)",
								}}
							/>
							<circle
								cx="200"
								cy="200"
								r="6"
								style={{
									fill: "color-mix(in oklch, var(--primary) 40%, transparent)",
									stroke:
										"color-mix(in oklch, var(--primary) 80%, transparent)",
								}}
								strokeWidth="1.5"
							/>
						</svg>

						{/* Centre node — Akanors */}
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-muted border-2 border-primary/40 rounded-full flex items-center justify-center text-center shadow-2xl z-10 transition-colors">
							<div className="font-serif text-lg font-bold leading-tight text-primary">
								Akanors
								<br />
								Ecosystem
							</div>
						</div>

						{/* Top — Wathīqah */}
						<div className="absolute top-[4%] left-1/2 -translate-x-1/2 w-32 h-24 bg-card border border-border rounded-2xl flex flex-col items-center justify-center gap-1 shadow-xl hover:border-primary/50 transition-all group">
							<span className="text-2xl group-hover:scale-110 transition-transform">
								📋
							</span>
							<span className="font-serif text-sm font-semibold text-foreground">
								Wathīqah
							</span>
							<span className="text-[0.6rem] tracking-widest uppercase text-muted-foreground">
								Digital Ledger
							</span>
						</div>

						{/* Right — Agriculture & Livestock */}
						<div className="absolute top-1/2 right-[2%] -translate-y-1/2 w-32 h-24 bg-card border border-border rounded-2xl flex flex-col items-center justify-center gap-1 shadow-xl hover:border-primary/50 transition-all group">
							<span className="text-2xl group-hover:scale-110 transition-transform">
								🌱
							</span>
							<span className="font-serif text-sm font-semibold text-foreground">
								Agriculture
							</span>
							<span className="text-[0.6rem] tracking-widest uppercase text-muted-foreground">
								& Livestock
							</span>
						</div>

						{/* Bottom — RAPI */}
						<div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 w-32 h-24 bg-card border border-border rounded-2xl flex flex-col items-center justify-center gap-1 shadow-xl hover:border-primary/50 transition-all group">
							<span className="text-2xl group-hover:scale-110 transition-transform">
								🌾
							</span>
							<span className="font-serif text-sm font-semibold text-foreground">
								RAPI
							</span>
							<span className="text-[0.6rem] tracking-widest uppercase text-muted-foreground">
								Rural Payments
							</span>
						</div>

						{/* Left — Akanors Labs */}
						<div className="absolute top-1/2 left-[2%] -translate-y-1/2 w-32 h-24 bg-card border border-border rounded-2xl flex flex-col items-center justify-center gap-1 shadow-xl hover:border-primary/50 transition-all group">
							<span className="text-2xl group-hover:scale-110 transition-transform">
								💡
							</span>
							<span className="font-serif text-sm font-semibold text-foreground">
								Akanors Labs
							</span>
							<span className="text-[0.6rem] tracking-widest uppercase text-muted-foreground">
								Innovation
							</span>
						</div>
					</div>

					{/* Points list */}
					<div
						className="flex flex-col gap-12 reveal"
						style={{ animationDelay: "0.2s" }}
					>
						{ecosystem.points.map((point) => (
							<div key={point.title} className="flex gap-6 items-start group">
								<div className="w-12 h-12 shrink-0 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center text-lg group-hover:bg-primary/20 transition-colors">
									{point.icon}
								</div>
								<div>
									<h4 className="font-semibold text-foreground mb-2.5 leading-tight group-hover:text-primary transition-colors">
										{point.title}
									</h4>
									<p className="text-[0.85rem] text-muted-foreground leading-relaxed">
										{point.desc}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
