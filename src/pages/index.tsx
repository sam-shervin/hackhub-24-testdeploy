import { motion } from 'framer-motion';

export default function Home() {
  const loadingAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 5, ease: 'easeInOut' },
  };

  const comingSoonAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    delay: 10,
  };

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center background-polka"
      initial="initial"
      animate="animate"
      variants={loadingAnimation}
    >
      <motion.main className="font-glitch text-[10rem] sm:text-6xl md:text-8xl flex gap-4">
        <p className="text-[#7161EF] hack-shadow">Hack</p>
        <p className="text-[#CF1259] hub-shadow">Hub</p>
        <p className="text-white text-8xl md:text-6xl sm:text-4xl relative top-28 -left-16 my-2 z-10">24</p>

      </motion.main>
      <motion.p
        className="text-white font-glitch text-4xl mt-4"
        variants={comingSoonAnimation}
      >
        Coming Soon
      </motion.p>
    </motion.section>
  );
}
