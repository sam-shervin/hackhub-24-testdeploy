import Footer from "@hackhub/components/footer";
import Navbar from "@hackhub/components/header";
import "@hackhub/styles/globals.css";
import "@hackhub/styles/shadows.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";

const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
});

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

export default function App({ Component, pageProps }: AppProps) {
	const buttons = [
		"About",
		"Domains",
		"Timeline",
		"Sponsors",
		"FAQs",
		"Contact",
	];
	const router = useRouter();
	return (
		<>
			<section
				className={`bg-[#03091E] text-[#EAEAEA] ${montserrat.className}`}
			>
				<motion.section
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 2,
						delay: 2,
						ease: "easeInOut",
					}}
				>
					<Navbar buttons={buttons} active={router.pathname} />
				</motion.section>
				<motion.section
					className="bg-[#03091E]"
					initial="initial"
					animate="animate"
					variants={loadingAnimation}
				>
					<Component {...pageProps} />
					<Footer />
				</motion.section>
			</section>
		</>
	);
}
