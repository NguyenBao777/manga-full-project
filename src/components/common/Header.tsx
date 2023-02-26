import {useEffect, useLayoutEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {TbMenu} from 'react-icons/tb';
import {MdOutlineClose} from 'react-icons/md';
import Drawer from '@mui/material/Drawer';
import { menuItems } from '../../assets/data';
import Logo from '../../assets/images/logo-manga.png';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false),
    [isScroll, setIsScroll] = useState(false);


    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY > 200){
                setIsScroll(true);
            }else{
                setIsScroll(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
    
        return ()=> window.removeEventListener('scroll', handleScroll);   
    },[]);

  return (
    <header className={`py-4 z-40 flex items-center justify-between ${isScroll ? 'fixed top-0 left-0 right-0 bg-white/75 shadow-md': ''}`}>
        <div className='flex'>
            <Link to='/' className='flex gap-2 items-center'>
                <img src={Logo} className='w-60'/>
                <span className='font-bold text-primary text-xl'>Love Manga</span>
            </Link>
        </div>
        <nav className='mt-2'>
            {/* PC navigate */}
            <ul className='hidden md:flex gap-6 justify-center items-center'>
                {menuItems?.length && menuItems.map((menuItem, key)=>(
                    <li key={key} className='hover:bg-primary transition-all duration-75 ease-in-out px-4 py-2 rounded-sm group relative'>
                        <Link to={menuItem?.path} className='flex items-center gap-2 justify-center group-hover:text-white transition-all duration-75 ease-in-out'>
                            {menuItem?.icon}
                            <span>{menuItem?.name}</span>
                        </Link>
                        {menuItem?.children?.length > 0 && (
                            <div className='shadow-md bg-white w-full text-center rounded-sm absolute left-0 top-100 z-10 p-4 flex-col flex-wrap max-h-[400px] justify-center gap-2 hidden group-hover:flex'>
                                {menuItem?.children.map((subMenuItem, index)=> (
                                    <Link to={subMenuItem?.path}>{subMenuItem?.name}</Link>
                                ))}
                            </div>
                        )}
                    </li>
                ))}
            </ul>

            {/* Mobie navigate */}
            <button type='button' className='block md:hidden content-end border border-black rounded-sm p-2 hover:bg-gray-200 ease-in-out transition-all duration-75' onClick={()=> setOpenMenu(!openMenu)}>
                {openMenu ? (<MdOutlineClose className='text-2xl'/>):(<TbMenu className='text-2xl'/>)}
                
            </button>
            <Drawer
            anchor='left'
            open={openMenu}
            onClose={()=> setOpenMenu(false)}
          >
            <ul className='flex flex-col gap-6 justify-center items-center'>
                {menuItems?.length && menuItems.map((menuItem, key)=>(
                    <li key={key} className='hover:bg-primary transition-all duration-75 ease-in-out px-4 py-2 rounded-sm group relative'>
                        <Link to={menuItem?.path} className='flex items-center gap-2 justify-center group-hover:text-white transition-all duration-75 ease-in-out'>
                            {menuItem?.icon}
                            <span>{menuItem?.name}</span>
                        </Link>
                        {menuItem?.children?.length > 0 && (
                            <div className='shadow-md bg-white w-full rounded-sm absolute left-0 top-100 z-10 p-4 flex-col flex-wrap max-h-[400px] justify-center gap-2 hidden group-hover:flex'>
                                {menuItem?.children.map((subMenuItem, index)=> (
                                    <Link to={subMenuItem?.path}>{subMenuItem?.name}</Link>
                                ))}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
          </Drawer>
        </nav>
    </header>
  )
}

export default Header