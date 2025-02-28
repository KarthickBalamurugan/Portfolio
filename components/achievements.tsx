import { useRef, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion';

const achievements = [
  {
    year: "2025",
    title: "Envision Hackathon",
    description: "Secured Runner Up position in the Envision Hackathon, demonstrating innovative problem-solving and technical expertise.",
    link: "#"
  },
  {
    year: "2024",
    title: "SSN INVENTE Symposium",
    description: "Achieved Runner Up position at the SSN INVENTE National Level Technical Symposium, demonstrating technical excellence.",
    link: "#"
  },
  {
    year: "2023",
    title: "IETE Best Project Award",
    description: "Received the Best Project Award at IETE for outstanding technical implementation and innovation.",
    link: "#"
  },
  {
    year: "2023",
    title: "SVCE Paper Presentation",
    description: "Won First Place in the Technical Paper Presentation competition at SVCE, showcasing research and presentation skills.",
    link: "#"
  }
];

const Achievement = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="relative py-32 mt-80 px-4 md:px-12"> {/* Increased top margin */}
      {/* Solid background to prevent overlap */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      
      {/* Top fade gradient now overlays solid background */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0A0A0A] to-transparent" />
      
      <div className="max-w-[1400px] mx-auto relative">
        {/* Header with enhanced glow */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <div className="w-full md:w-2/3">
            <motion.p 
              className="text-[#FF4500] uppercase tracking-[0.2em] text-sm mb-6 font-medium"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Achievements
            </motion.p>
            <div className="overflow-hidden relative">
              <motion.h2 
                className="text-3xl md:text-[3.2rem] font-bold leading-[1.1] tracking-tight"
                style={{ 
                  WebkitTextStroke: '1px rgba(255,255,255,0.7)',
                  textShadow: '0 0 20px rgba(255,69,0,0.3)'
                }}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                MY JOURNEY
                <br />
                SO FAR
              </motion.h2>
            </div>
          </div>
        </div>

        {/* White divider line only for capabilities section */}
        <div className="relative w-full mb-12">
          <motion.div 
            className="absolute left-0 right-0 h-[1px] bg-white/20 w-screen -mx-4 md:-mx-12"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        {/* Timeline Container with orange theme restored */}
        <div className="relative">
          {/* Orange timeline line */}
          <div className="absolute left-4 md:left-1/2 top-[60px] h-[calc(100%-80px)] w-[2px]">
            <div className="absolute inset-0 bg-gradient-to-b from-[#FF4500] via-[#FF4500]/30 to-transparent" />
            <motion.div 
              className="absolute top-0 left-0 right-0 origin-top"
              style={{ 
                scaleY: scaleProgress,
                background: "linear-gradient(180deg, #FF4500, #FF6B00, #FF8C00)",
                boxShadow: "0 0 20px rgba(255,69,0,0.4)",
                height: "100%"
              }}
            />
          </div>

          <div className="relative pt-8">
            {achievements.map((achievement, index) => {
              const itemRef = useRef(null);
              const { scrollYProgress: itemProgress } = useScroll({
                target: itemRef,
                offset: ["start end", "center center"]
              });

              // Smooth spring animation for each item
              const springY = useSpring(useTransform(itemProgress, [0, 1], [50, 0]), {
                stiffness: 100,
                damping: 30
              });

              const opacity = useTransform(itemProgress, 
                [0, 0.2, 0.8, 1], 
                [0.3, 1, 1, 0.3]
              );

              // Calculate when dot should glow
              const dotGlow = useTransform(
                itemProgress,
                [0, 0.5, 1],
                [0, 1, 0]
              );

              return (
                <motion.div
                  key={index}
                  ref={itemRef}
                  className="relative mb-24 last:mb-0 pt-8" // Increased vertical spacing
                  style={{ opacity }}
                >
                  {/* Timeline node with orange glow restored */}
                  <motion.div 
                    className="absolute left-4 md:left-1/2 w-5 h-5 bg-[#1a1a1a] rounded-full -translate-x-[10px]
                              border-2 border-[#FF4500] transition-all duration-300"
                    style={{
                      boxShadow: useTransform(
                        dotGlow,
                        [0, 1],
                        ['0 0 0px rgba(255,69,0,0)', '0 0 30px rgba(255,69,0,0.8)']
                      ),
                      borderColor: useTransform(
                        dotGlow,
                        [0, 1],
                        ['rgba(255,69,0,0.5)', 'rgba(255,69,0,1)']
                      )
                    }}
                  >
                    <motion.div 
                      className="absolute inset-[-4px] rounded-full"
                      style={{
                        background: "linear-gradient(to right, #FF4500, #FF8C00)",
                        opacity: dotGlow
                      }}
                    />
                  </motion.div>

                  {/* Content card with orange accents restored */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-32px)] ${
                    index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto md:pl-32'
                  }`}>
                    <motion.div
                      className="bg-[#1a1a1a] rounded-xl p-8 border border-white/10 relative overflow-hidden
                                backdrop-blur-sm hover:bg-[#222] transition-all duration-300 group min-h-[250px]
                                shadow-[0_0_25px_-5px_rgba(255,255,255,0.05)]"
                      style={{
                        y: springY,
                        x: useTransform(itemProgress, 
                          [0, 1], 
                          [index % 2 === 0 ? -30 : 30, 0]
                        )
                      }}
                      whileHover={{ 
                        scale: 1.03,
                        boxShadow: "0 20px 40px -20px rgba(255,255,255,0.1)"
                      }}
                    >
                      {/* Year badge with orange styling */}
                      <div className="flex items-center gap-4 mb-6">
                        <span className="px-4 py-2 rounded-full text-sm bg-[#FF4500]/10 text-[#FF4500] font-medium
                                       border border-[#FF4500]/20">
                          {achievement.year}
                        </span>
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-[#FF4500]/20 to-transparent" />
                      </div>
                      
                      <h3 className="text-2xl font-semibold mb-4 text-white">
                        {achievement.title}
                      </h3>
                      
                      <p className="text-gray-300 text-base leading-relaxed mb-6">
                        {achievement.description}
                      </p>

                      {/* Orange hover effects restored */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-[#FF4500]/10 to-transparent opacity-0 
                                  group-hover:opacity-100 transition-opacity duration-500"
                      />
                      
                      {/* Orange progress line */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-[2px]"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.5 }}
                        style={{
                          background: "linear-gradient(to right, #FF4500, #FF8C00)",
                          originX: index % 2 === 0 ? 0 : 1
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
    </section>
  );
};

export default Achievement;
