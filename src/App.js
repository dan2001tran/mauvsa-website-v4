import Navbar from './Navbar';
import './App.css';
import LineGradient from './components/LineGradient';
import LineGradientReversed from './components/LineGradientReversed';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import test from './assets/test2.jpg';
function App() {
  const scrollContainer = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (scrollContainer.current.scrollTop > 5) {
        // adjust as needed
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    scrollContainer.current.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      scrollContainer.current.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <div className="wrapper" ref={scrollContainer}>
        <Navbar className="navbar" />
        <header>
          <img src={test} alt="test image" className="test1" />
          <a className="title">
            MID-ATLANTIC UNION OF VIETNAMESE STUDENT ASSOCIATION
          </a>
        </header>

        <section>
          <div className="values-wrapper">
            <a className="cultural-title">CULTURAL AWARENESS</a>
            <LineGradient width="50%" height="3px" />
            <div className="cultural">
              <motion.div
                className="proffessional-pic"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3 }}
                variants={{
                  hidden: { opacity: 0, x: -200 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <img src={require('./assets/JENN.jpg')} />
              </motion.div>

              <h3 className="cultural-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. At
                varius vel pharetra vel turpis nunc eget lorem. Aenean sed
                adipiscing diam donec adipiscing tristique risus nec feugiat.
                Enim sed faucibus turpis in eu. Nulla facilisi morbi tempus
                iaculis urna id. Id venenatis a condimentum vitae. Consectetur
                libero id faucibus nisl tincidunt eget nullam non. Elit
                scelerisque mauris pellentesque pulvinar pellentesque habitant
                morbi tristique senectus. Auctor urna nunc id cursus. Semper
                risus in hendrerit gravida rutrum quisque non tellus. Tristique
                senectus et netus et. Arcu non odio euismod lacinia at quis
                risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. At varius vel pharetra vel turpis nunc eget lorem.
                Aenean sed adipiscing diam donec adipiscing tristique risus nec
                feugiat. Enim sed faucibus turpis in eu. Nulla facilisi morbi
                tempus iaculis urna id. Id venenatis a condimentum vitae.
                Consectetur libero id faucibus nisl tincidunt eget nullam non.
                Elit scelerisque mauris pellentesque pulvinar pellentesque
                habitant morbi tristique senectus. Auctor urna nunc id cursus.
                Semper risus in hendrerit gravida rutrum quisque non tellus.
                Tristique senectus et netus et. Arcu non odio euismod lacinia at
                quis risus.
              </h3>
            </div>
          </div>
          <div className="values-wrapper">
            <div className="leadershipt-title-container">
              <a className="leadership-title">LEADERSHIP</a>
            </div>
            <div className="leadershipt-title-container">
              <LineGradientReversed width="50%" height="3px" />
            </div>
            <div className="leadership-panel-container">
              <div className="leadership-panel">
                <motion.div
                  className="leadership-image-container"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -200 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <img src={require('./assets/tyler.jpg')} />
                </motion.div>
                <div className="leadership-words">
                  <a className="leadership-image-title"> Tyler Sammay</a>
                  <a className="leadership-image-title-caption">
                    Executive Director of MAC XI
                  </a>
                  <a className="leadership-image-title-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. At varius vel pharetra vel turpis nunc eget lorem.
                    Aenean sed adipiscing diam donec adipiscing tristique risus
                    nec feugiat. Enim sed faucibus turpis in eu. Nulla facilisi
                    morbi tempus iaculis urna id. Id venenatis a condimentum
                    vitae.
                  </a>
                </div>
              </div>
              <div className="leadership-panel">
                <motion.div
                  className="leadership-image-container"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -200 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <img src={require('./assets/annie.jpg')} />
                </motion.div>
                <div className="leadership-words">
                  <a className="leadership-image-title"> Annie Tran</a>
                  <a className="leadership-image-title-caption">
                    Registration Director of MAC XI
                  </a>
                  <a className="leadership-image-title-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. At varius vel pharetra vel turpis nunc eget lorem.
                    Aenean sed adipiscing diam donec adipiscing tristique risus
                    nec feugiat. Enim sed faucibus turpis in eu. Nulla facilisi
                    morbi tempus iaculis urna id. Id venenatis a condimentum
                    vitae.
                  </a>
                </div>
              </div>
              <div className="leadership-panel">
                <motion.div
                  className="leadership-image-container"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  variants={{
                    hidden: { opacity: 0, x: -200 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <img src={require('./assets/christine.jpg')} />
                </motion.div>
                <div className="leadership-words">
                  <a className="leadership-image-title"> Christine Chang</a>
                  <a className="leadership-image-title-caption">
                    Executive Director of MAC X
                  </a>
                  <a className="leadership-image-title-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. At varius vel pharetra vel turpis nunc eget lorem.
                    Aenean sed adipiscing diam donec adipiscing tristique risus
                    nec feugiat. Enim sed faucibus turpis in eu. Nulla facilisi
                    morbi tempus iaculis urna id. Id venenatis a condimentum
                    vitae.
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="values-wrapper">
            <div className="networking-title-container">
              <a className="networking-title">LEADERSHIP</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
