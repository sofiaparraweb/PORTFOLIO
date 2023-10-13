import React from 'react';
import './Footer.css';
import { social } from '../../data';
import cvEN from '../../assets/cv/cvEN.pdf';
import cvES from '../../assets/cv/cvES.pdf';

const Footer = () => {
  return (
    <div className='FOOTER'>
      <footer className='bg-tertiary py-12'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
            <div className='flex space-x-6 items-center justify-center'>
              {social.map((item, index) => {
                const { href, icon } = item;
                return (
                  <a className='text-accent text-base' href={href} target='_blank' rel='noopener noreferrer' key={index}>
                    {icon}
                  </a>
                );
              })}
            </div>
            <div className='dowloads'>
              <a href={cvEN} download className='download-link'>
                CV ENGLISH
              </a>
              <a href={cvES} download className='download-link'>
                CV ESPAÑOL
              </a>
            </div>
            <div>
              <p>Sofia Parra</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;