import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import RightButtonMenu from './RightButtonMenu';
import InstagramIcon from '@mui/icons-material/Instagram';

function MenuPopUp() {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { y: 0, transition: { delay: 0.2, duration: 0.8 } },
    closed: { y: '100%', transition: { delay: 0.4, duration: 1 } },
  };

  const variantsUl = {
    open: {
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: 0.5 },
    },
  };

  const variantLi = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 250,
      opacity: 0,
      transition: {
        y: { stiffness: 10000 },
      },
    },
  };

  const listsMenu = [
    'cold-pressed',
    'smoothies',
    'boosters',
    'bowls',
    'treats',
  ];

  return (
    <>
      <RightButtonMenu onClick={() => setIsOpen((isOpen) => !isOpen)} />
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        className='menu-pop__up'
      >
        <motion.ul className='menu-mobile__view'>
          <motion.li>
            {' '}
            <Link to='/about'>
              {' '}
              <button
                style={{
                  border: 'none',
                  backgroundColor: 'transparent',
                  color: '#215732',
                  fontSize: '28px',
                  fontFamily: 'rationaltwdemo-light',
                }}
                onClick={() => setIsOpen(false)}
              >
                about
              </button>{' '}
            </Link>{' '}
          </motion.li>
          <motion.li>
            {' '}
            <Link to='/menu'>
              {' '}
              <button
                style={{
                  border: 'none',
                  backgroundColor: 'transparent',
                  color: '#215732',
                  fontSize: '28px',
                  fontFamily: 'rationaltwdemo-light',
                }}
                onClick={() => setIsOpen(false)}
              >
                menu
              </button>{' '}
            </Link>{' '}
          </motion.li>
          <motion.ul
            variants={variantsUl}
            className='menu-mobile__view-menu-ul'
          >
            {listsMenu.map((listMenu, index) => (
              <>
                <motion.li variants={variantLi}>{listMenu}</motion.li>
              </>
            ))}
          </motion.ul>
          <motion.li>contact</motion.li>
          <motion.li>order now</motion.li>
          <InstagramIcon
            style={{
              zIndex: '994',
              alignContent: 'center',
              color: '#215732',
              alignItems: 'center',
            }}
          />
        </motion.ul>

        <motion.ul variants={variantsUl} className='menu-desktop__view'>
          {listsMenu.map((listMenu, index) => (
            <>
              <motion.li variants={variantLi}>{listMenu}</motion.li>
            </>
          ))}
        </motion.ul>
      </motion.div>
    </>
  );
}

export default MenuPopUp;
