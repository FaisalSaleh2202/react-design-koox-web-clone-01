import React, { useState } from 'react';
import { Fade as Hamburger } from 'hamburger-react';

function RightButtonMenu({ onClick }) {
  return (
    <div className='right-menu__button'>
      <button type='button' onClick={onClick}>
        <Hamburger color='white' direction='right' duration={0.8} />
      </button>
    </div>
  );
}

export default RightButtonMenu;
