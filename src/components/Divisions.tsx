import { ChevronRight } from "lucide-react";
import React from "react";
import { siteContent } from "../content";

export const Divisions: React.FC = () => {
	const { divisions } = siteContent;

	return (
		// biome-ignore lint/correctness/useUniqueElementIds: static in-page anchor, rendered once
		<section
			id="divisions"
			className="px-8 py-24 bg-muted/30 border-y border-border transition-colors"
		>
			<div className="max-w-6xl mx-auto">
				<div className="grid md:grid-cols-2 gap-16 items-center mb-16">
					<div>
						<p className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-primary mb-3">
							{divisions.label}
						</p>
						<h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-foreground">
							{divisions.title.split(",").map((part) => (
								<React.Fragment key={part.trim()}>
									{part.includes("One") ? (
										<em className="italic text-primary not-italic">{part}</em>
									) : (
										part
									)}
									{!part.includes("One") && <br />}
								</React.Fragment>
							))}
						</h2>
					</div>
					<div>
						<p className="text-[0.95rem] text-muted-foreground leading-relaxed max-w-lg">
							{divisions.description}
						</p>
					</div>
				</div>

				<div className="grid md:grid-cols-3 gap-[1px] bg-border border border-border rounded-3xl overflow-hidden reveal">
					{divisions.items.map((item) => (
						<a
							key={item.id}
							href={item.link}
							target={item.link.startsWith("http") ? "_blank" : undefined}
							rel={
								item.link.startsWith("http") ? "noopener noreferrer" : undefined
							}
							className={`group relative flex flex-col p-10 bg-card hover:bg-muted/50 transition-all ${item.link === "#" ? "pointer-events-none" : ""}`}
						>
							{/* Top border highlight */}
							<div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

							<div className="w-12 h-12 flex items-center justify-center text-xl bg-primary/10 border border-primary/20 rounded-lg mb-8">
								{item.icon}
							</div>

							<div className="flex items-center gap-1.5 text-[0.65rem] font-semibold tracking-widest uppercase mb-4">
								<span
									className={`w-1.5 h-1.5 rounded-full ${item.status === "Live" ? "bg-primary shadow-[0_0_6px_var(--primary)] animate-pulse" : "bg-gold"}`}
								/>
								<span
									className={
										item.status === "Live" ? "text-primary" : "text-gold"
									}
								>
									{item.status}
								</span>
							</div>

							<h3 className="font-serif text-2xl font-semibold text-foreground mb-2 leading-tight">
								{item.name}
							</h3>

							<div className="text-[0.72rem] font-medium tracking-wider uppercase text-primary/60 mb-4">
								{item.sub}
							</div>

							<p className="text-[0.875rem] text-muted-foreground leading-relaxed flex-1">
								{item.desc}
							</p>

							<div className="flex flex-wrap gap-1.5 mt-5">
								{item.tags.map((tag) => (
									<span
										key={tag}
										className="text-[0.65rem] tracking-wider text-muted-foreground/70 border border-primary/10 rounded px-2 py-0.5 bg-primary/5"
									>
										{tag}
									</span>
								))}
							</div>

							<div className="inline-flex items-center gap-2 text-[0.75rem] font-semibold tracking-widest uppercase text-primary mt-8 group-hover:gap-3 transition-all">
								{item.status === "Live" ? "Visit Platform" : item.status}{" "}
								<ChevronRight size={12} strokeWidth={3} />
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
};
