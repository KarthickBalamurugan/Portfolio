import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/footer';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ 
  subsets: ['latin'],
  weight: ['700']
});

const projects = [
  {
    title: "UnDebt",
    description: "A debt management and tracking application",
    image: "/Undebt.png",
    link: "/projects/undebt",
    tech: ["Next.js", "TypeScript", "Tailwind"]
  },
  {
    title: "DigiWallet",
    description: "Personal finance management platform",
    image: "/wallet.png",
    link: "/projects/digiwallet",
    tech: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Portfolio",
    description: "Personal portfolio website",
    image: "/portfolio.png",
    link: "/projects/portfolio",
    tech: ["Next.js", "Framer Motion", "GSAP"]
  }
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col">
      {/* Projects Title */}
      <div className="w-full pt-20 pb-32">
        <h1 
          className={`text-[20vw] font-bold leading-[0.8] px-4 ${raleway.className}`}
          style={{
            background: 'linear-gradient(45deg, #FF4500, #FF8C00)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.03em'
          }}
        >
          PROJECTS
        </h1>
      </div>

      {/* Projects Grid - Added bottom margin and adjusted container */}
      <div className="flex-grow px-4 md:px-12 mb-32"> {/* Added margin bottom */}
        <div className="max-w-[1400px] mx-auto">
          {/* Grid Container - Adjusted for larger images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12"> {/* Removed lg:grid-cols-3, increased gap */}
            {projects.map((project, index) => (
              <Link key={project.title} href={project.link}>
                <motion.div
                  className="group relative aspect-[16/10] rounded-lg overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Project Image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-white/80 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProjectsPage;
