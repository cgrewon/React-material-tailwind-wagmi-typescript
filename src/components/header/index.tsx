import clsx from 'clsx';
import React from 'react';


const Header : React.FC = ()=>{

    return <div className={clsx(' fixed top-0 left-0 right-0 h-[80px] ',
    'flex flex-row justify-between ',
    'text-white px-10 py-6 border',
    ' bg-[#2f3749cb] ', 
    ' !z-20')}>

        <div>
            <h1>Title</h1>
        </div>

        <div>
            Menus
        </div>

    </div>
}

export default Header;