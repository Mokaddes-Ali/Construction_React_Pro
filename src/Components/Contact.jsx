import { motion } from 'framer-motion'
import {slideUpVariants, zoomInVariants} from './animation';

const Contact = () => {
  return (
    <>
    <div id="contact" className="bg-white w-full">
    <div className="lg:w-[80%] w-90% m-auto py-[60px] flex lg:flex-row flex-col
    justify-between items-center gap-[50px] mt-[20px] px-10">
        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
         className="lg:w-[60%] w-full flex flex-col justify-center items-start gap-6 lg:-mt-48">

            <motion.h1
            variants={slideUpVariants}
            className="text-yellow-500 text-2xl">Contact Us
            </motion.h1>
            <motion.p
            variants={slideUpVariants}
            className="text-black text-4xl uppercase font-bold">
                REACH US FOR ANY QUERY
            </motion.p>
            <motion.div
             variants={slideUpVariants}
             className="bg-yellow-500 w-[120px] h-[6px]"></motion.div>

            <p className="text-gray-700 italic text-3xl mt-[50px]">
            We are the leader with 25 years of experience in the construction market!</p>

        </motion.div>
        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
         className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6">
          <motion.form 
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="flex flex-col justify-center items-start gap-4 w-full">
            <input type="text" placeholder="Name" className="w-full p-3 rounded-lg border-2 border-gray-300"/>
            <input type="email" placeholder="Email" className="w-full p-3 rounded-lg border-2 border-gray-300"/>
            <input type="text" placeholder="Phone" className="w-full p-3 rounded-lg border-2 border-gray-300"/>
            <input type="text" placeholder="Address" className="w-full p-3 rounded-lg border-2 border-gray-300"/>
            <textarea placeholder="Message" rows="4" className="w-full p-3 rounded-lg border-2 border-gray-300"></textarea>
            <motion.button
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className="bg-yellow-500  rounded-lg hover:bg-black w-full hover:text-white px-10 py-3 font-bold text-black">Send
            </motion.button>

          </motion.form>
         </motion.div>

    </div>
    </div>
    </>
  )
}

export default Contact