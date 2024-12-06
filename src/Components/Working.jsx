import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { planning } from '../Data/export';

const Working = () => {
  return (
    <div className="w-full bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]"
        id="services"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl"
        >
          STEP BY STEP
        </motion.h1>
        <motion.p
          variants={slideUpVariants}
          className="text-black text-4xl uppercase font-bold text-center"
        >
          HOW IT IS WORKING
        </motion.p>
        <motion.div
         variants={slideUpVariants}
         className="bg-yellow-500 w-[120px] h-[6px]"></motion.div>

        {/* Make card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="w-full grid lg:grid-cols-4 grid-cols-1 justify-center
           items-start gap-[20px] mt-[30px]"
        >
          {planning.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-5 border-2 border-yellow-500 rounded-lg p-6"
            >
              <div className="">
              <item.icon className="size-[80px] bg-yellow-500 hover:bg-black
              hover:fill-white p-4 rounded-full" />
              </div>
              
                <h1 className="text-2xl font-bold uppercase">{item.title}</h1>
                <p className="text-[20px] text-center text-gray-600">{item.about}</p>
             
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Working