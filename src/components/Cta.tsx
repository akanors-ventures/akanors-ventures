import type React from "react";

export const Cta: React.FC = () => {
	return (
		<section className="py-28 px-8 text-center">
			<div className="max-w-2xl mx-auto reveal">
				<p className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-primary mb-3">
					Get Involved
				</p>

				<h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold leading-tight text-foreground mb-6">
					Partner with the
					<br />
					<em className="not-italic text-primary">Akanors Ecosystem</em>
				</h2>

				<p className="text-[0.9rem] text-muted-foreground leading-relaxed max-w-xl mx-auto mb-10">
					Whether you are an Islamic bank, development finance institution,
					agribusiness buyer, or community leader — there is a place for you
					within the Akanors ecosystem.
				</p>

				<div className="flex flex-wrap gap-4 justify-center">
					<a
						href="https://wathiqah.akanors.com"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 text-[0.82rem] font-medium tracking-wider uppercase text-primary-foreground bg-primary px-8 py-4 rounded-sm hover:opacity-90 transition-all transform hover:-translate-y-px"
					>
						Visit Wathīqah →
					</a>
					<a
						href="mailto:info@akanors.com"
						className="inline-flex items-center gap-2 text-[0.82rem] font-medium tracking-wider uppercase text-muted-foreground border border-border px-8 py-4 rounded-sm hover:border-primary/60 hover:text-foreground transition-all transform hover:-translate-y-px"
					>
						Contact Us
					</a>
				</div>
			</div>
		</section>
	);
};
