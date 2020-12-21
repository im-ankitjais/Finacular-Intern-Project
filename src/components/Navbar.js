import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';

import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';

import img from "./img/finacular.PNG";
import img2 from "./img/girl.jpg";
import img3 from "./img/sideimg1.PNG";
import img4 from "./img/sideimg2.PNG";



function Navbar() {
  const [sidebar, setSidebar] = useState(window.innerWidth>992?true:false);

  const showSidebar = () => setSidebar(!sidebar);


  return (
    <div>
        <div className='navbar-top'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} style = {{background: "none"}}/>
          </Link>
          <div className="menu-icons">
            <AiIcons.AiFillSetting className ="menu_icon" />
            <AiIcons.AiFillBell className ="menu_icon" />
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' >
            <li className='navbar-toggle'>
              <img src={img} className='menu-bar-img' alt="" />
              <span className="span1" >Finacular</span>
              <Link to='#' className='menu-bar-active' onClick={showSidebar}>
                <AiIcons.AiOutlineLeft style = {{background: "none"}}/>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className='nav-text'  >
                  <Link to={item.path}  >
                    {item.icon}
                    <span className="span2">{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className='navbar-user'>
                <img src={img2} className='user-img' alt=""  />
                <span className="span1" >Vandana M</span>
                <Link to='#' className='menu-bar-down' >
                    <AiIcons.AiOutlineDown style = {{background: "none"}}/>
                </Link>
          </li>
          </ul>
          
        </nav>
        <nav className='nav-menu-right'>
            <button className="button-nav" >
                <BsIcons.BsLightningFill style = {{background: "none"}}/>
                Actions
            </button>
            <div className="menu-item-right">
              <img src={img3} className='img1' alt="" />
              <p>Understand the power of computing!!</p>
              <button className="button2">Learn Now</button>
            </div>
            <div className="menu-item-right2">
              <img src={img4} className='img1' alt="" />
              <p>Track all your expenses on a daily basis</p>
              <button className="button2">Track Now</button>
            </div>
        </nav>
    </div>
  );
}

export default Navbar;