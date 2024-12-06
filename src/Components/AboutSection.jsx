import { motion } from 'framer-motion'
import {slideUpVariants, zoomInVariants} from './animation';



const AboutSection = () => {
  return (
    <>
    <div className="lg:w-[80%] w-90% m-auto py-[60px] flex lg:flex-row flex-col
    justify-between items-center gap-[50px] px-9 " id='about'>
        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
         className="lg:w-[60%] w-full flex flex-col justify-center items-start gap-6">

            <motion.h1
            variants={slideUpVariants}
            className="text-yellow-500 text-2xl">Welcome To
            </motion.h1>
            <motion.p
            variants={slideUpVariants}
            className="text-white text-4xl uppercase font-bold">
                construction website
            </motion.p>
            <motion.div
             variants={slideUpVariants}
             className="bg-yellow-500 w-[120px] h-[6px]"></motion.div>

            <p className="text-gray-50 italic text-3xl mt-[50px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Animi omnis dolore assumenda nulla laborum quisquam, quia voluptate voluptates
              Aliquid sapiente repudiandae eos commodi labore.</p>

        </motion.div>

        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
         className="lg:w-[40%] w-full flex flex-col justify-center items-start  gap-6">
          <p className='text-white text-lg text-justify'>

            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Animi omnis dolore assumenda nulla laborum quisquam, quia voluptate voluptates.
            Aliquid sapiente repudiandae eos commodi labore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Animi omnis dolore assumenda nulla laborum quisquam, quia voluptate voluptates.
            </p> 
            <motion.button
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className="bg-yellow-500  rounded-lg hover:bg-white hover:text-black px-10 py-3 font-bold text-black">Read More
            </motion.button>
        </motion.div>

    </div>
    </>
  )
}

export default AboutSection
