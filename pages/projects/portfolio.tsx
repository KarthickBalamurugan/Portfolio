import { motion } from 'framer-motion';
import Image from 'next/image';
import Footer from '@/components/footer';

const PortfolioProject = () => {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white flex flex-col justify-between">
      {/* Full-width Project Header Image */}
      <div className="w-full h-[80vh] relative">
        <Image
          src="/portfolio.png"
          alt="Portfolio Project"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/50 to-[#0A0A0A]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Fixed Left Panel */}
          <motion.div className="md:w-[400px] md:sticky md:top-8 shrink-0 pt-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">PORTFOLIO</h1>
            
            <div className="bg-[#131313] p-8 rounded-xl border border-white/10">
              <h3 className="text-[#FF4500] text-sm tracking-[0.2em] mb-6">PROJECT DETAILS</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-white/60 mb-2">ROLE</p>
                  <p className="font-medium">Front-end Developer & Designer </p>
                </div>
                <div>
                  <p className="text-white/60 mb-2">TIMELINE</p>
                  <p className="font-medium">2024</p>
                </div>
                <div>
                  <p className="text-white/60 mb-2">TECH STACK</p>
                  <div className="flex flex-wrap gap-2">
                    {['Next.js', 'Framer Motion', 'GSAP', 'TailwindCSS'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Sections */}
          <div className="md:w-[calc(100%-400px)] pt-12 pb-24">
            <div className="space-y-32">
              {/* Overview Section */}
              <motion.section>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 text-white/90">
                  OVERVIEW
                </h2>
                <div className="prose prose-2xl prose-invert max-w-none">
                  <p className="text-2xl leading-relaxed text-white/80">
                    A modern, interactive portfolio website showcasing my work and capabilities. Built with 
                    Next.js and enhanced with advanced animations using Framer Motion and GSAP, this platform 
                    demonstrates both technical expertise and creative design principles.
                  </p>
                </div>
              </motion.section>

              {/* Added Objectives Section */}
              <motion.section>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 text-white/90">
                  OBJECTIVES
                </h2>
                <div className="prose prose-2xl prose-invert max-w-none">
                  <p className="text-2xl leading-relaxed text-white/80">
                    Create a modern, interactive portfolio that showcases technical skills and creative design abilities.
                    Demonstrate proficiency in modern web technologies and provide an engaging user experience.
                  </p>
                </div>
              </motion.section>

              {/* Added Process Section */}
              <motion.section>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 text-white/90">
                  PROCESS
                </h2>
                <div className="prose prose-2xl prose-invert max-w-none">
                  <p className="text-2xl leading-relaxed text-white/80">
                    Development focused on creating smooth animations, responsive design, and optimal performance.
                    Utilized Next.js for SEO optimization and Framer Motion for advanced animations.
                  </p>
                </div>
              </motion.section>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with top margin */}
      <div className="mt-auto pt-20">
        <Footer />
      </div>
    </div>
  );
};

export default PortfolioProject;
