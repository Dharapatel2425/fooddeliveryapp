import React, { useEffect } from 'react';
import { useStateValue } from '../context/StateProvider';
import CartContainer from './CartContainer';
import MenuContainer from './MenuContainer';

const Menu = () => {
 const [{cartShow} ,dispatch] = useStateValue();
  useEffect(()=>{},[cartShow]);
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
        <MenuContainer/>
      {
        cartShow && (
          <CartContainer/>
        )
      }
      
    </div>
  )
}

export default Menu
