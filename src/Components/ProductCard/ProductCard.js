'use client';
import { motion } from "framer-motion";

let easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};

export default function ProductCard({product}){
    return(
        <motion.div 
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='flex flex-1 flex-col w-full max-sm:w-full p-5'
        >
          <motion.img 
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }} 
            src={product?.image} alt={product?.title} 
            className='w-[282px] h-[282px] object-contain' 
          />
          <div className='mt-8 flex justify-start gap-2.5'>
            <img src='./star.svg' alt='rating icon' width={24} height={24} />
            <p className='font-montserrat text-l leading-normal text-slate-gray'>{product.rating?.rate}</p>
          </div>
          <h3 className='mt-2 text-sm leading-normal font-palanquin'>{product?.title}</h3>
          <p className='mt-2 font-semibold font-montserrat text-coral-red text-xl leading-normal'>${product?.price}</p>
      </motion.div>
    )
}