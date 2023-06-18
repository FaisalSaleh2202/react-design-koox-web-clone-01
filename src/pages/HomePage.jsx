import React, { useEffect, useState, useRef } from 'react';
import LinearProgressBar from '../components/LinearProgressBar';
import { motion } from 'framer-motion';
import background_1 from '../assets/background_1.1.png';
import background_2 from '../assets/background_2.2.png';
import background_3 from '../assets/background_3.3.png';
import background_4 from '../assets/background_4.4.png';
import background_5 from '../assets/background_5.5.png';
import background_8 from '../assets/background_8.8.png';
import InstagramIcon from '@mui/icons-material/Instagram';

function HomePage() {
  const [scroll, setScroll] = useState(0);
  const [max, setMax] = useState(0);

  useEffect(() => {
    const eventScroll = document.querySelector('#content');
    const scrollMaxWidth = document
      .querySelector('.content')
      .getBoundingClientRect().width;

    setMax(scrollMaxWidth);

    eventScroll.addEventListener('scroll', () => {
      setScroll(eventScroll.scrollTop);
    });
  }, [max, scroll]);

  return (
    <>
      <section className='home-page'>
        <div id='content' className='home-page__container'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='content'
          >
            <motion.img
              initial={{ y: -250 }}
              animate={{ y: 50 }}
              transition={{ delay: 1, type: 'spring' }}
              style={{
                bottom: '50%',
                width: '24%',
                left: '5%',
                position: 'absolute',
              }}
              src={background_1}
            />
            <motion.img
              initial={{ y: -250 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, type: 'spring' }}
              style={{
                bottom: '7%',
                width: '20%',
                left: '3%',
                zIndex: 2,
                position: 'absolute',
              }}
              src={background_2}
            />
            <motion.img
              initial={{ y: -250 }}
              animate={{ y: 25 }}
              transition={{ delay: 0.3, type: 'spring' }}
              style={{
                bottom: '0%',
                top: '55%',
                width: '24%',
                left: '75%',
                zIndex: 2,
                position: 'absolute',
              }}
              src={background_3}
            />
            <motion.img
              initial={{ y: -250 }}
              animate={{ y: 0 }}
              transition={{ delay: 1, type: 'spring' }}
              style={{
                top: '18%',
                width: '12%',
                right: '0%',
                zIndex: 2,
                position: 'absolute',
              }}
              src={background_4}
            />
            <img
              style={{
                bottom: '5%',
                width: '16%',
                left: '25%',
                zIndex: 2,
                position: 'absolute',
              }}
              src={background_5}
            />
            <img
              style={{
                top: '15%',
                width: '12%',
                left: '70%',
                position: 'absolute',
              }}
              src={background_8}
            />
            <h1>Juice Farmacy</h1>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            initial='hidden'
            animate='visible'
            className='content'
          >
            <div className='left'></div>
            <div className='right'>
              <h1>02</h1>
              <h3>
                100 <br /> Organic
              </h3>
              <div>
                certified <br /> by soil <br /> Association
              </div>
            </div>
          </motion.div>
          <div className='content'>
            <div className='left'></div>
            <div className='right'>
              <h1>03</h1>
              <div>
                cold <br /> pressed
              </div>
            </div>
          </div>
          <div className='content'>
            <div className='left'></div>
            <div className='right'>
              <h1>04</h1>
              <div>
                Unpasteurised <br /> No HPP
              </div>
            </div>
          </div>
          <div className='content'>
            <div className='end-content'>
              <h1>menu</h1>
              <h6>Discover now</h6>
              <motion.button
                drag
                dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
              >
                +
              </motion.button>
            </div>
          </div>
        </div>
        <div className='progress-bar'>
          <LinearProgressBar
            bgcolor='#215732'
            progress={scroll}
            maxWidth={max}
          />
        </div>
        <div className='home-page__foot'>
          <p>Scroll to discover</p>
        </div>
      </section>
    </>
  );
}

export default HomePage;
