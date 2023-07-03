// eslint-disable-next-line no-unused-vars
import React from 'react';
import './NavigationMenu.css'; // Import CSS file
import { logout } from '../service/AuthenService';

const NavigationMenu = () => {
  const handleLogout = () => {
       
      logout();
  };

  return (
    <nav className="navigation-menu">
      <ul className="menu-list">
        <div className="right-menu">
        <li className="menu-item">
          <a href="/">หน้าแรก</a>
        </li>
        <li className="menu-item">
          <a href="/สินค้า">สินค้า</a>
        </li>
        <li className="menu-item">
          <a href="/เกี่ยวกับเรา">เกี่ยวกับเรา</a>
        </li>
        <li className="menu-item">
          <a href="/ติดต่อเรา">ติดต่อเรา</a>
        </li>

        </div>

        <div className="left-menu">
        <li className="menu-item">
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </li>


        </div>
        
        
      </ul>
    </nav>
  );
};

export default NavigationMenu;
