import React from 'react';
import * as details from "../../myDetails";

const Header = () => (
    <header className='mainPageHeader'>
        <img src='usama.jpeg' className='profileImage' alt="Usama" />
        <a href='https://www.linkedin.com/in/usama-sajjad-224400182/'>
          <h1 className='title'>
            {details.name}
          </h1>
        </a>
        <h2 className='description'>
          {details.profession}
        </h2>
      </header>
)

export default Header;