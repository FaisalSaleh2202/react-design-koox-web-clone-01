import React from 'react';
import { Link } from 'react-router-dom';

function LeftButtonMenu() {
  return (
    <div className='left-menu__button'>
      <button type='button'>
        {' '}
        <Link
          to='/'
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Koox
        </Link>{' '}
      </button>
    </div>
  );
}

export default LeftButtonMenu;
