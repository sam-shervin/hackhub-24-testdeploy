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
			<section className="font-offbittrialbold">

                <section className="flex justify-center text-7xl gap-16 mt-20 ">


                <div className="flex flex-col items-center">
					<p className="text-9xl">{timeLeft.days}</p>
					<p className="text-custom_red font-offbittrial">days</p>
                </div>

                <div className="flex flex-col items-center">

					<p className="text-9xl">{timeLeft.hours}</p>
					<p className="text-custom_lightblue font-offbittrial">hours</p>
                </div>
                <div className="flex flex-col items-center">

					<p className="text-9xl">{timeLeft.minutes}</p>
					<p className="text-custom_white font-offbittrial">minutes</p>
                </div>
                <div className="flex flex-col items-center">

					<p className="text-9xl">{timeLeft.seconds}</p>
					<p className="text-custom_red font-offbittrial">seconds</p>
                </div>
				</section>

			</section>
		</section>
	);
}
