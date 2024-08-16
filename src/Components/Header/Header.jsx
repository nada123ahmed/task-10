//  import React from 'react';
import './Header.css';
import React, { useState, useEffect } from 'react';
 function Header() {
  const [darkMode, setDarkMode] = useState(false);

  // التحقق مما إذا كان المستخدم يفضل الوضع الداكن افتراضيًا
  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
    document.body.className = prefersDarkMode ? 'is-dark-mode' : 'is-light-mode';
  }, []);

  // دالة التبديل بين الوضعين
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? 'is-light-mode' : 'is-dark-mode';
  };

   return (
     <header className="header">
       <div className="wrapper">
         <div className="header-grid">
           <div>
             <h1>Social Media Dashboard</h1>
             <p className="header-total">Total Followers: 23, 004</p>
           </div>
             <div className="dark-mode">
             <p className="dark-mode-title">Dark Mode</p>
              <input type="checkbox" className="checkbox" id="checkbox"checked={darkMode}
              onChange={toggleDarkMode}  />
             <label className="switch" htmlFor="checkbox"  
         ></label> 
           </div>   
 
         <div>

         </div>
          </div> 
       </div>
     </header>
   );
 }



export default Header;
