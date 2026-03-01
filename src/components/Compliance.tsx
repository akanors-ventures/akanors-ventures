import type React from "react";
import { siteContent } from "../content";

export const Compliance: React.FC = () => {
	const { compliance } = siteContent;

	return (
		// biome-ignore lint/correctness/useUniqueElementIds: static in-page anchor, rendered once
		<section
			id="compliance"
			className="px-4 sm:px-8 py-16 md:py-24 bg-muted/30 border-y border-border transition-colors"
		>
			<div className="max-w-6xl mx-auto">
				<p className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-primary mb-3">
					{compliance.label}
				</p>
				<h2 className="font-serif text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-tight text-foreground mb-6">
					{compliance.title}
					<br />
					<em className="italic text-primary not-italic">
						{compliance.titleHighlight}
					</em>
				</h2>
				<p className="text-[0.95rem] text-muted-foreground leading-relaxed max-w-xl mb-12 md:mb-16">
					{compliance.description}
				</p>

				<div className="bg-card border border-border rounded-3xl p-6 sm:p-8 md:p-16 grid md:grid-cols-2 gap-10 md:gap-16 items-center reveal">
					<div>
						<div className="text-4xl md:text-5xl lg:text-7xl leading-[1.8] text-primary/30 text-right dir-rtl font-light mb-8 select-none">
							{compliance.arabicQuote.split("\n").map((line) => (
								<div key={line}>{line}</div>
							))}
						</div>
						<p className="text-[0.85rem] text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-6">
							{compliance.quoteSub}
						</p>
					</div>

					<div>
						<h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-4">
							{compliance.contractsTitle}
						</h3>
						<p className="text-[0.8rem] text-muted-foreground mb-8 md:mb-10">
							{compliance.contractsSub}
						</p>

						<div className="grid sm:grid-cols-2 gap-4">
							{compliance.contracts.map((contract) => (
								<div
									key={contract.latin}
									className="bg-muted/50 border border-border rounded-xl p-4 md:p-5 hover:border-primary/30 transition-colors group"
								>
									<div className="flex justify-between items-start mb-1">
										<div className="text-[0.72rem] font-bold tracking-widest uppercase text-foreground group-hover:text-primary transition-colors">
											{contract.latin}
										</div>
										<div className="text-lg text-primary/60 font-medium">
											{contract.arabic}
										</div>
									</div>
									<div className="text-[0.72rem] text-muted-foreground leading-relaxed">
										{contract.desc}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Values Strip */}
				<div
					className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-border border border-border rounded-2xl overflow-hidden mt-12 md:mt-20 reveal"
					style={{ animationDelay: "0.3s" }}
				>
					{compliance.stats.map((item) => (
						<div
							key={item.label}
							className="bg-card p-6 md:p-8 text-center group hover:bg-muted/30 transition-colors"
						>
							<div className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
								{item.value}
							</div>
							<div className="text-[0.7rem] md:text-[0.75rem] font-medium tracking-widest uppercase text-muted-foreground">
								{item.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
