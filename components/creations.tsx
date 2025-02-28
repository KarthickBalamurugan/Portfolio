import { motion } from 'framer-motion';
import { BackgroundGradient } from './UI/backgroundgradient';
import BackgroundGradientDemo from './achievements';
interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tech: string[];
}

const projects: Project[] = [
  {
    title: "UnDebt",
    description: "A debt management and tracking application",
    image: "/Undebt.png",
    link: "https://undebt.vercel.app",
    tech: ["Next.js", "TypeScript", "Tailwind"]
  },
  {
    title: "DigiWallet",
    description: "Personal finance management platform",
    image: "/wallet.png",
    link: "https://wallet.vercel.app",
    tech: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Portfolio",
    description: "Personal portfolio website",
    image: "/portfolio.png",
    link: "https://portfolio.vercel.app",
    tech: ["Next.js", "Framer Motion", "GSAP"]
  }
];

const Creations = () => {
  return (
    
    <section className="min-h-screen relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 pt-32">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="w-full md:w-2/3">
            <motion.p 
              className="text-[#FF4500] uppercase tracking-[0.2em] text-sm mb-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Creations
            </motion.p>
            <div className="overflow-hidden relative">
              <motion.h2 
                className="text-3xl md:text-[3.2rem] font-medium leading-[1.1] tracking-tight"
                style={{ WebkitTextStroke: '0.5px rgba(255,255,255,0.5)' }}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                A LOOK INTO
                <br />
                MY PROJECTS
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
              className="relative px-10 py-4 text-sm tracking-[0.2em] rounded-sm overflow-hidden bg-gradient-to-r from-[#FF4500] to-[#FF6B00] group shadow-[0_0_20px_rgba(255,69,0,0.3)] hover:shadow-[0_0_30px_rgba(255,69,0,0.5)] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 font-medium">ALL PROJECTS</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B00] to-[#FF4500] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

      <div className="relative w-full my-20">
        <motion.div 
          className="absolute left-0 right-0 h-[1px] bg-white/20"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="sticky top-0 h-screen flex items-center px-4 md:px-12 will-change-transform"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7 }}
          >
            <BackgroundGradient className="rounded-[22px] w-[90vw] p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <div className="w-full h-[70vh] relative rounded-lg overflow-hidden backface-hidden">
              <div className="absolute inset-0 bg-white/[0.05] backdrop-blur-lg" />

              <motion.div 
                className="absolute inset-0 will-change-transform"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60"
                />
              </motion.div>

              <div className="relative h-full flex flex-col justify-end p-6 md:p-12">
                <motion.div
                  initial={{ y: 80, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h3 className="text-2xl md:text-4xl font-medium mb-3 md:mb-4 text-white">
                    {project.title}
                  </h3>
                  <p className="text-base md:text-lg text-white/90 max-w-xl mb-6 md:mb-8">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>
            </BackgroundGradient>
          </motion.div>
        ))}
      </div>
      {/* <BackgroundGradientDemo /> */}
      <style jsx>{`
        @media (max-width: 768px) {
          h2 {
            font-size: 2rem;
            line-height: 1.2;
          }

          h3 {
            font-size: 1.5rem;
          }

          .text-base {
            font-size: 0.9rem;
          }

          .px-10 {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .py-4 {
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
          }

          .h-[70vh] {
            height: 60vh;
          }

          .pt-32 {
            padding-top: 6rem;
          }

          .gap-8 {
            gap: 1.5rem;
          }

          .md\\:px-12 {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .md\\:text-\\[3.2rem\\] {
            font-size: 2.5rem;
          }

          .md\\:text-6xl {
            font-size: 2rem;
          }

          .md\\:p-12 {
            padding: 1.5rem;
          }

          .my-20 {
            margin-top: 3rem;
            margin-bottom: 3rem;
          }

          .sticky {
            position: relative;
          }
        }
      `}</style>
    </section>
  );
};

export default Creations;
