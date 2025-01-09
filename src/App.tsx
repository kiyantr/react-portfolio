import './App.css';
import avatar from './assets/images/avt.jpeg';
import gmail from './assets/images/gmail.png';
import phone from './assets/images/phone-call.png';
import linkedin from './assets/images/linkedin.png';
import address from './assets/images/home-address.png';
import CardPullEffect from './components/CardScrollEffect';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { Card } from 'flowbite-react';
import { MdEmail, MdMail } from 'react-icons/md';
import { FaBirthdayCake, FaPhoneAlt } from 'react-icons/fa';
import MindmapGraph from './components/Graph';

function App() {
  const dateWork = Date.parse('2018-08-20');
  const [darkMode, setDarkMode] = useState(true);
  const experienceYear = Math.floor(
    (Date.now() - dateWork) / (1000 * 60 * 60 * 24 * 365)
  );
  return (
    <>
      {/* <div className='bg-gray-100 min-h-screen'>
        
        <CardPullEffect />
      </div> */}
      <div className={`${darkMode ? 'dark' : ''}`}>
        <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
        <div className='mx-auto px-4 py-20 dark:bg-gray-800 dark:text-white'>
          <section id='about' className='pt-20'>
            <div className='grid grid-rows-1 grid-cols-1 place-items-center'>
              <div className='row-span-3 text-3xl font-bold grid-rows-1'>
                <div className='flex flex-col items-center pb-10'>
                  <img
                    className='w-36 h-48 mb-3 rounded shadow-lg mt-10'
                    src={avatar}
                    alt='TRAN VU KIET'
                  />
                </div>
              </div>
              <div className='col-span p-8 sm:col-span-2 grid-rows-2'>
                <h1 className='text-3xl font-bold'>
                  Hi there, I'm{' '}
                  <span className='bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent'>
                    KIET
                  </span>{' '}
                  🧑‍💻
                </h1>
                <p className='mt-6 text-xl leading-9'>
                  I'm a full-stack developer with over 6 years experience build
                  web application.
                </p>
                <div className='mt-3 flex gap-2 p-2'>
                  <a href="mailto:tranvukietk15@gmail.com" title="tranvukietk15@gmail.com">
                    <img
                      className='h-12 w-12 hover:translate-y-1'
                      src={gmail}
                      alt='Email'
                      loading='lazy'
                    />
                  </a>
                  <a href="tel:+84949845485" title="0949845485">
                    <img
                      className='h-12 w-12 hover:translate-y-1'
                      src={phone}
                      alt='0949845485'
                      loading='lazy'
                    />
                  </a>
                  <a href="https://www.linkedin.com/in/kiet-tran-555845129/" title="linkedin tranvukiet">
                    <img
                      className='h-12 w-12 hover:translate-y-1'
                      src={linkedin}
                      alt='linkedin'
                      loading='lazy'
                    />
                  </a>
                  <a href='https://maps.app.goo.gl/Eb3RvZG8WRRkdKdX8' title="Ho Chi Minh, VietNam">
                    <img
                      className='h-12 w-12 hover:translate-y-1'
                      src={address}
                      alt='District 1'
                      loading='lazy'
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id='technicals' className='py-20'>
            <h2 className='text-3xl font-bold flex items-center justify-center'>Technicals</h2>
            <MindmapGraph />
          </section>

          <section id='projects' className='py-20'>
            <h2 className='text-3xl font-bold flex items-center justify-center'>
              {/* Recent{' '} */}
              <span className='bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent'>
                Projects
              </span>{' '}
            </h2>
            {/* <p>This is the projects section content.</p> */}
            <CardPullEffect />
          </section>

          {/* <section id='pet-projects' className='py-20'>
            <h2 className='text-3xl font-bold'>Pet Project</h2>
            <p>This is the pet projects section content.</p>
          </section> */}

          <section id='education'>
            <h2 className='text-3xl font-bold flex items-center justify-center'>Education 🏫</h2>
            <h1 className='text-3xl font-bold flex items-center justify-center'>
              <span className='bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent'>
                Mekong University
              </span>{' '}
            </h1>
            <p className='text-xl leading-9 flex items-center justify-center'>GPA: 3.1/4</p>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
