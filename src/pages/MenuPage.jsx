import React, { useState } from 'react';
import img_menu_1 from '../assets/bottle_menu_1.png';
import img_menu_2 from '../assets/GREEN_VITALITY.png';
import img_shape from '../assets/shape_01.png';
import img_shape_2 from '../assets/shape_02.png';
import { motion } from 'framer-motion';

const MenuPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const show = {
    opacity: 1,
    display: 'block',
  };

  const hide = {
    opacity: 0,
    transitionEnd: {
      display: 'none',
    },
  };

  function onIsOneHandle(id) {
    setIsOpen((isOpen) => !isOpen, id);
  }

  return (
    <>
      <div className='menu-page'>
        <div className='menu-page__container'>
          <div className='content'>
            <div className='left'>
              <div className='price-and__detail'>
                <h1>Rp. 2.000</h1>
                <button style={{ zIndex: 992 }} onClick={onIsOneHandle}>
                  +
                </button>
              </div>
            </div>
            <div className='right'>
              <img
                className='img-shape'
                src={img_shape}
                style={{
                  position: 'absolute',
                  margin: 'auto 0',
                  width: '24%',
                  left: '45%',
                  right: '45%',
                }}
              />
              <img
                style={{
                  top: '20%',
                  width: '18%',
                  left: '45%',
                  position: 'absolute',
                }}
                src={img_menu_2}
              />
            </div>
          </div>
          <div className='content'>
            <div className='left'>
              <div className='price-and__detail'>
                <h2>Hydro Orange</h2>
                <h1>Rp. 2.000</h1>
                <button style={{ zIndex: 992 }} onClick={onIsOneHandle}>
                  +
                </button>
              </div>
            </div>
            <div className='right'>
              <img
                src={img_shape_2}
                style={{
                  position: 'absolute',
                  margin: 'auto 0',
                  width: '24%',
                  left: '45%',
                  right: '45%',
                }}
              />
              <img
                style={{
                  width: '18%',
                  left: '45%',
                  position: 'absolute',
                }}
                src={img_menu_1}
              />
            </div>
          </div>
        </div>
        <motion.div
          initial={false}
          animate={isOpen ? show : hide}
          transition={{
            ease: [0, 0.71, 0.2, 1.01],
            type: 'tween',
          }}
          className='menu-page__detail'
          style={{ display: 'flex' }}
        >
          <motion.div className='item'>
            <div className='left'>
              <div className='price-and__detail'>
                <h1>
                  Made with 100%
                  <br /> Organic ingredients
                </h1>
                <p>apple, lemon, celery, parsley, spinach, kale, ginger</p>
                <br />
                <br />& nothing else
                <h6>
                  Per 10mL:Energy 172kj (41kcal) - Fat <br />
                  0.1 of which saturated 0.0 <br /> Carbohydrates 9.2g of which
                  sugar <br /> 9.0g - Fiber 0.7 - Protein 0.4g - salt 0.02g
                </h6>
                <motion.button
                  style={{ zIndex: 992 }}
                  onClick={() => setIsOpen((isOpen) => !isOpen)}
                >
                  +
                </motion.button>
              </div>
            </div>
            <div className='right'>
              <img
                style={{
                  top: '5%',
                  width: '24%',
                  left: '45%',
                  position: 'absolute',
                }}
                src={img_menu_2}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default MenuPage;
