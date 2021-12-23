import axios from 'axios';
import React, { useState } from 'react';
import { Card, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import RightsComponent from './RightsComponent';

const Signup = () => {

  const [signupInfo, setSignupInfo] = useState({
    first_name: '',
    last_name: '',
    telephone_number: '',
    account_number: '',
    bank_name: '',
    country: '',
    email: '',
    password: '',
    password_confirmation: '',
    contribution: false,
    membership_fee: false,
    rules: false
  })

  const [errors, setErrors] = useState([])

  const [disabled, setDisabled] = useState(false)

  const history = useHistory();

  const handleChange = (e) => {
    console.log(e.target.value)
    setSignupInfo({ ...signupInfo, [e.target.name]: e.target.value })
  }

  const handleCheck = (e) => {
    console.log(e.target.checked)
    setSignupInfo({ ...signupInfo, [e.target.value]: e.target.checked })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    setDisabled(true);
    const user = { ...signupInfo }
    axios.post('http://localhost:3001/registrations', { user }, { withCredentials: true })
      .then((response) => {
        console.log(response)
        setErrors([])
        history.push('/');
      }).catch((err) => {
        if(err.response.status == 422){
          console.log('Something went wrong', err.response.data.errors)
          let errorsHolder = Object.entries(err.response.data.errors);

          let newArray = []
          errorsHolder.map((singleError) => newArray.push(`${singleError[0]} ${singleError[1][0]}`))

          setErrors(newArray);
        }
        else
        {
          console.log('Your network might be down, please try again later');
          setErrors(['Your network might be down, please try again later'])
        }
      }).finally(() => {
        setDisabled(false);
      })
  }



  let selectCountries = ['Uganda', 'Kenya', 'Tanzania', 'Germany', 'Burundi'];
  selectCountries.sort();
  return (
    <div className='d-flex justify-content-around align-items-center px-5' style={{ maxHeight: "100vh", minHeight: "100vh" }}>
      <Card style={{ width: '25rem', minHeight: "80vh", maxHeight: "80vh", overflow: "auto" }}>
        <Card.Body>
          <h2 className="text-secondary text-center mb-3">Sign Up</h2>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Row>
                <Col>
                  <Form.Control required placeholder="First name" name='first_name' onChange={handleChange} />
                </Col>
                <Col>
                  <Form.Control required placeholder="Last name" name='last_name' onChange={handleChange} />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label> example: +1234567890</Form.Label>
              <Form.Control required type="tel" pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$" placeholder="Telephone Number" name='telephone_number' onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control required type="text" placeholder="Account Number" name='account_number' onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control required type="text" placeholder="Name of Bank" name='bank_name' onChange={handleChange} />
            </Form.Group>

            <Form.Select className="mb-3 text-secondary" name='country' onChange={handleChange} >
              <option>Select Country</option>
              {
                selectCountries.map((country, index) => <option key={index}>{country}</option>)
              }
            </Form.Select>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control required type="email" placeholder="Enter email" name='email' onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control required type="password" placeholder="Password" name='password' onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control required type="password" placeholder="Password Confirmation" name='password_confirmation' onChange={handleChange} />
            </Form.Group>

            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" value="contribution" id="flexCheckDefault" onChange={handleCheck} />
              <label className="form-check-label text-secondary" htmlFor="flexCheckDefault">
                Do I wholeheartedly agree to contribute to TOGETHER WE CAN within (number of days)
              </label>
            </div>

            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" value="membership_fee" id="membershipFeeCheck" onChange={handleCheck} />
              <label className="form-check-label text-secondary" htmlFor="membershipFeeCheck">
                Am I informed that the membership fee (the contribution paid) announced by TOGETHER WE CAN is not refundable?
              </label>
            </div>

            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" value="rules" id="rulesCheck" onChange={handleCheck} />
              <label className="form-check-label text-secondary" htmlFor="rulesCheck">
                Do I comply with the rules set by TOGETHER WE CAN?
              </label>
            </div>

            <Button disabled={disabled} variant="primary" type="submit" className="w-100 mt-3">
              Submit
            </Button>
          </Form>

          {errors.length > 0 ? <Alert variant='danger' className="mt-3">
            { errors.map((error, index) => <p key={index}>{error}</p>)}
          </Alert> : <p>Hold on!</p>}
        </Card.Body>
      </Card>


      <RightsComponent />
    </div>
  );
};

export default Signup;