import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Heart } from 'lucide-react';

function MobileSidebar() {
  return (
    <div className='flex justify-center gap-10 border-t fixed w-full bottom-0 left-0 bg-white z-10 p-2 sm:hidden'>
        <Link to={"/"} >
            <Home size={"24"} className='cursor-pointer'/>
        </Link>
        <Link to={"/favourites"} >
            <Heart size={"24"} className='cursor-pointer'/>
        </Link>
    </div>
  )
}

export default MobileSidebar