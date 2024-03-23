import { motion } from "framer-motion";
import { Space_Grotesk, Space_Mono } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-space-grotesk",
});

const spaceMono = Space_Mono({
	subsets: ["latin"],
	variable: "--font-space-mono",
	weight: "400",
});

export default function Sponsors(): JSX.Element {
	return (
		<>
			<motion.section
				id="sponsors"
				className="relative mt-10 w-full flex py-20 font-bold text-[5rem] min-h-screen"
			>
				<motion.img
					initial={{ opacity: 1 }}
					animate={{ opacity: [1, 0.7, 0.3, 0.5, 0, 0.5, 0.3, 0.7, 1] }} // Animate opacity from 1 to 0
					transition={{ duration: 1, repeat: Infinity, yoyo: Infinity }} // Set transition duration and repeat infinitely
					src="/dots_full_red.svg"
					className="absolute left-[0rem] top-[0rem] w-[18rem] z-0"
				></motion.img>
				<motion.img
					initial={{ opacity: 1 }}
					animate={{ opacity: [1, 0.7, 0.3, 0.5, 0, 0.5, 0.3, 0.7, 1] }} // Animate opacity from 1 to 0
					transition={{ duration: 0.8, repeat: Infinity, yoyo: Infinity }} // Set transition duration and repeat infinitely
					src="/dots_full_white.svg"
					className="absolute left-[3rem] top-[-4rem] w-[22rem] z-0"
				></motion.img>

				<div className="p-4 flex flex-col w-[80%] mx-auto items-center justify-center z-10">
					<section className={`flex py-4 ${spaceGrotesk.className}`}>
						<section className="text-custom_white">Sponsors</section>
					</section>
					<section
						className={`text-[1.2rem] font-normal self-start ${spaceMono.className}`}
					>
						ADD SPONSORS
					</section>
				</div>
			</motion.section>
		</>
	);
}
