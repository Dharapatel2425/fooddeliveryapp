import React from 'react';
import Delivery from '../img/delivery.png';
import HeroBg from '../img/heroBg.png';
import { heroData } from '../utils/data';



const HomeContainer = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home'>
            <div className='py-2 gap-6 flex-1 flex flex-col items-start justify-center'>
                <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
                    <p className='text-base text-orange-500 font-semibold'> Bike Delivery</p>
                    <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
                        <img src={Delivery} alt="delivery" className='w-full h-full object-contain' />
                    </div>
                </div>

                <p className='text-[2rem] text-left lg:text-[4.5rem] font-bold tracking-wide text-headingColor'>
                    The fastest Delivery in
                    <span className='text-orange-600 text-[2.5rem] lg:text-[5rem]'>Your City</span>
                </p>
                <p className='text-base md:w-[80%] text-textColor text-center md:text-left'>
                    Relax, think of food and here it is.One Click, one order and you get the food delivered.Think, Choose, Order, Delivered , Eat, Enjoy and Repeat.When you crave for midnight delicacy, just dial our number.Freshness and craziness delivered at your doorstep.
                </p>
                <button type='button' className='md:w-auto bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'>Order Now</button>
            </div>

            <div className='py-2 flex-1 flex items-center relative'>
                <img src={HeroBg} alt="Hero-Bg" className='ml-auto h-420 w-full lg:w-auto lg:h-650'/>
                <div className='w-full gap-4 flex-wrap h-full absolute top-0 left-0 lg:px-32 py-4 flex items-center justify-center'>
                    { heroData && heroData.map(n=>(
                        <div key={n.id} className='lg:w-190 drop-shadow-lg p-4 rounded-3xl flex flex-col items-center justify-center
                        bg-cardOverlay backdrop-blur-md'>
                           <img src={n.imagesrc} className="w-20 -mt-10 lg:w-40 lg:-mt-20" alt='I1'/>
                           <p className='text-base lg:text-xl mt-2 lg:mt-4 font-semibold text-textColor'>{n.name}</p>
                           <p className='text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3'>{n.decp}</p>
                           <p className='text-sm font-semibold text-headingColor'>
                               <span className='text-xs text-red-600'>$</span> {n.price}
                           </p>
                       </div>

                    ))}
                    
                </div>
            </div>

        </section>
    )
}

export default HomeContainer
