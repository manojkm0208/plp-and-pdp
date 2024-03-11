
'use client';
import { motion } from "framer-motion";

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

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

function ProductPage({product}){

    return (
        <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
            <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center m-6'>
                <motion.div
                  className='flex flex-col gap-6 lg:w-2/4'
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                >
                    <motion.img 
                      animate={{ x: 0, opacity: 1 }}
                      initial={{ x: 200, opacity: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 0.2 }}
                      src={product?.image} alt={product?.title} 
                      className='w-full h-full aspect-square object-contain rounded-xl'
                    />
                </motion.div>
                {/* ABOUT */}
                <motion.div variants={stagger}className='flex flex-col gap-4 lg:w-2/4'>
                    <motion.div variants={fadeInUp}>
                        {/* <span className=' text-violet-600 font-semibold'>Special Sneaker</span> */}
                        <motion.h1 variants={fadeInUp} className='text-3xl font-bold'>{product?.title}</motion.h1>
                    </motion.div>
                    <motion.p variants={fadeInUp} className='text-gray-700'>{product?.description}</motion.p>
                    <motion.h6 variants={fadeInUp} className='text-2xl font-semibold'>${product?.price}</motion.h6>
                    <motion.div variants={fadeInUp} className='flex flex-row items-center gap-12'>
                      <button className='bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Add to Cart</button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default ProductPage;