import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header className=" py-8 absolute z-10 w-full h-20 top-0 left-0">
      <nav className="flex justify-between items-center max-container">
        <Link to="/">
          <img 
          src={headerLogo} 
          alt="Logo"
          width={130}
          height={29}
          />
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
              to={item.href}
              className="font-montserrat leading-normal text-lg text-slate-gray"
              >
              {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger}
          alt="Hamburger"
          width={25}
          height={25}
          />
        </div>
      </nav>
    </header>
  )
}

export default Nav
