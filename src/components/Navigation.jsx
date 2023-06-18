import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const navs = [
    {
      menu: 'Home',
      link: '/',
    },
    {
      menu: 'Menu',
      link: '/menu',
    },
    {
      menu: 'About',
      link: '/about',
    },
    {
      menu: 'Order Now',
      link: '/order-now',
    },
    {
      menu: 'Contact',
      link: '/contact',
    },
  ];

  return (
    <div className='nav'>
      <ul>
        {navs.map((nav) => (
          <li className='nav-li'>
            <Link
              className='nav-link'
              to={`${nav.link}`}
              style={{ textDecoration: 'none', color: '#215732' }}
            >
              {nav.menu}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;
