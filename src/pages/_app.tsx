import Navbar from "@hackhub/components/header";
import "@hackhub/styles/globals.css";
import "@hackhub/styles/shadows.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
	const buttons = ["Team", "Project", "Contacts", "Events", "Blogs"];
	const router = useRouter();
	return (
		<>
			<section className="bg-[#03091E] text-[#EAEAEA]">
				<Navbar buttons={buttons} active={router.pathname} />
				<Component {...pageProps} />
			</section>
		</>
	);
}
