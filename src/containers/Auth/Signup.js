import React, { useState } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import RightsComponent from './RightsComponent';

const Signup = () => {

  const [signupInfo, setSignupInfo] = useState({
    firstName: '',
    lastName: '',
    telephoneNumber: '',
    accountNumber: '',
    bankName: '',
    country: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    contribution: false,
    membershipFee: false,
    rules:false
  })

  const handleChange = (e) => {
    console.log(e.target.value)
    setSignupInfo({ ...signupInfo, [e.target.name]: e.target.value })    
  }

  const handleCheck = (e) => {
    console.log(e.target.checked)
    setSignupInfo({ ...signupInfo, [e.target.value]: e.target.checked})
  }

  

  let selectCountries = ['Uganda', 'Kenya', 'Tanzania', 'Germany', 'Burundi'];
  selectCountries.sort();
  return (
    <div className='d-flex justify-content-around align-items-center px-5' style={{ maxHeight: "100vh", minHeight: "100vh" }}>
      <Card style={{ width: '25rem', minHeight: "80vh", maxHeight: "80vh", overflow: "auto" }}>
        <Card.Body>
          <h2 className="text-secondary text-center mb-3">Sign Up</h2>

          <Form >
            <Form.Group className="mb-3">
              <Row>
                <Col>
                  <Form.Control required placeholder="First name" name='firstName' onChange= { handleChange } />
                </Col>
                <Col>
                  <Form.Control required placeholder="Last name" name='lastName' onChange={handleChange} />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control required type="text" placeholder="Telephone Number" name='telephoneNumber' onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control required type="text" placeholder="Account Number" name='accountNumber' onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control required type="text" placeholder="Name of Bank" name='bankName' onChange={handleChange}/>
            </Form.Group>

            <Form.Select className="mb-3 text-secondary" name='country' onChange= { handleChange } >
              <option>Select Country</option>
              {
                selectCountries.map((country, index) => <option key={index}>{country}</option>)
              }
            </Form.Select>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control required type="email" placeholder="Enter email" name='email' onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control required type="password" placeholder="Password" name='password' onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control required type="password" placeholder="Password Confirmation" name='password_confirmation' onChange={handleChange}/>
            </Form.Group>

            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" value="contribution" id="flexCheckDefault" onChange= {handleCheck} />
              <label className="form-check-label text-secondary" htmlFor="flexCheckDefault">
                Do I wholeheartedly agree to contribute to TOGETHER WE CAN within (number of days)
              </label>
            </div>

            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" value="membershipFee" id="membershipFeeCheck" onChange={handleCheck}/>
              <label className="form-check-label text-secondary" htmlFor="membershipFeeCheck">
                Am I informed that the membership fee (the contribution paid) announced by TOGETHER WE CAN is not refundable?
              </label>
            </div>

            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" value="rules" id="rulesCheck" onChange={handleCheck}/>
              <label className="form-check-label text-secondary" htmlFor="rulesCheck">
                Do I comply with the rules set by TOGETHER WE CAN?
              </label>
            </div>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Submit
            </Button>
          </Form>
          <div >
              {JSON.stringify(signupInfo)}
          </div>
        </Card.Body>
      </Card>


      <RightsComponent />
    </div>
  );
};

export default Signup;