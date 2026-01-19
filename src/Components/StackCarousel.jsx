import React from "react";

import Code from "../assets/imgs/stacks/code.png";
import Css from "../assets/imgs/stacks/css-3.png";
import Docker from "../assets/imgs/stacks/docker.png";
import Aws from "../assets/imgs/stacks/icons8-amazon-aws.png";
import Git from "../assets/imgs/stacks/git.png";
import Html from "../assets/imgs/stacks/html.png";
import Tailwind from "../assets/imgs/stacks/icons8-tailwind-css-48.png";
import Js from "../assets/imgs/stacks/java-script.png";
import React_icon from "../assets/imgs/stacks/physics.png";
import Python from "../assets/imgs/stacks/python.png";

export default function StackCarousel() {
	const stacks = [
		{ name: "Code", src: Code },
		{ name: "CSS 3", src: Css },
		{ name: "Docker", src: Docker },
		{ name: "AWS", src: Aws },
		{ name: "Git", src: Git },
		{ name: "HTML", src: Html },
		{ name: "Tailwind CSS", src: Tailwind },
		{ name: "JavaScript", src: Js },
		{ name: "React", src: React_icon },
		{ name: "Python", src: Python },
	];

	return (
		<section className="w-full py-10">
			<div className="relative overflow-hidden">
				<div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10" />

				<div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10" />

				<div className="flex w-max gap-14 animate-carousel hover:[animation-play-state:paused]">
					{[...stacks, ...stacks].map((stack, index) => (
						<div
							key={index}
							className="flex flex-col items-center justify-center min-w-[120px]">
							<img
								src={stack.src}
								alt={stack.name}
								title={stack.name}
								className="h-12 w-auto grayscale hover:grayscale-0 transition duration-300"
							/>
							<span className="mt-2 text-sm text-gray-600 dark:text-gray-400">
								{stack.name}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
