import Countdown from "@hackhub/components/countdown";

import { motion } from "framer-motion";
import { Space_Grotesk, Space_Mono, Montserrat } from "next/font/google";

import React from "react";


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
				className="min-h-screen w-full flex flex-col items-center justify-center bg-[#03091E] overflow-x-hidden"
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
					className="relative font-glitch text-[10rem] sm:text-6xl md:text-8xl gap-4 w-screen flex justify-center"
				>


					<img
						src="/x_white_bg.svg"
						className="absolute left-[12rem] top-[-2rem] w-[10rem]"
					></img>
					<img
						src="/o_left_facing_red.svg"
						className="absolute left-0 top-[-22rem]"
					></img>
					<img
						src="/o_red_whiteborder.svg"
						className="absolute right-0 w-[10rem]"
					></img>
					<img
						src="/o_red_whiteborder.svg"
						className="absolute right-0 w-[10rem]"
					></img>
					<img
						src="/o_red_whiteborder.svg"
						className="absolute right-0 w-[10rem]"
					></img>
					<img
						src="/x_purple_whiteborder.svg"
						className="absolute right-[30rem] z-0"
					></img>
                    <img
                        src="/dots_purple.svg"
                        className="absolute right-[16rem] top-[-10rem] z-0"
                    ></img>
                    <img
                        src="/dots_white.svg"
                        className="absolute right-[13rem] top-[-12rem] z-0"
                    ></img>
                    <img
                        src="/left_arrow_purple.svg"
                        className="absolute left-0 bottom-[-4rem] z-0"
                    ></img>
                    <img
                        src="/right_arrow_white.svg"
                        className="absolute left-[5rem] bottom-[-10rem] z-0"
                    ></img>
                    <img
                        src="/x_purple.svg"
                        className="absolute right-[15rem] bottom-[-12rem] w-[6rem] z-0"
                    ></img>

					<p className="text-custom_lightblue hack-shadow">Hack</p>
					<p className="text-custom_red hub-shadow z-10">Hub</p>


					<p className="text-white text-8xl md:text-6xl sm:text-4xl relative top-28 -left-16 my-2 z-20">
						24
					</p>


				</motion.section>
				<motion.section className="font-offbittrialbold text-[36px] sm:text-6xl md:text-8xl flex gap-4">
					<p className="text-custom_white">IEEE Computer Society's</p>
					<p className="text-custom_red">FLAGSHIP</p>
					<p className="text-custom_white">Hackathon</p>
				</motion.section>
				<motion.section className="w-full flex justify-center"
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
					<section className="text-white">About &nbsp;</section>
					<section className="text-purple">Hack</section>
					<section className="text-red">Hub</section>
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
