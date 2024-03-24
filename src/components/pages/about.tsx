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

export default function About(): JSX.Element {
	return (
		<>
			<div className="w-[70%] ml-24 pb-24 p-12 z-10 backdrop-blur-lg rounded-[3rem] border border-custom_red shadow-2xl shadow-custom_darkblue">
				<section className={`flex py-4 ${spaceGrotesk.className}`}>
					<section className="text-custom_white font-glitch about-shadow mr-8">
						About
					</section>
					<section className="text-custom_purple font-glitch hack-shadow">
						Hack
					</section>
					<section className="text-custom_red font-glitch hub-shadow">
						Hub
					</section>
				</section>

				<section className={`text-[1.5rem] font-normal self-start`}>
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
			</div>
		</>
	);
}
