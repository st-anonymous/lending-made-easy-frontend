import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const HandleOpenMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const navItems = ['Explore', 'History', 'Offers', 'Profile'];

  const NavItems = (
    <>
      {navItems.map((navItem) => {
        return (
          <Link
            key={navItem}
            to={`/${navItem.toLowerCase()}`}
            onClick={HandleOpenMenu}
            className='text-xl text-stone-200 p-2 rounded-lg hover:text-stone-800 hover:bg-stone-200'>
            {navItem}
          </Link>
        );
      })}
    </>
  );

  return (
    <header className='bg-stone-800 h-24 flex justify-between align-baseline px-7'>
      <div className='flex items-center'>
        <Link to='/' className=' text-3xl text-stone-200'>
          Lending Made Easy
        </Link>
      </div>
      <nav className='navbar hidden gap-x-12 items-center lg:flex'>
        {NavItems}
      </nav>
      <div className={`flex items-center lg:hidden`}>
        <div className='text-3xl text-stone-200' onClick={HandleOpenMenu}>
          {openMenu ? '⛌' : '☰'}
        </div>
        {openMenu && (
          <div className='bg-stone-800 flex flex-col w-full max-w-[350px] h-[50%] absolute top-20 right-0 justify-around items-center opacity-75 rounded-b-xl'>
            {NavItems}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
