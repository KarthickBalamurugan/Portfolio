import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Raleway, Montserrat } from 'next/font/google';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import Creations from '../components/creations';
import Capabilities from '../components/capabilities';
import Footer from '../components/footer';
import Achievement from '../components/achievements';
import Link from 'next/link';

const raleway = Raleway({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const textRef = useRef(null);
  const menuRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-500, 500], [5, -5]);
  const rotateY = useTransform(mouseX, [-500, 500], [-5, 5]);

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Integrate Lenis with GSAP
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Text scrolling animation
    const textElement = textRef.current;
    gsap.to(textElement, {
      x: '-50%',
      ease: "none",
      duration: 30,
      repeat: -1,
      repeatDelay: 0,
      immediateRender: true
    });

    // Global mouse move handler for photo tilt
    const handleGlobalMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Smoother animation with lerp
      const targetX = (clientX - centerX) / 25;
      const targetY = (clientY - centerY) / 25;
      
      animate(mouseX, targetX, {
        type: "spring",
        stiffness: 50,
        damping: 30,
        mass: 0.5
      });
      
      animate(mouseY, targetY, {
        type: "spring",
        stiffness: 50,
        damping: 30,
        mass: 0.5
      });
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => {
      // Cleanup
      lenis.destroy();
      gsap.killTweensOf(textElement); // Clean up GSAP animation
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <Head>
        <title>Karthick Ganesh | Creative Developer</title>
        <meta name="description" content="Independent Problem Solver & Creative Designer" />
      </Head>
      <div className={`min-h-screen bg-[#0A0A0A] text-white relative overflow-hidden ${montserrat.className}`}>
        {/* Updated Navbar */}
        <nav className="fixed top-0 w-full z-50 px-4 md:px-12 py-4 md:py-8">
          <div className="max-w-[1400px] mx-auto flex justify-between items-center">
            {/* Logo/Name */}
            <a href="/" className="text-sm md:text-lg tracking-[0.2em] font-medium opacity-90 hover:opacity-100 transition-opacity">
              KARTHICK GANESH
            </a>

            {/* Centered Menu/Close Button */}
            <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="group flex flex-col items-center gap-2"
              >
                <div className="relative h-[1px] flex justify-center">
                  <div 
                    className={`h-[1px] bg-white rounded-full transition-all duration-500 absolute
                               transform left-1/2 -translate-x-1/2
                               ${isMenuOpen 
                                 ? 'w-16 bg-[#FF4500]' 
                                 : 'w-10 group-hover:w-16'}`}
                  />
                </div>
                <span className="text-xs tracking-[0.2em] font-normal opacity-90">
                  {isMenuOpen ? 'CLOSE' : 'MENU'}
                </span>
              </button>
            </div>

            {/* Contact Link */}
            <Link 
              href="/contact" 
              passHref
              legacyBehavior
            >
              <a className="text-xs md:text-sm tracking-[0.2em] font-medium hover:text-[#FF4500] transition-colors">
                CONTACT
              </a>
            </Link>
          </div>

          {/* Menu Overlay */}
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ 
              opacity: isMenuOpen ? 1 : 0,
              y: isMenuOpen ? 0 : -50
            }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1]
            }}
            className={`fixed left-0 right-0 top-[64px] h-[320px] bg-black/95 backdrop-blur-lg
                        transition-all duration-500 ${isMenuOpen ? 'visible' : 'invisible'}`}
          >
            {/* Menu Items Container */}
            <div className="h-full flex flex-col justify-center items-center">
              <div className="text-center space-y-6">
                {[
                  { title: 'HOME', href: '/' },
                  { title: 'PROJECTS', href: '/projects' },
                  { title: 'CONTACT', href: '/contact' }
                ].map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    className="block text-2xl md:text-3xl font-medium tracking-[0.15em] 
                              hover:text-[#FF4500] transition-colors py-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: isMenuOpen ? 1 : 0,
                      y: isMenuOpen ? 0 : 10,
                      transition: { delay: index * 0.1 }
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </nav>

        {/* Background Scrolling Text */}
        <div className="absolute inset-0 flex items-center pointer-events-none overflow-hidden">
          <div className="flex whitespace-nowrap">
            <div 
              ref={textRef}
              className={`absolute top-[5%] whitespace-nowrap text-[12vw] md:text-[15vw] tracking-[-0.03em] opacity-[0.08] 
                         select-none transform-gpu inline-flex uppercase ${raleway.className}`}
                         
              style={{
                WebkitTextStroke: '1.5px rgba(255,69,0,0.25)',
                letterSpacing: '-0.03em',
                fontStretch: 'normal',
                fontWeight: 700,
                willChange: 'transform'
              }}
            >
              <span>KARTHICK&nbsp;GANESH&nbsp;-&nbsp;</span>
              <span>KARTHICK&nbsp;GANESH&nbsp;-&nbsp;</span>
              <span>KARTHICK&nbsp;GANESH&nbsp;-&nbsp;</span>
            </div>
            {/* Duplicate element for seamless loop */}
            <div 
              aria-hidden="true"
              className={`whitespace-nowrap absolute top-[10%] text-[15vw] tracking-[-0.03em] opacity-[0.08] 
                         select-none transform-gpu inline-flex uppercase ${raleway.className}`}
              style={{
                WebkitTextStroke: '1.5px rgba(255,69,0,0.25)',
                letterSpacing: '-0.03em',
                fontStretch: 'normal',
                fontWeight: 700,
                willChange: 'transform'
              }}
            >
              {/* <span>KARTHICK&nbsp;GANESH&nbsp;-&nbsp;</span>
              <span>KARTHICK&nbsp;GANESH&nbsp;-&nbsp;</span>
              <span>KARTHICK&nbsp;GANESH&nbsp;-&nbsp;</span> */}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="min-h-screen flex flex-col items-center justify-center relative px-4 md:px-0">
          {/* Profile Image Container */}
          <motion.div 
            className="relative w-[280px] h-[350px] md:w-[400px] md:h-[500px] z-20 
                      group rounded-sm transform perspective-100"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              transition: 'transform 0.3s ease-out'
            }}
            whileHover={{ scale: 1.02 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30
            }}
          >
            {/* Gradient Background with improved colors */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-[#FF4500] via-[#FF6B00] to-[#FF8C00] 
                         opacity-90 group-hover:opacity-100 transition-opacity duration-500
                         bg-gradient-animate"
            />

            {/* Noise Overlay */}
            <div className="absolute inset-0 mix-blend-overlay opacity-20 bg-noise" />

            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FF4500] via-[#FF6B00] to-[#FF8C00] 
                           rounded-sm blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

            {/* Image Container */}
            <div className="relative w-full h-full overflow-hidden rounded-sm">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <Image
                src="/Mainpfp.jpg"
                alt="Profile"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
            </div>

            {/* Subtle Border */}
            <div className="absolute inset-0 border border-white/10 rounded-sm" />
          </motion.div>

          {/* Tagline */}
          <div className="mt-8 md:mt-16 text-center relative z-30">
            <h2 className="text-sm md:text-base tracking-[0.2em] font-medium leading-relaxed opacity-90">
            A DIGITAL ADVENTURER CRAFTING <br className="hidden md:block"/>
            WEB WORLDS WITH CODE AND CREATIVITY
            </h2>
          </div>
        </main>

        {/* About Section */}
        <section className="min-h-screen relative flex items-center justify-center px-4 md:px-0">
          {/* Gradient Background with Blur */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff05] via-[#00000080] to-black backdrop-blur-md" />
          
          {/* Content Container with Local Blur */}
          <div className="relative max-w-[1200px] mx-auto px-4 py-12 md:py-20">
            <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-xl rounded-3xl" />
            
            <div className="relative z-10">
              <motion.p 
                className="text-[#FF4500] uppercase tracking-[0.2em] mb-16 text-center text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                About
              </motion.p>

              <div className="text-center">
                {[
                  { text: "I AM AN INDEPENDENT PROBLEM SOLVER", delay: 0 },
                  { text: "AND CREATIVE DESIGNER WITH A PASSION", delay: 0.1 },
                  { text: "FOR BUILDING INNOVATIVE DIGITAL", delay: 0.2 },
                  { text: "EXPERIENCES. SPECIALIZING IN WEB", delay: 0.3 },
                  { text: "DEVELOPMENT AND UI/UX DESIGN,", delay: 0.4 },
                  { text: "I BRING IDEAS TO LIFE WITH CODE", delay: 0.5 },
                  { text: "AND CREATIVITY.", delay: 0.6 }
                ].map(({ text, delay }, index) => (
                  <motion.div
                    key={index}
                    className="overflow-hidden"
                    initial={{ opacity: 0.1 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ 
                      once: false,
                      amount: "all",
                      margin: "-10%" 
                    }}
                    transition={{ 
                      duration: 1,
                      delay,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  >
                    <h2 className="text-2xl md:text-[3.2rem] font-medium leading-[1.2] md:leading-[1.1] tracking-tight py-1"
                        style={{ WebkitTextStroke: '0.5px rgba(255,255,255,0.5)' }}>
                      {text}
                    </h2>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="text-center mt-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <motion.button
                  className="relative px-10 py-4 text-sm tracking-[0.2em] rounded-sm overflow-hidden
                             bg-gradient-to-r from-[#FF4500] to-[#FF6B00] group
                             shadow-[0_0_20px_rgba(255,69,0,0.3)] hover:shadow-[0_0_30px_rgba(255,69,0,0.5)]
                             transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 font-medium">MORE ABOUT ME</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B00] to-[#FF4500] 
                                 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 
                                 bg-white transition-opacity duration-300" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>
        <Creations />
        <Capabilities />
        <Achievement />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;