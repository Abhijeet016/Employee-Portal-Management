import {Routes,Route,Link} from 'react-router-dom';
import './App.css';
import styles from './mystyle.module.css'; 
import React from 'react';

export default function RouterCheck() {
    function Home() {
        return (
          <>
            <main>
              <h2>Welcome to the homepage!</h2>
              <p>You can do this, I believe in you.</p>
            </main>
            <nav>
              <Link to="/about">About</Link>
            </nav>
            <nav><Link to='/Profile'>My Profile</Link></nav>
            
          </>
        );
      }
      function About() {
        return (
          <>
            <main>
              <h2>Who are we?</h2>
              <p>
                That feels like an existential question, don't you
                think?
              </p>
            </main>
            <nav>
              <Link to="/">Home</Link>
            </nav>
          </>
        );
      }
    function Profile(){
      return(
        <>
            <h2 className={styles.RouterCheck}>HI This is me Lenovo</h2>
            
        </>
      );
    }
  return (
    <>

    <div className='RouterCheck'>
        <h1>Welcome to React Router!</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path='Profile' element={<Profile />}/>
        </Routes>
    </div>
    
        
    </>
  );
}
