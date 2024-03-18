import Countdown from "@hackhub/components/countdown";
import { motion } from "framer-motion";

export default function Home() {
	const loadingAnimation = {
		initial: {
			opacity: 0,
			scale: 0.8,
			transition: { duration: 3, ease: "easeInOut" },
		},
		animate: {
			opacity: 1,
			scale: 1,
			transition: { duration: 3, ease: "easeInOut" },
		},
	};

	const comingSoonAnimation = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
		delay: 10,
	};

	return (
		<motion.section
			className="min-h-screen flex flex-col items-center justify-center bg-[#03091E]"
			initial="initial"
			animate="animate"
			variants={loadingAnimation}
		>
			<motion.section className="mt-10 font-offbittrialdot text-[75px] sm:text-6xl md:text-8xl gap-4 pr-72 space-y-[-20px]">
				<section className="flex gap-5">
					<p className="text-left text-[#EAEAEA]">IEEE</p>
					<p className="text-[#CF1259]"> COMPUTER SOCIETY</p>
				</section>
				<p className="text-left text-[#7161EF]">WELCOMES YOU...</p>
			</motion.section>
			<motion.section className="font-glitch text-[10rem] sm:text-6xl md:text-8xl gap-4 w-screen flex justify-center">
				<p className="text-[#7161EF] hack-shadow">Hack</p>
				<p className="text-[#CF1259] hub-shadow">Hub</p>
				<p className="text-white text-8xl md:text-6xl sm:text-4xl relative top-28 -left-16 my-2 z-2">
					24
				</p>
			</motion.section>
			<motion.section className="font-offbittrialbold text-[36px] sm:text-6xl md:text-8xl flex gap-4">
				<p className="text-[#EAEAEA]">IEEE Computer Society's</p>
				<p className="text-[#CF1259]">FLAGSHIP</p>
				<p className="text-[#EAEAEA]">Hackathon</p>
			</motion.section>
			<Countdown
				year={2024}
				month={3}
				date={31}
				hour={8}
				minutes={0}
				seconds={0}
			/>
			hello
		</motion.section>
	);
}
