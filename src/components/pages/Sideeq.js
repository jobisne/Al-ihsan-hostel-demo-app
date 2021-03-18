import React from 'react';
import '../../App.css';
import './Sideeq.css';


import { Link } from 'react-router-dom';

export default function Sideeq() {
  return (
      <div className=''>
        <section id="gift-cards" className="card">
            <div className="container">
                <div className='gift-cards'>
                    <div className='box_1'>
                    
                    </div>
                    <div className='box_space'>
                        <h2>Hostel Information</h2>
                        <div>
                            <label>Hostel Name</label> : Darul Sideeq Hostel
                        </div>
                        <div>
                            <label>Year Establish</label> : 2020
                        </div>
                        <div>
                            <label>Hostel Master</label> : Master Nurudeen
                        </div>
                        <div>
                            <label>Hoster Mistress</label> : Mistress Basiroh
                        </div>
                        <div>
                            <label>Total Number of student</label> : 77
                        </div>
                        <div>
                            <label>Day Boarders</label> : 12
                        </div>
                        <div>
                            <label>Aetam</label> : 65
                        </div>
                        
                    </div>
                    <div className=''>
                        <Link to='/registration' className='navbar-logo' >
                            <div className='btn'>Add New Student</div>
                        </Link>        
                        <Link to='/search' className='navbar-logo btn-space' >
                            <div className='btn'>Search Students</div>
                        </Link>   
                    </div>
                    
                </div>
                
            </div>
        </section>
        <section className="container">
           
        </section>
      </div>
  )
}
