import React from 'react';
import logo from '../img/logo.png';

function HeaderPage() {
    return <div>
        <div className='header_superior'>
          <div className='logo'style={{
                                backgroundColor: '#0d6efd'
                            }}>
            <img src={logo} alt="Logo"></img>
           </div>
        </div>
      
    </div>
  }
  
  export default HeaderPage;