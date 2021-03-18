import React from 'react';
import './Registration.css';


function Registration() {
    return(
        <div className="container">
            <h3>Child Information</h3>
            
            <div className="row">
                <div className="col-25">
                    <label for="fname">First Name</label>
                </div>
                <div className="col-75">
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label for="lname">Last Name</label>
                </div>
                <div className="col-75">
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label for="lname">Class</label>
                </div>
                <div className="col-75">
                    <input type="text" id="lname" name="class" placeholder="Your Class .." />
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label for="lname">Age</label>
                </div>
                <div className="col-75">
                    <input type="text" id="lname" name="lastname" placeholder="Your Age .." />
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label for="lname">Gender</label>
                </div>
                <div className="col-75">
                    <input type="text" id="lname" name="lastname" placeholder="Your Gender.." />
                </div>
            </div>
            <h3>Gurdian Information (Mother)</h3>
            
            <div className="row">
                <div className="col-25">
                    <label for="fname">First Name</label>
                </div>
                <div className="col-75">
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label for="lname">Last Name</label>
                </div>
                <div className="col-75">
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label for="lname">Occupation</label>
                </div>
                <div className="col-75">
                    <input type="text" id="lname" name="lastname" placeholder="Your Occupation.." />
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label for="lname">Phone Number</label>
                </div>
                <div className="col-75">
                    <input type="text" id="lname" name="lastname" placeholder="Your Phone Number.." />
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label for="subject">Address</label>
                </div>
                <div className="col-75">
                    <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>
                </div>
            </div>
            <h3>Guardian Information (Father)</h3>
            
            <div className="row">
                <div className="col-25">
                    <label for="fname">First Name</label>
                </div>
                <div className="col-75">
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label for="lname">Last Name</label>
                </div>
                <div className="col-75">
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label for="lname">Occupation</label>
                </div>
                <div className="col-75">
                    <input type="text" id="lname" name="lastname" placeholder="Your Occupation.." />
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label for="lname">Phone Number</label>
                </div>
                <div className="col-75">
                    <input type="text" id="lname" name="lastname" placeholder="Your Phone Number.." />
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label for="subject">Address</label>
                </div>
                <div className="col-75">
                    <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>
                </div>
            </div>
            <h3>Intermediary</h3>
            <div className="row">
                <div className="col-25">
                    <label for="fname">First Name</label>
                </div>
                <div className="col-75">
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label for="lname">Phone Number</label>
                </div>
                <div className="col-75">
                    <input type="text" id="lname" name="lastname" placeholder="Your Phone Number.." />
                </div>
            </div>
 
        </div>
    )
}

export default Registration;