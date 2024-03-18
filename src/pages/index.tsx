import Countdown from "@hackhub/components/countdown";
import { motion } from "framer-motion";
import { Space_Grotesk, Space_Mono, Montserrat } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-space-grotesk",
});

const spaceMono = Space_Mono({
	subsets: ["latin"],
	variable: "--font-space-mono",
	weight: "400",
});

const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
});

export default function Home() {
	const loadingAnimation = {
		initial: {
			opacity: 0,
			scale: 0.8,
			transition: { duration: 1, ease: "easeInOut" },
		},
		animate: {
			opacity: 1,
			scale: 1,
			transition: { duration: 1, ease: "easeInOut" },
		},
	};

	const comingSoonAnimation = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
		delay: 10,
	};

	return (
		<>
			<motion.section
				className="min-h-screen flex flex-col items-center justify-center bg-[#03091E]"
				initial="initial"
				animate="animate"
				variants={loadingAnimation}
			>
				<motion.section className="mt-2 font-offbittrialdot text-[4rem] sm:text-6xl md:text-8xl gap-4 pr-72 space-y-[-20px] pt-6">
					<section className="flex gap-5">
						<p className="text-left text-[#EAEAEA]">IEEE</p>
						<p className="text-[#CF1259]"> COMPUTER SOCIETY</p>
					</section>
					<p className="text-left text-[#7161EF]">WELCOMES YOU...</p>
				</motion.section>
				<motion.section
					initial={{ opacity: 0, scale: 0.2 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 3,
						delay: 0.3,
						ease: "easeInOut",
					}}
					className="font-glitch text-[9rem] sm:text-6xl md:text-8xl gap-4 w-screen flex justify-center"
				>
					<p className="text-[#7161EF] hack-shadow">Hack</p>
					<p className="text-[#CF1259] hub-shadow">Hub</p>
					<p className="text-white text-8xl md:text-6xl sm:text-4xl relative top-28 -left-16 my-2">
						24
					</p>
				</motion.section>
				<motion.section className="font-offbittrialbold text-[2rem] sm:text-6xl md:text-8xl flex gap-4">
					<p className="text-[#EAEAEA]">IEEE Computer Society's</p>
					<p className="text-[#CF1259]">FLAGSHIP</p>
					<p className="text-[#EAEAEA]">Hackathon</p>
				</motion.section>
				<motion.section
					initial={{ opacity: 0, scale: 0.2 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 2,
						delay: 2,
						ease: "easeInOut",
					}}
				>
					<Countdown
						year={2024}
						month={3}
						date={31}
						hour={8}
						minutes={0}
						seconds={0}
					/>
				</motion.section>
			</motion.section>
			<motion.section className="min-h-screen grid items-center ml-[1em] font-bold text-[5rem] justify-items-start mr-[5em] mt-[-1em]">
				<section className={`flex py-4 self-end ${spaceGrotesk.className}`}>
					<section className="text-[#EAEAEA]">About &nbsp;</section>
					<section className="text-[#7161EF]">Hack</section>
					<section className="text-[#CF1259]">Hub</section>
				</section>
				<section
					className={`text-[1.2rem] font-normal self-start ${spaceMono.className}`}
				>
					Welcome to IEEE Computer Society VIT Chennai, where innovation meets
					impact. This event is a vibrant arena for budding technologists,
					professionals, and students to collaborate, create, and compete in the
					spirit of advancing technology. As part of IEEE CompSoc's student
					chapter, our commitment to technological breakouts, our hackathon
					challenges makes participants think critically and creatively. We
					provide a platform for you to turn your disruptive ideas into
					prototypes, and lastly prizes and recognition await. Join us for an
					exhilarating journey of learning, innovation, and competition. Unleash
					your potential with IEEE CompSoc.
				</section>
			</motion.section>
		</>
	);
}
