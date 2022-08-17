import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion';
import NotFound from '../img/NotFound.svg';

const ShowContainer = ({ flag, data,scrollValue}) => {
    const rowContainer = useRef();
    useEffect(()=> {
        rowContainer.current.scrollLeft += scrollValue;
    },[scrollValue]);
    return (
        <div
        ref={rowContainer}
         className={`w-full my-12 flex  scroll-smooth items-center gap-3 ${flag ? "overflow-scroll scrollbar-none" : "overflow-x-hidden flex-wrap justify-center"
            }`}>
            {data && data.length > 0 ? data.map((item) => (
                <div key={item?.id} className='w-275 min-w-[275px] md:min-w-[300px] md:w-300
                 h-[200px] bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg
                  hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
                    <div className='w-full flex items-center justify-between'>
                        <motion.div  whileHover={{ scale: 1.2 }} className='w-40 h-40  -mt-8 drop-shadow-2xl'>
                            <img src={item.imgeURL} alt="" className='w-full h-full object-contain'/>
                        </motion.div>
                        
                    </div>
                    <div className='w-full flex flex-col items-end justify-end'>
                        <p className='text-textColor font-semibold text-base md:text-lg'>
                            {item?.title}
                        </p>
                        <p className='mt-1 text-sm text-gray-500'>{item?.calories} Calories</p>
                        <p className='text-lg text-headingColor  font-semibold'>
                            <span className='text-sm text-red-500'>$</span>{item?.price}
                        </p>


                    </div>
                </div>
            )) : 
            <div className='w-full flex flex-col items-center justify-center'>
                <img src={NotFound} alt="" className='h-340'/>
                <p className='text-xl text-headingColor font-semibold my-2'>Items Not Available</p>
            </div>    
            }

        </div>
    )
}

export default ShowContainer
