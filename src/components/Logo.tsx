import type React from "react";
import { LogoMark } from "./LogoMark";

export const Logo: React.FC<{ className?: string; textClassName?: string }> = ({
	className = "h-8 w-auto",
	textClassName = "text-foreground",
}) => {
	return (
		<div className="flex items-center gap-2">
			<LogoMark className={`${className} text-primary shrink-0`} />
			<div
				className={`font-serif text-[1.15rem] font-semibold tracking-wide leading-tight flex flex-col justify-center ${textClassName}`}
			>
				<span className="text-primary leading-none">Akanors</span>
				<span className="block text-[0.62rem] font-sans font-light tracking-[0.18em] uppercase text-muted-foreground leading-none mt-1">
					Ventures Ltd
				</span>
			</div>
		</div>
	);
};
