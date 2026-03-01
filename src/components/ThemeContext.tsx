import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
	theme: Theme;
	setTheme: (theme: Theme) => void;
	isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [theme, setTheme] = useState<Theme>(() => {
		if (typeof window !== "undefined") {
			return (localStorage.getItem("theme") as Theme) || "system";
		}
		return "system";
	});
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const root = window.document.documentElement;
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

		const updateTheme = () => {
			const actualTheme =
				theme === "system" ? (mediaQuery.matches ? "dark" : "light") : theme;

			setIsDark(actualTheme === "dark");

			if (actualTheme === "dark") {
				root.classList.add("dark");
			} else {
				root.classList.remove("dark");
			}
		};

		updateTheme();
		if (typeof window !== "undefined") {
			localStorage.setItem("theme", theme);
		}

		const listener = () => {
			if (theme === "system") updateTheme();
		};

		mediaQuery.addEventListener("change", listener);
		return () => mediaQuery.removeEventListener("change", listener);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme, isDark }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
