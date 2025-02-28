import { motion } from 'framer-motion';
import Image from 'next/image';
import Footer from '@/components/footer';

const DigiWalletProject = () => {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white flex flex-col justify-between">
      {/* Full-width Project Header Image */}
      <div className="w-full h-[80vh] relative">
        <Image
          src="/wallet.png"
          alt="DigiWallet Project"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-8">DIGIWALLET</h1>
            
            <div className="bg-[#131313] p-8 rounded-xl border border-white/10">
              <h3 className="text-[#FF4500] text-sm tracking-[0.2em] mb-6">PROJECT DETAILS</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-white/60 mb-2">ROLE</p>
                  <p className="font-medium">Backend Developer</p>
                </div>
                <div>
                  <p className="text-white/60 mb-2">TIMELINE</p>
                  <p className="font-medium">2024</p>
                </div>
                <div>
                  <p className="text-white/60 mb-2">TECH STACK</p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'MongoDB', 'Express'].map((tech) => (
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
                    DigiWallet is a comprehensive personal finance management platform that helps users 
                    track expenses, manage budgets, and achieve financial goals. The application provides 
                    real-time insights into spending patterns and offers intelligent recommendations for 
                    better financial management.
                  </p>
                </div>
              </motion.section>

              {/* Objectives Section */}
              <motion.section>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 text-white/90">
                  OBJECTIVES
                </h2>
                <div className="prose prose-2xl prose-invert max-w-none">
                  <p className="text-2xl leading-relaxed text-white/80">
                    The primary objective of DigiWallet is to revolutionize personal finance management 
                    through an intuitive and powerful platform. We aim to provide users with a comprehensive 
                    solution for tracking their expenses and managing budgets effectively. Through real-time 
                    insights and analytics, users can gain deeper understanding of their spending patterns 
                    and make informed financial decisions. Our focus on data security and privacy ensures 
                    users can manage their finances with complete confidence and peace of mind.
                  </p>
                </div>
              </motion.section>

              {/* Process Section */}
              <motion.section>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 text-white/90">
                  PROCESS
                </h2>
                <div className="prose prose-2xl prose-invert max-w-none">
                  <p className="text-2xl leading-relaxed text-white/80">
                    The development journey of DigiWallet began with extensive research into user needs 
                    and market expectations. We focused on creating an intuitive interface that would make 
                    financial management accessible to everyone. The technical implementation leveraged 
                    React for a responsive frontend, while Node.js and Express provided a robust backend 
                    infrastructure. MongoDB was chosen for its flexibility in handling complex financial 
                    data structures.
                  </p>
                  <p className="text-2xl leading-relaxed text-white/80 mt-8">
                    Throughout the development process, we maintained a strong focus on performance and 
                    security. Regular testing and iteration ensured that the platform remained stable 
                    and reliable. The deployment phase was carefully planned to ensure a smooth transition 
                    to production, with continuous monitoring and updates to enhance user experience and 
                    add new capabilities based on user feedback.
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

export default DigiWalletProject;
