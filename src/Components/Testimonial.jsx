import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { clients } from '../Data/export';

const Testimonial = () => {
  return (
    <div id="testimonial" className="w-full">
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
          TESTIMONIALS
        </motion.h1>
        <motion.p
          variants={slideUpVariants}
          className="text-white text-4xl uppercase font-bold text-center"
        >
        WHAT THEY SAY ABOUT US
        </motion.p>
        <motion.div
         variants={slideUpVariants}
         className="bg-yellow-500 w-[120px] h-[6px]"></motion.div>

        {/* Make card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="lg:w-full w-[90%] grid lg:grid-cols-3 grid-cols-1 justify-center
           items-start gap-8 mt-[30px]"
        >
          {clients.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <div className="border-2 border-white hover:bg-yellow-500 pb-[100px] pt-[30px] ">
                <p className="text-lg text-white  hover:text-black text-center">{item.about}</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-3">
                <img src={item.image} alt="client" className="w-[120px] h-[120px] -mt-[50px] rounded-full" />
                <h1 className="text-white text-[27px] font-semibold uppercase">{item.name}</h1>
                <p className="text-yellow-500 text-[22px]">{item.post}</p>
                
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};



export default Testimonial