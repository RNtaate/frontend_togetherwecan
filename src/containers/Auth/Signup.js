import React from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import RightsComponent from './RightsComponent';

const Signup = () => {

  let selectCountries = ['Uganda', 'Kenya', 'Tanzania', 'Germany', 'Burundi'];
  selectCountries.sort();
  return (
    <div className='d-flex justify-content-around align-items-center px-5' style={{ maxHeight: "100vh", minHeight: "100vh" }}>
      <Card style={{ width: '25rem', minHeight: "80vh", maxHeight: "80vh", overflow: "auto" }}>
        <Card.Body>
          <h2 className="text-secondary text-center mb-3">Sign Up</h2>

          <Form>
            <Form.Group className="mb-3">
              <Row>
                <Col>
                  <Form.Control required placeholder="First name" />
                </Col>
                <Col>
                  <Form.Control required placeholder="Last name" />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control required type="text" placeholder="Telephone Number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control required type="text" placeholder="Account Number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control required type="text" placeholder="Name of Bank" />
            </Form.Group>

            <Form.Select className="mb-3 text-secondary">
              <option>Select Country</option>
              {
                selectCountries.map((country, index) => <option key={index}>{country}</option>)
              }
            </Form.Select>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control required type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control required type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control required type="password" placeholder="Password Confirmation" />
            </Form.Group>

            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label text-secondary" for="flexCheckDefault">
                Do I wholeheartedly agree to contribute to TOGETHER WE CAN within (number of days)
              </label>
            </div>

            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label text-secondary" for="flexCheckDefault">
                Am I informed that the membership fee (the contribution paid) announced by TOGETHER WE CAN is not refundable?
              </label>
            </div>

            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label text-secondary" for="flexCheckDefault">
                Do I comply with the rules set by TOGETHER WE CAN?
              </label>
            </div>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>



      <RightsComponent />
    </div>
  );
};

export default Signup;