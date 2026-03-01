import type React from "react";
import { Logo } from "./Logo";

export const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-card border-t border-border pt-12 md:pt-16 pb-8 px-4 sm:px-8 md:px-16 transition-colors">
			<div className="max-w-6xl mx-auto">
				<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 pb-10 md:pb-12 border-b border-border">
					<div className="col-span-2 md:col-span-1 lg:col-span-1">
						<Logo className="h-10" />
						<p className="text-[0.85rem] text-muted-foreground leading-relaxed max-w-xs mb-6">
							Building trust infrastructure for Nigeria's rural corridor through
							Sharia-compliant digital verification and agricultural finance.
						</p>
						<div className="text-[0.7rem] text-muted-foreground/60 tracking-wider">
							RC: 1735921
						</div>
					</div>

					<div>
						<h5 className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-foreground mb-6">
							Divisions
						</h5>
						<ul className="flex flex-col gap-3">
							<li>
								<a
									href="https://wathiqah.akanors.com"
									className="text-[0.82rem] text-muted-foreground hover:text-primary transition-colors"
								>
									Wathīqah
								</a>
							</li>
							<li>
								<a
									href="#divisions"
									className="text-[0.82rem] text-muted-foreground hover:text-primary transition-colors"
								>
									RAPI
								</a>
							</li>
							<li>
								<a
									href="#divisions"
									className="text-[0.82rem] text-muted-foreground hover:text-primary transition-colors"
								>
									Livestock Enterprise
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h5 className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-foreground mb-6">
							Company
						</h5>
						<ul className="flex flex-col gap-3">
							<li>
								<a
									href="#ecosystem"
									className="text-[0.82rem] text-muted-foreground hover:text-primary transition-colors"
								>
									Our Ecosystem
								</a>
							</li>
							<li>
								<a
									href="#compliance"
									className="text-[0.82rem] text-muted-foreground hover:text-primary transition-colors"
								>
									Sharia Governance
								</a>
							</li>
							<li>
								<a
									href="/impact-report"
									className="text-[0.82rem] text-muted-foreground hover:text-primary transition-colors"
								>
									Impact Report
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h5 className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-foreground mb-6">
							Legal
						</h5>
						<ul className="flex flex-col gap-3">
							<li>
								<a
									href="/privacy"
									className="text-[0.82rem] text-muted-foreground hover:text-primary transition-colors"
								>
									Privacy Policy
								</a>
							</li>
							<li>
								<a
									href="/terms"
									className="text-[0.82rem] text-muted-foreground hover:text-primary transition-colors"
								>
									Terms of Service
								</a>
							</li>
							<li>
								<a
									href="mailto:info@akanors.com"
									className="text-[0.82rem] text-muted-foreground hover:text-primary transition-colors"
								>
									Contact Us
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-8">
					<div className="text-[0.72rem] text-muted-foreground/60">
						© {currentYear} Akanors Ventures Ltd. All rights reserved.
					</div>
					<div className="flex items-center gap-2 text-[0.72rem] text-primary/60 font-medium">
						<span className="w-2 h-2 rounded-full bg-primary/40" />
						Sharia Certified Ecosystem
					</div>
				</div>
			</div>
		</footer>
	);
};
