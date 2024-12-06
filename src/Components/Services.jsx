import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { allservices } from '../Data/export';

const Services = () => {
  return (
    <div className="w-full bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px] px-9"
        id="services"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl"
        >
          Special Offer
        </motion.h1>
        <motion.p
          variants={slideUpVariants}
          className="text-black text-4xl uppercase font-bold text-center"
        >
          OUR BEST SERVICES
        </motion.p>
        <motion.div
         variants={slideUpVariants}
         className="bg-yellow-500 w-[120px] h-[6px]"></motion.div>

        {/* Make card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center
           items-start gap-[20px] mt-[30px]"
        >
          {allservices.map((item, index) => (
            <motion.div
            variants={zoomInVariants}
              key={index}
              className="flex justify-center items-start gap-5 p-8"
            >
            
              <img
                src={item.icon}
                alt={item.title}
                className='w-[100px] lg:w-[70px] border-2
                 border-yellow-500 hover:bg-yellow-500 rounded-lg p-2'
              />
              <div className="flex flex-col justify-center items-start gap-3">
             
              <h1 className="text-xl font-bold">{item.title}</h1>
              <p className="text-[20px]">{item.about}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
