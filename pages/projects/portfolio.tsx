import { motion } from 'framer-motion';
import Image from 'next/image';

const PortfolioProject = () => {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white">
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
        // ...similar structure as undebt.tsx with Portfolio content...
        {/* Update project details, overview, objectives, and process sections */}
      </div>
    </div>
  );
};

export default PortfolioProject;
