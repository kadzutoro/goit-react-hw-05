import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { GiCrackedDisc } from "react-icons/gi";
import css from './Navigation.module.css'



const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive);
  };

  const Navigation = () => {
    return (
        <header>
            <div>
                <Link to='/'>
                <GiCrackedDisc className={css.logo} size={40} />
                </Link>
            </div>
            <nav>
                <NavLink to='/' className={buildLinkClass}>
                    Home
                </NavLink>
                <NavLink to='/movies' className={buildLinkClass}>
                    Movies
                </NavLink>
            </nav>
        </header>
    );
  };

  export default Navigation
