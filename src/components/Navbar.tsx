import { Laptop, Moon, Sun } from "lucide-react";
import type React from "react";
import { Logo } from "./Logo";
import { useTheme } from "./ThemeContext";

export const Navbar: React.FC = () => {
	const { theme, setTheme } = useTheme();

	return (
		<nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 py-5 md:px-16 bg-background/85 backdrop-blur-2xl border-b border-border transition-colors">
			<a href="/" className="hover:opacity-80 transition-opacity">
				<Logo />
			</a>

			<div className="flex items-center gap-10">
				<ul className="hidden md:flex items-center gap-10 list-none">
					<li>
						<a
							href="#divisions"
							className="text-[0.8rem] font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
						>
							Our Divisions
						</a>
					</li>
					<li>
						<a
							href="#ecosystem"
							className="text-[0.8rem] font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
						>
							Ecosystem
						</a>
					</li>
					<li>
						<a
							href="#compliance"
							className="text-[0.8rem] font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
						>
							Compliance
						</a>
					</li>
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
			</div>
		</nav>
	);
};
