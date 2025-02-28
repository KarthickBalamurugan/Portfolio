import { motion } from 'framer-motion';
import Image from 'next/image';

const UndebtProject = () => {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white">
      {/* Full-width Project Header Image */}
      <div className="w-full h-[80vh] relative"> {/* Increased height */}
        <Image
          src="/Undebt.png"
          alt="Undebt Project"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/50 to-[#0A0A0A]" />
      </div>

      {/* Content Container */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Fixed Left Panel */}
          <motion.div 
            className="md:w-[400px] md:sticky md:top-8 shrink-0 pt-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8">UNDEBT</h1>
            
            <div className="bg-[#131313] p-8 rounded-xl border border-white/10">
              <h3 className="text-[#FF4500] text-sm tracking-[0.2em] mb-6">PROJECT DETAILS</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-white/60 mb-2">ROLE</p>
                  <p className="font-medium">Front end Develepor </p>
                </div>
                <div>
                  <p className="text-white/60 mb-2">TIMELINE</p>
                  <p className="font-medium">2024</p>
                </div>
                <div>
                  <p className="text-white/60 mb-2">TECH STACK</p>
                  <div className="flex flex-wrap gap-2">
                    {['Next.js', 'Python', 'TailwindCSS', 'Flask'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Scrollable Right Panel with larger text */}
          <div className="md:w-[calc(100%-400px)] pt-12 pb-24">
            <div className="space-y-32">
              {/* Overview Section */}
              <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 text-white/90">
                  OVERVIEW
                </h2>
                <div className="prose prose-2xl prose-invert max-w-none">
                  <p className="text-2xl leading-relaxed text-white/80">
                    Undebt is a comprehensive web application designed to revolutionize how individuals manage their loan repayments. 
                    The platform combines sophisticated financial algorithms with an intuitive user interface to provide personalized 
                    debt management strategies. Users can input their loan details and receive optimized repayment plans that 
                    consider various factors such as interest rates, term length, and monthly payment capabilities.
                  </p>
                </div>
              </motion.section>

              {/* Objectives Section */}
              <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 text-white/90">
                  OBJECTIVES
                </h2>
                <div className="prose prose-2xl prose-invert max-w-none">
                  <p className="text-2xl leading-relaxed text-white/80">
                    The primary goal of Undebt is to empower users with the tools and insights needed to make informed decisions 
                    about their loan repayment strategies. By providing clear visualizations and multiple repayment scenarios, 
                    users can understand the impact of different payment approaches on their financial future. The platform aims 
                    to reduce the complexity of loan management while offering flexible solutions that adapt to each user's unique 
                    financial situation.
                  </p>
                </div>
              </motion.section>

              {/* Process Section */}
              <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 text-white/90">
                  PROCESS
                </h2>
                <div className="prose prose-2xl prose-invert max-w-none">
                  <p className="text-2xl leading-relaxed text-white/80">
                    The development process began with extensive research into loan management patterns and user needs. The 
                    application was built using a modern tech stack, with Next.js powering the frontend for optimal performance 
                    and SEO, while Python and Flask handle the complex calculations on the backend. The user interface was 
                    carefully crafted to present financial information in an accessible way, using interactive charts and 
                    clear comparisons between different repayment options.
                  </p>
                  <p className="text-2xl leading-relaxed text-white/80 mt-8">
                    Special attention was paid to creating a responsive design that works seamlessly across all devices, ensuring 
                    users can access their loan management tools wherever they are. The implementation includes real-time 
                    calculations, data visualization, and secure user authentication to protect sensitive financial information.
                  </p>
                </div>
              </motion.section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UndebtProject;
