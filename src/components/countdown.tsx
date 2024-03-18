import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface CountdownProps {
	year: number;
	month: number;
	date: number;
	hour: number;
	minutes: number;
	seconds: number;
}

export default function Countdown({
	year,
	month,
	date,
	hour,
	minutes,
	seconds,
}: CountdownProps) {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const countdownDate = new Date(
			year,
			month - 1,
			date,
			hour,
			minutes,
			seconds
		).getTime();

		const interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = countdownDate - now;

			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			setTimeLeft({ days, hours, minutes, seconds });

			if (distance < 0) {
				clearInterval(interval);
				setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [year, month, date, hour, minutes, seconds]);

	let a = "";

	return (
		<section>
			<section className="mt-12 grid grid-rows-2 justify-items-center font-offbittrialbold text-[150px] space-y-[-50px]">
				<section className="grid grid-cols-4 justify-items-center gap-10">
					<p className="">{timeLeft.days}</p>
					<p>{timeLeft.hours}</p>
					<p>{timeLeft.minutes}</p>
					<p>{timeLeft.seconds}</p>
				</section>
				<section className="grid grid-cols-4 justify-items-center gap-10">
					<p className=" text-[60px] text-[#CF1259] font-offbittrial ">days</p>
					<p className="text-[60px] text-[#7161EF] font-offbittrial">hours</p>
					<p className="text-[60px] font-offbittrial ">minutes</p>
					<p className="text-[60px] text-[#CF1259] font-offbittrial ">
						seconds
					</p>
				</section>
			</section>
		</section>
	);
}
