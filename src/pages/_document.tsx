import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<link
				id="favicon"
				rel="icon"
				href="logo.png"
				type="image/png"
				sizes="64x64"
			/>
			<Head />
			<body className="bg-background">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
