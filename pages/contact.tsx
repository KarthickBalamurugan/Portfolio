// import { motion } from 'framer-motion';
import { Raleway } from 'next/font/google';
import Footer from '@/components/footer';

const raleway = Raleway({ 
  subsets: ['latin'],
  weight: ['700'] // Changed from 900 to 700 for less thickness
});

const socialLinks = [
  {
    name: 'MAIL',
    href: 'mailto:karthickofficial2003@gmail.com',
  },
  {
    name: 'INSTAGRAM',
    href: 'https://www.instagram.com/alwayskarthick_/',
  },
  {
    name: 'LINKEDIN',
    href: 'https://www.linkedin.com/in/karthickganeshsb/',
  },
  {
    name: 'GITHUB',
    href: 'https://github.com/KarthickBalamuruganhttps',
  }
];

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden flex flex-col justify-between">
      {/* Main Content Wrapper */}
      <div className="flex-1">
        {/* Adjusted Contact Text at Top */}
        <div className="w-full pt-20 pb-32">
          <h1 
            className={`text-[20vw] font-bold leading-[0.8] px-4 ${raleway.className}`} // Changed from font-black to font-bold
            style={{
              background: 'linear-gradient(45deg, #FF4500, #FF8C00)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.03em' // Reduced letter spacing
            }}
          >
            CONTACT
          </h1>
        </div>

        {/* Main Content Container */}
        <div className="max-w-[1400px] mx-auto px-8 md:px-20 relative mb-32"> {/* Added margin bottom */}
          {/* Download CV Link - Updated with proper download attribute */}
          <a
            href="/karthick.pdf"
            download="karthick.pdf"
            className="absolute right-8 md:right-20 top-0 text-2xl font-medium tracking-tight text-white/90 hover:text-[#FF4500] transition-colors"
            onClick={(e) => {
              // Optional: Add analytics or tracking
              console.log('CV Downloaded');
            }}
          >
            DOWNLOAD CV
          </a>

          {/* Contact Links */}
          <div className="relative">
            <h2 className="text-[#FF4500] text-sm tracking-[0.2em] mb-8 uppercase">
              Contact me on
            </h2>

            <div className="flex flex-col space-y-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-4xl md:text-6xl font-bold tracking-tight text-white/90 hover:text-[#FF4500] transition-colors"
                >
                  {social.name}
                </a>
              ))}
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

export default ContactPage;
