import { motion } from 'framer-motion';

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
    title: "Wallet",
    description: "Personal finance management platform",
    image: "/wallet.jpg",
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
              <motion.div 
                className="h-[2px] w-24 bg-gradient-to-r from-[#FF4500] to-[#FF6B00] mt-6"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ 
              duration: 0.7, 
              ease: [0.16, 1, 0.3, 1],
              delay: 0.3 
            }}
          >
            <motion.button
              className="relative px-10 py-4 text-sm tracking-[0.2em] rounded-sm overflow-hidden
                         bg-gradient-to-r from-[#FF4500] to-[#FF6B00] group
                         shadow-[0_0_20px_rgba(255,69,0,0.3)] hover:shadow-[0_0_30px_rgba(255,69,0,0.5)]
                         transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 font-medium">
                ALL PROJECTS
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-white"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </span>
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

      <div className="relative w-full my-20">
        <motion.div 
          className="absolute left-0 right-0 h-[1px] bg-white/20"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="sticky top-0 h-screen flex items-center px-4 md:px-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: "-40%" }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-full h-[70vh] relative rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-xl" />
              
              <motion.div 
                className="absolute inset-0"
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5 }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-40"
                />
              </motion.div>

              <div className="relative h-full flex flex-col justify-end p-8 md:p-12">
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="text-[#FF4500] text-sm tracking-[0.2em] mb-4 block">
                    PROJECT {String(index + 1).padStart(2, '0')}
                  </span>
                  
                  <h3 className="text-4xl md:text-6xl font-medium mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-sm
                                 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Creations;
