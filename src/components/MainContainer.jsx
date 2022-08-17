import React, { useEffect } from 'react';
import { useStateValue } from '../context/StateProvider';
import CartContainer from './CartContainer';
import HomeContainer from './HomeContainer';
import Section from './Section';

const MainContainer = () => {
  const [{cartShow} ,dispatch] = useStateValue();
  useEffect(()=>{},[cartShow]);
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <HomeContainer/>
      <Section/>
      {
        cartShow && (
          <CartContainer/>
        )
      }
      
  </div>
  )
}

export default MainContainer
