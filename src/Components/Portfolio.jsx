import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import portfolio1 from '../assets/Images/project1.jpg';
import portfolio2 from '../assets/Images/project2.jpg';
import portfolio3 from '../assets/Images/project3.jpg';
import portfolio4 from '../assets/Images/project4.jpg';
import portfolio5 from '../assets/Images/project5.jpg';
import portfolio6 from '../assets/Images/project6.jpg';
import portfolio7 from '../assets/Images/project7.jpg';
import portfolio8 from '../assets/Images/project8.jpg';


const Portfolio = () => {
  return (
    <div className="w-full" id="portfolio">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[100%] w-[100%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px] "
        
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl"
        >
          PORTFOLIO
        </motion.h1>
        <motion.p
          variants={slideUpVariants}
          className="text-white text-4xl uppercase font-bold text-center"
        >
          OUR BEST PROJECTS
        </motion.p>
        <motion.div
          variants={slideUpVariants}
         className="bg-yellow-500 w-[120px] h-[6px]">

        </motion.div>

        {/* Make card image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="w-full m-auto grid lg:grid-cols-4 grid-cols-1">
         <img src={portfolio1} alt="project image1" className="w-full h-[250px] p-1"/>
         <img src={portfolio2} alt="project image1" className="w-full h-[250px] p-1"/>
         <img src={portfolio3} alt="project image1" className="w-full h-[250px]p-1"/>
         <img src={portfolio4} alt="project image1" className="w-full h-[250px] p-1"/>
         <img src={portfolio5} alt="project image1" className="w-full h-[250px] p-1"/>
         <img src={portfolio6} alt="project image1" className="w-full h-[250px] p-1"/>
         <img src={portfolio7} alt="project image1" className="w-full h-[250px] p-1"/>
         <img src={portfolio8} alt="project image1" className="w-full h-[250px] p-1"/>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Portfolio