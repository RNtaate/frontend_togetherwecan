import React, { useState } from 'react'
import { Card, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { Link, useHistory} from 'react-router-dom';
import axios from 'axios'
import { connect } from 'react-redux';
import { setCurrentUser, setLoggedInStatus } from '../../redux/actions';


const Login = (props) => {

  let { setUserLoggedInStatus, setUserObj } = props

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  })

  const [disabled, setDisabled] = useState(false)
  const [errors, setErrors] = useState('')

  const hishory = useHistory();

  const handleChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled(true)
    setErrors('')
    const loginUser = { ...loginInfo }
    axios.post('http://localhost:3001/sessions', { user: loginUser }, { withCredentials: true })
      .then((response) => {
        console.log(response)
        setUserLoggedInStatus(response.data.logged_in);
        setUserObj(response.data.user);
        hishory.push('/')
      }).catch((err) => {
        if (err.response && (err.response.status == 403)) {
          console.log(err.response);
          setErrors(err.response.data.error)
        }
        else {
          console.log('Network error or server is down')
          setErrors('Network error or server is down')
        }
        setDisabled(false) 
      })
  }

  return (
    <div>

      <div className='d-flex justify-content-around align-items-center px-5' style={{ maxHeight: "100vh", minHeight: "100vh" }}>
        <Card style={{ width: '25rem', maxHeight: "80vh", overflow: "auto" }}>
          <Card.Body>
            <h2 className="text-secondary text-center mb-3">Log in</h2>

            <Form onSubmit={handleSubmit}>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control required type="email" placeholder="Enter email" name='email' onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control required type="password" placeholder="Password" name='password' onChange={handleChange} />
              </Form.Group>

              <Button disabled={disabled} variant="primary" type="submit" className="w-100 mt-3">
                Submit
              </Button>
            </Form>

            <div className='signup-div mt-3 text-secondary fs-6' >
              Don't have an account? please <Link to='/signup'>Signup </Link>
            </div>

            { errors !== "" ? <Alert variant='danger' className="mt-3">
              { errors }
            </Alert> : null}
          </Card.Body>
        </Card>

      </div>

    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserLoggedInStatus: (loggedInStatus) => {
      dispatch( setLoggedInStatus(loggedInStatus) )
    },
    setUserObj: (currentUser) => {
      dispatch( setCurrentUser(currentUser) )
    }
  }
};

export default connect(null, mapDispatchToProps)(Login);