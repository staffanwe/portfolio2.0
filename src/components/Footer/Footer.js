import React from 'react';
import './Footer.css';
import { ReactComponent as GithubIcon } from '../../images/github.svg';
import { ReactComponent as LinkedinIcon } from '../../images/linkedin.svg';
import { ReactComponent as InstaIcon } from '../../images/instagram.svg';

const Footer = (props) => {
  return (
    <div className="footer">
      <p>{new Date().getFullYear()} | Staffan Westerlund</p>
      <div className="social-links">
        <a href="https://github.com/staffanwe" target="_blank" rel="noopener noreferrer">
          <GithubIcon className="github-icon" />
        </a>
        <a href="https://www.linkedin.com/in/staffan-westerlund-28b1b71a8/" target="_blank" rel="noopener noreferrer">
          <LinkedinIcon className="github-icon" />
        </a>
        <a href="https://www.instagram.com/staffanwesterlund/" target="_blank" rel="noopener noreferrer">
          <InstaIcon className="github-icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
