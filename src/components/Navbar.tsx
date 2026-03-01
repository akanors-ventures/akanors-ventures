import { Laptop, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { useTheme } from "./ThemeContext";

export const Navbar: React.FC = () => {
	const { theme, setTheme } = useTheme();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const navLinks = [
		{ href: "#divisions", label: "Our Divisions" },
		{ href: "#ecosystem", label: "Ecosystem" },
		{ href: "#compliance", label: "Compliance" },
	];

	const closeMobileMenu = () => setMobileMenuOpen(false);

	return (
		<nav className="fixed top-0 left-0 right-0 z-[100] transition-colors">
			{/* Main bar */}
			<div className="flex items-center justify-between px-4 sm:px-8 md:px-16 py-4 md:py-5 bg-background/85 backdrop-blur-2xl border-b border-border">
				<a href="/" className="hover:opacity-80 transition-opacity">
					<Logo />
				</a>

				<div className="flex items-center gap-3 md:gap-10">
					{/* Desktop nav links */}
					<ul className="hidden md:flex items-center gap-10 list-none">
						{navLinks.map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									className="text-[0.8rem] font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
								>
									{link.label}
								</a>
							</li>
						))}
						<li>
							<a
								href="https://wathiqah.akanors.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[0.78rem] font-semibold tracking-widest uppercase text-primary border border-primary/40 px-5 py-2 rounded-sm hover:bg-primary/10 transition-all"
							>
								Open Wathīqah ↗
							</a>
						</li>
					</ul>

					{/* Theme Toggle */}
					<div className="flex items-center bg-muted rounded-full p-1 border border-border">
						<button
							type="button"
							onClick={() => setTheme("light")}
							className={`p-1.5 rounded-full transition-all ${theme === "light" ? "bg-background shadow-sm text-primary" : "text-muted-foreground hover:text-foreground"}`}
							aria-label="Light mode"
						>
							<Sun size={14} />
						</button>
						<button
							type="button"
							onClick={() => setTheme("dark")}
							className={`p-1.5 rounded-full transition-all ${theme === "dark" ? "bg-background shadow-sm text-primary" : "text-muted-foreground hover:text-foreground"}`}
							aria-label="Dark mode"
						>
							<Moon size={14} />
						</button>
						<button
							type="button"
							onClick={() => setTheme("system")}
							className={`p-1.5 rounded-full transition-all ${theme === "system" ? "bg-background shadow-sm text-primary" : "text-muted-foreground hover:text-foreground"}`}
							aria-label="System mode"
						>
							<Laptop size={14} />
						</button>
					</div>

					{/* Mobile hamburger */}
					<button
						type="button"
						onClick={() => setMobileMenuOpen((v) => !v)}
						className="md:hidden p-2 -mr-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
						aria-label="Toggle menu"
						aria-expanded={mobileMenuOpen}
					>
						{mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
					</button>
				</div>
			</div>

			{/* Mobile menu panel */}
			{mobileMenuOpen && (
				<div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
					<ul className="flex flex-col px-4 sm:px-8 py-5 gap-1 list-none">
						{navLinks.map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									onClick={closeMobileMenu}
									className="block py-3 text-[0.85rem] font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors border-b border-border/50"
								>
									{link.label}
								</a>
							</li>
						))}
						<li className="pt-3">
							<a
								href="https://wathiqah.akanors.com"
								target="_blank"
								rel="noopener noreferrer"
								onClick={closeMobileMenu}
								className="inline-flex text-[0.82rem] font-semibold tracking-widest uppercase text-primary border border-primary/40 px-5 py-2.5 rounded-sm hover:bg-primary/10 transition-all"
							>
								Open Wathīqah ↗
							</a>
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
};
