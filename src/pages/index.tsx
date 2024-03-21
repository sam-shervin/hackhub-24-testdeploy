import Countdown from "@hackhub/components/countdown";
import { motion } from "framer-motion";
import {
	Space_Grotesk,
	Space_Mono,
	Montserrat,
	Roboto,
} from "next/font/google";
import React from "react";
import { useState, useEffect } from "react";

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-space-grotesk",
});

const roboto = Roboto({
	subsets: ["latin"],
	variable: "--font-space-grotesk",
	weight: "400",
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
			{/* HOME PAGE */}

			<motion.section
				id="home"
				className="min-h-screen w-full flex flex-col items-center justify-center bg-[#03091E] overflow-x-hidden scroll-smooth"
				initial="initial"
				animate="animate"
				variants={loadingAnimation}
			>
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
					<motion.p
						initial={{ x: "0vw", y: "0vh", rotate: 0 }}
						animate={{
							x: ["-2vw", "2vw", "-2vw"], // Change x values for repeated motion
							y: ["-2vh", "2vh", "-2vh"], // Adjusted y values for variation
							rotate: [0, 360],
							// Adding rotation animation
						}}
						transition={{
							x: {
								duration: 30, // Increase duration for slower movement
								yoyo: Infinity,
								ease: "linear",

								repeat: Infinity,
							},
							y: {
								duration: 5, // Increase duration for slower movement
								yoyo: Infinity,
								ease: "easeInOut",
								repeat: Infinity, // Changed ease for smoother motion
							},
							rotate: {
								duration: 50, // Adjust duration for rotation speed
								yoyo: Infinity,
								ease: "linear",
								repeat: Infinity,
							},
						}}
						className={`${roboto.className} absolute left-[7rem] top-[-12rem] text-[18rem] z-1 gradient-border`}
					>
						×
					</motion.p>

					<motion.p
						initial={{ x: "0vw", y: "0vh", rotate: 0 }}
						animate={{
							x: ["-2vw", "2vw", "-2vw"], // Change x values for repeated motion
							y: ["-2vh", "2vh", "-2vh"], // Adjusted y values for variation
							rotate: [360, 0],
							// Adding rotation animation
						}}
						transition={{
							x: {
								duration: 30, // Increase duration for slower movement
								yoyo: Infinity,
								ease: "linear",

								repeat: Infinity,
							},
							y: {
								duration: 5, // Increase duration for slower movement
								yoyo: Infinity,
								ease: "easeInOut",
								repeat: Infinity, // Changed ease for smoother motion
							},
							rotate: {
								duration: 50, // Adjust duration for rotation speed
								yoyo: Infinity,
								ease: "linear",
								repeat: Infinity,
							},
						}}
						className={`${roboto.className} absolute right-[23rem] bottom-[-12rem] text-[12rem] white-border text-custom_lightblue z-0 gradient-border`}
					>
						×
					</motion.p>

					<motion.p
						initial={{ x: "0vw", y: "0vh", rotate: 0 }}
						animate={{
							x: ["-2vw", "2vw", "-2vw"],
						}}
						transition={{
							x: {
								duration: 6, // Increase duration for slower movement
								yoyo: Infinity,
								ease: "easeInOut",
								repeat: Infinity, // Changed ease for smoother motion
							},
						}}
						className="font-opensans font-black absolute text-[6rem] w-fit p-4 top-[-14rem] left-[28rem] white-border text-custom_red"
					>
						◯
					</motion.p>

					<motion.p
						initial={{ x: "0vw", y: "0vh", rotate: 0 }}
						animate={{
							x: ["1vw", "-1vw", "1vw"],
						}}
						transition={{
							x: {
								duration: 6, // Increase duration for slower movement
								yoyo: Infinity,
								ease: "easeInOut",
								repeat: Infinity, // Changed ease for smoother motion
							},
						}}
						className="font-opensans font-black absolute text-[4rem]  w-fit p-4 top-[-5rem] right-[50rem] white-border text-custom_red"
					>
						◯
					</motion.p>

					<motion.p
						initial={{ x: "0vw", y: "0vh", rotate: 0 }}
						animate={{
							y: ["5vh", "-5vh", "5vh"],
						}}
						transition={{
							y: {
								duration: 5, // Increase duration for slower movement
								yoyo: Infinity,
								ease: "easeInOut",
								repeat: Infinity, // Changed ease for smoother motion
							},
						}}
						className="font-opensans font-black absolute text-[12rem] right-0 w-fit p-4 top-[10rem] white-border text-custom_red"
					>
						◯
					</motion.p>

					<motion.img
						initial={{ opacity: 1 }}
						animate={{ opacity: [1, 0.7, 0.3, 0.5, 0, 0.5, 0.3, 0.7, 1] }} // Animate opacity from 1 to 0
						transition={{ duration: 1, repeat: Infinity, yoyo: Infinity }} // Set transition duration and repeat infinitely
						src="/dots_purple.svg"
						className="absolute right-[7rem] top-[-2rem] z-0"
					></motion.img>

					<motion.img
						initial={{ opacity: 1 }}
						animate={{ opacity: [1, 0.7, 0.3, 0.5, 0, 0.5, 0.3, 0.7, 1] }} // Animate opacity from 1 to 0
						transition={{ duration: 0.8, repeat: Infinity, yoyo: Infinity }} // Set transition duration and repeat infinitely
						src="/dots_white.svg"
						className="absolute right-[4rem] top-[-4rem] z-0"
					></motion.img>

					<img
						src="/left_arrow_purple.svg"
						className="absolute left-0 bottom-[-4rem] z-0"
					></img>

					<img
						src="/right_arrow_white.svg"
						className="absolute left-[5rem] bottom-[-10rem] z-0"
					></img>

					<p className="text-custom_lightblue hack-shadow z-10">Hack</p>
					<p className="text-custom_red hub-shadow z-10">Hub</p>

					<p className="text-white text-8xl md:text-6xl sm:text-4xl relative top-28 -left-16 my-2 z-20">
						24
					</p>
				</motion.section>
				<motion.section
					initial={{ opacity: 0, scale: 0.2 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 3,
						delay: 0.3,
						ease: "easeInOut",
					}}
					className="font-offbittrialbold mt-[-30px] text-[30px] mr-24 sm:text-6xl md:text-8xl flex gap-4"
				>
					<p className="text-custom_white">IEEE Computer Society's</p>
					<p className="text-custom_red">FLAGSHIP</p>
					<p className="text-custom_white">Hackathon</p>
				</motion.section>
				<motion.section
					className="w-full flex justify-center"
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
						month={7}
						date={25}
						hour={17}
						minutes={0}
						seconds={0}
					/>
				</motion.section>
			</motion.section>

			{/* ABOUT */}
			<motion.section
				id="about"
				className="relative flex flex-col py-20 font-bold text-[5rem]"
			>
				<motion.img
					initial={{ opacity: 1 }}
					animate={{ opacity: [1, 0, 1] }} // Animate opacity from 1 to 0
					transition={{ duration: 1, repeat: Infinity, yoyo: Infinity }} // Set transition duration and repeat infinitely
					src="/dots_red.svg"
					className="absolute left-[40rem] top-[-6rem] z-0"
				></motion.img>

				<motion.img
					initial={{ opacity: 1 }}
					animate={{ opacity: [1, 0, 1] }} // Animate opacity from 1 to 0
					transition={{ duration: 1, repeat: Infinity, yoyo: Infinity }} // Set transition duration and repeat infinitely
					src="/dots_white_half.svg"
					className="absolute right-0 bottom-0 z-0"
				></motion.img>

				<motion.p
					initial={{ x: "0vw", y: "0vh", rotate: 0 }}
					animate={{
						y: ["1vh", "-1vh", "1vh"],
					}}
					transition={{
						y: {
							duration: 2, // Increase duration for slower movement
							yoyo: Infinity,
							ease: "easeInOut",
							repeat: Infinity, // Changed ease for smoother motion
						},
					}}
					className="font-opensans font-bold absolute text-[14rem] w-fit p-4 top-[-14rem] left-[2rem] white-border text-custom_purple"
				>
					◯
				</motion.p>

				<img
					src="/left_arrow_full_purple.svg"
					className="absolute right-[48rem] top-[9.5rem] text-[8rem] z-0"
				></img>

				<motion.p
					initial={{ x: "0vw", y: "0vh", rotate: 0 }}
					animate={{
						x: ["-2vw", "2vw", "-2vw"], // Change x values for repeated motion
						y: ["-2vh", "2vh", "-2vh"], // Adjusted y values for variation
						rotate: [360, 0],
						// Adding rotation animation
					}}
					transition={{
						x: {
							duration: 30, // Increase duration for slower movement
							yoyo: Infinity,
							ease: "linear",

							repeat: Infinity,
						},
						y: {
							duration: 5, // Increase duration for slower movement
							yoyo: Infinity,
							ease: "easeInOut",
							repeat: Infinity, // Changed ease for smoother motion
						},
						rotate: {
							duration: 50, // Adjust duration for rotation speed
							yoyo: Infinity,
							ease: "linear",
							repeat: Infinity,
						},
					}}
					className={`${roboto.className} absolute top-[5rem] right-[20rem] text-[24rem] text-custom_white z-0 gradient-border`}
				>
					×
				</motion.p>

				<img
					src="/right_arrow_white.svg"
					className="absolute top-[-8rem] right-[18rem] w-[14rem] z-0"
				></img>

				<motion.p
					initial={{ x: "0vw", y: "0vh", rotate: 0 }}
					animate={{
						x: ["2vw", "-2vw", "2vw"],
					}}
					transition={{
						x: {
							duration: 5, // Increase duration for slower movement
							yoyo: Infinity,
							ease: "easeInOut",
							repeat: Infinity, // Changed ease for smoother motion
						},
					}}
					className="font-opensans font-black absolute text-[10rem] right-[50rem] w-fit p-4 bottom-[-11rem] white-border text-custom_lightblue"
				>
					◯
				</motion.p>

				<div className="w-[50%] ml-40 p-4">
					<section className={`flex py-4 ${spaceGrotesk.className}`}>
						<section className="text-custom_white">About &nbsp;</section>
						<section className="text-custom_purple">Hack</section>
						<section className="text-custom_red">Hub</section>
					</section>
					<section
						className={`text-[1.2rem] font-normal self-start ${spaceMono.className}`}
					>
						Welcome to IEEE Computer Society VIT Chennai, where innovation meets
						impact. This event is a vibrant arena for budding technologists,
						professionals, and students to collaborate, create, and compete in
						the spirit of advancing technology. As part of IEEE CompSoc's
						student chapter, our commitment to technological breakouts, our
						hackathon challenges makes participants think critically and
						creatively. We provide a platform for you to turn your disruptive
						ideas into prototypes, and lastly prizes and recognition await. Join
						us for an exhilarating journey of learning, innovation, and
						competition. Unleash your potential with IEEE CompSoc.
					</section>
				</div>
			</motion.section>

			{/* DOMAINS */}
			<motion.section className="relative mt-10 w-full flex py-20 font-bold text-[5rem]">
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

				<div className="p-4 flex flex-col w-[80%] mx-auto items-center justify-center">
					<section className={`flex py-4 ${spaceGrotesk.className}`}>
						<section className="text-custom_white">
							Domains of the Hackathon
						</section>
					</section>
					<section
						className={`text-[1.2rem] font-normal self-start ${spaceMono.className}`}
					>
						ADD DOMAINS
					</section>
				</div>
			</motion.section>
		</>
	);
}
