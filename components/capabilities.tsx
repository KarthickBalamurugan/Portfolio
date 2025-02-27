import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface SkillCard {
  title: string;
  skills: string[];
  finalRotation: number;
}

const skillCards: SkillCard[] = [
  {
    title: "Development",
    skills: ["Frontend", "Deployment", "Analysis", "Backend"],
    finalRotation: -25
  },
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "C"],
    finalRotation: 25
  },
  {
    title: "Strategy",
    skills: ["Analysis", "Designer", "Optimizer"],
    finalRotation: -15
  },
  {
    title: "Framework",
    skills: ["React", "Next.js", "Keras", "Flask"],
    finalRotation: 15
  }
];

const CardStack = () => {
  const { scrollY } = useScroll();

  return (
    <div className="h-screen w-full flex items-center justify-center perspective-1000">
      <div className="relative w-[300px] h-[400px]">
        {skillCards.map((card, index) => {
          // Dynamic motion values based on scroll
          const cardSpread = useTransform(
            scrollY,
            [0, 500], // Adjust these values to control spread timing
            [0, index % 2 === 0 ? -400 : 400] // Alternate left/right spread
          );

          const ySpread = useTransform(
            scrollY,
            [0, 500],
            [0, index < 2 ? -200 : 200] // Top/bottom spread
          );

          const rotation = useTransform(
            scrollY,
            [0, 500],
            [0, card.finalRotation]
          );

          const flip = useTransform(
            scrollY,
            [200, 400], // Adjust flip timing
            [0, 180]
          );

          return (
            <motion.div
              key={card.title}
              className="absolute inset-0"
              style={{
                x: cardSpread,
                y: ySpread,
                rotateZ: rotation,
                zIndex: skillCards.length - index,
              }}
            >
              <motion.div
                className="w-full h-full"
                style={{
                  rotateY: flip,
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Card Back */}
                <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl border border-white/10">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#FF4500] to-[#FF6B00]" />
                  </div>
                </div>

                {/* Card Front */}
                <div 
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#FF4500]/10 to-[#FF6B00]/10 
                           backdrop-blur-md border border-white/10 p-6 [transform:rotateY(180deg)] backface-hidden"
                >
                  <h3 className="text-2xl font-bold mb-4 text-[#FF4500]">{card.title}</h3>
                  <div className="space-y-3">
                    {card.skills.map((skill, idx) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500]" />
                        <span className="text-white/80">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const Capabilities = () => {
  return (
    <section className="relative py-0 min-h-[200vh]"> {/* Increased height for scroll */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 pt-8 md:pt-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="w-full md:w-2/3">
            <motion.p 
              className="text-[#FF4500] uppercase tracking-[0.2em] text-sm mb-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Capabilities
            </motion.p>
            <div className="overflow-hidden relative">
              <motion.h2 
                className="text-3xl md:text-[3.2rem] font-medium leading-[1.1] tracking-tight"
                style={{ WebkitTextStroke: '0.5px rgba(255,255,255,0.5)' }}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                A PROBLEM SOLVER
                <br />
                WHO SOLVES FOR
                <br />
                UNIQUE VISION
              </motion.h2>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <motion.button
              className="relative px-10 py-4 text-sm tracking-[0.2em] rounded-sm overflow-hidden 
                         bg-gradient-to-r from-[#FF4500] to-[#FF6B00] group 
                         shadow-[0_0_20px_rgba(255,69,0,0.3)] hover:shadow-[0_0_30px_rgba(255,69,0,0.5)] 
                         transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 font-medium">GET IN TOUCH</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B00] to-[#FF4500] 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div 
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div className="relative w-full my-10">
        <motion.div 
          className="absolute left-0 right-0 h-[1px] bg-white/20"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.1, 1, 0.3, 1] }}
        />
      </div>

      {/* Card Stack Container */}
      <div className="sticky top-0 h-screen">
        <CardStack />
      </div>
    </section>
  );
};

export default Capabilities;
