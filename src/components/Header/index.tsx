"use client";

import React, { useState } from 'react';
import { FaChevronDown, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import './styles.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<Boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const Header_ = ({ className }: { className?: string }) => (
    <div
      id='header-contianer'
      className={`header-container header-padding ${className || ''} ${menuOpen ? 'open' : 'closed'}`}
    >
      <div
        id='dropdown-menu-toggle-button-container'
        className={`header-element-container ${className || ''}`}
      >
        <button
          name='dropdown-menu-toggle-button'
          className={`dropdown-menu-toggle-button h2 ${className || ''} ${menuOpen ? 'open' : 'closed'}`}
          onClick={toggleMenu}
        >
          Menu <FaChevronDown className={`toggle-menu-label-chevron ${className || ''} ${menuOpen ? 'open' : 'closed'}`} />
        </button>
      </div>
      <div
        id='header=link-container'
        className={`header-element-container ${className || ''}`}
      >
        <a
          id='git-hub-link'
          className={`header-link h2 ${className || ''} ${menuOpen ? 'open' : 'closed'}`}
          href={`https://github.com/${process.env.GIT_HUB_USERNAME}`}
        >
          <FiGithub className={`header-link-icon ${className || ''}`} />
        </a>
        <a
          id='linked-in-link'
          className={`header-link h2 ${className || ''} ${menuOpen ? 'open' : 'closed'}`}
          href={`https://www.linkedin.com/in/${process.env.LINKED_IN_ACC_URL}`}
        >
          <FaLinkedinIn className={`header-link-icon ${className || ''}`} />
        </a>
      </div>
    </div>
  )

  const HeaderDropDownButton = ({ label, to }: { label: string, to: string }) => {
    return (
      <button
        className='header-dropdown-button h1'
      >
        {label}
      </button>
    )
  }

  return (
    <div
      className='header-wrapper'
    >
      {/* Header */}
      <Header_ />
      {/* drop down menu */}
      <div
        id='menu-container'
        className={`dropdown-menu-container ${menuOpen ? 'open' : 'closed'}`}
      >
        <Header_ className='alt' />
        <div
          className='header-dropdown-button-container header-padding'
        >
          <div className='header-separator'></div>
          <HeaderDropDownButton label='Home' to='#home-container' />
          <HeaderDropDownButton label='My Projects' to='#projects-container' />
          <HeaderDropDownButton label='My Education' to='#education-container' />
          <HeaderDropDownButton label='About Me' to='#about-container' />
        </div>
      </div>
    </div>
  )
}

export default Header;
