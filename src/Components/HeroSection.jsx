import heroImage from '../assets/Images/heroimg.png';

import {motion} from 'framer-motion';
import {slideUpVariants, zoomInVariants} from './animation';
import background from '../assets/Images/homeimg.webp';


const HeroSection = () => {
  return (
    <>
    <div id ="hero" className=" bg-black w-full lg:h-[700px] h-fit m-auto pt-[60px] lg:pt-[0px] lg:px-[150px] px-[20px]
    flex justify-between items-center lg:flex-row flex-col lg:gap-5 gap-[50px] bg-cover bg-center " style={{backgroundImage: `url(${background})`}}>
        <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
         className="lg:w-[60%] w-full flex flex-col justify-center items-start lg:gap-8 gap-4">
            <motion.h1
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
            className="text-yellow-500 text-3xl font-bold">We are here to help you</motion.h1>
            <motion.p
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
            className="text-white text-5xl uppercase font-extrabold">
                we will build your dream
            </motion.p>
            <motion.div
             variants={slideUpVariants}
             className="bg-yellow-500 w-[120px] h-[6px]"></motion.div>
            <motion.div className="text-white">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi omnis dolore assumenda nulla laborum quisquam, quia voluptate voluptates. 
                    Aliquid sapiente repudiandae eos commodi labore.</p>

            </motion.div>
           
           
            <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
         className="flex justify-center gap-5">

            
            <motion.button
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className="text-white hover:text-yellow-500 border-white hover:border-yellow-500 border-2 px-10 py-3  rounded-lg">REACH US</motion.button>
        </motion.div>
        </motion.div>
        <div className="w-[40%] flex flex-col justify-end items-end ">
            <motion.div
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            >
                <img src={heroImage} alt="hero" className="lg:h-[600px] lg:mb-[-100px]" />
            </motion.div>
        </div>
    </div>
    </>
  )
}

export default HeroSection