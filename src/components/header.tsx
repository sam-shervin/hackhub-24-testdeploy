import Link from "next/link";
import * as React from "react";

const Navbar = ({
	buttons,
	active,
}: {
	buttons: string[];
	active: string;
}): JSX.Element => {
	return (
		<>
			<section className="top-0 left-0 w-full bg-inherit shadow-md z-50">
				<nav className="justify-center flex font-normal text-[20px]">
					<Link href="/">
						<section
							className={
								"px-12 py-6 " + `${"/" === active ? "gradient-text" : ""}`
							}
						>
							Home
						</section>
					</Link>
					{buttons.map((button) => {
						const isHighlighted = "/" + button === active;
						return (
							<Link href={`/${button}`}>
								<section
									className={`px-12 py-6 ${
										isHighlighted ? "gradient-text" : ""
									}`}
								>
									{button}
								</section>
							</Link>
						);
					})}
				</nav>
				<section className="h-0.5 bg-gradient-to-r from-[#CF1259] to-[#7161EF]" />
			</section>
		</>
	);
};

export default Navbar;
