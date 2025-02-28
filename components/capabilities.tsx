import { motion } from 'framer-motion';
const skills = [
  { title: "DEVELOPMENT", details: ["FRONTEND", "ANALYSIS", "BACKEND", "DEPLOYMENT"] },
  // { title: "STRATEGY", details: ["", "ANALYSIS", "DESIGNER", "OPTIMIZATION"] },
  { title: "LANGUAGES", details: ["JAVA", "PYTHON", "JAVASCRIPT", "C"] },
  { title: "FRAMEWORK", details: ["NEXTJS", "TAILWIND", "KERAS", "TAILWIND"] },
];

const Capabilities = () => {
  return (
    <>
    <section className="relative min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 pt-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="w-full md:w-2/3">
            <motion.p 
              className="text-[#FF4500] uppercase tracking-[0.2em] text-sm mb-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Capabilities
            </motion.p>
            <div className="overflow-hidden relative">
              <motion.h2 
                className="text-3xl md:text-[3.2rem] font-medium leading-[1.1] tracking-tight"
                style={{ WebkitTextStroke: '0.5px rgba(255,255,255,0.5)' }}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                A PROBLEM SOLVER
                <br />
                WHO SOLVES FOR
                <br />
                UNIQUE VISION
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
              className="relative px-10 py-4 text-sm tracking-[0.2em] rounded-sm overflow-hidden 
                         bg-gradient-to-r from-[#FF4500] to-[#FF6B00] group 
                         shadow-[0_0_20px_rgba(255,69,0,0.3)] hover:shadow-[0_0_30px_rgba(255,69,0,0.5)] 
                         transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 font-medium">GET IN TOUCH</span>
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

      <div className="relative w-full my-10">
        <motion.div 
          className="absolute left-0 right-0 h-[1px] bg-white/20"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </section>
    <section className='flex items-center justify-between flex-col '>
      {skills && skills.map((items,index)=>(
        <div className='h-full absolute'>
        <div key={index} className='bg-[#131313] p-4 rounded-lg absolute h-[654px] w-[435px] z-0'>
          <div className='text-2xl'>{items.title}</div>
          <div className='text-center  mt-3 justify-around'>{items.details.map((item,index)=>(
            <>
              <div key={index} className='mb-2 mt-2'>
                {item}
              
              </div>
              <hr className="border-t border-dotted border-gray-700"/>
            </>
          ))}</div>
        </div>
        <img src="./Skills.png" alt="" className='z-50 relative'/>
        </div>
      ))}
    </section>
    </>
  );
};

export default Capabilities;
