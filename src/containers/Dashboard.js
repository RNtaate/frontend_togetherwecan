import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Container, Form, FormControl } from 'react-bootstrap';

import { setLoggedInStatus, setCurrentUser } from '../redux/actions';
import { PurchaseDetailsComponent, GiftDetailsComponent} from '../components/DetailsComponent';
import { useEffect } from 'react';

const Dashboard = (props) => {

  let { userObj, setUserLoggedInStatus } = props;
  let history = useHistory();

  let [capitalObject, setCapitalObject] = useState({
    shares_number: 0
  })

  let [showSharesForm, setShowSharesForm] = useState(false);
  let [disableSubmitButton, setDisableSubmitButton] = useState(false);
  let [purchaseInfo, setPurchaseInfo] = useState(null)

  let handleFormShow = () => {
    setShowSharesForm(!showSharesForm)
  }

  let handleChange = (e) => {
    setCapitalObject({ ...capitalObject, [e.target.name]: [e.target.value] })
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    setDisableSubmitButton(true);
    let transactionObject = {
      transaction: {
        shares_number: capitalObject.shares_number.toString()
      }
    }

    axios.post('http://localhost:3001/transactions', transactionObject, { withCredentials: true })
      .then((response) => {
        console.log(response);
        setShowSharesForm(false);
      }).catch((error) => {
        console.log("Oops! Something went wrong", error);
      }).finally(() => {
        setDisableSubmitButton(false)        
      })
  }

  

  useEffect(() => {
    axios.get('http://localhost:3001/purchases', {withCredentials: true})
    .then((response) => {
      console.log(response.data)
      setPurchaseInfo(response.data)
    })
    .catch((err)=> {
      console.log(err)
    })

  }, [])

  return (
    <Container fluid>
      <h2 className="text-secondary">Dashboard</h2>
      <h4>Welcome {userObj.user.first_name.toUpperCase()}</h4>

      <Button type="button" bg="dark" variant="dark" onClick={handleFormShow}>Purchase Shares</Button>

      {showSharesForm && <Form className="w-50 mt-4" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Purchase Capitals</Form.Label>
          <Form.Control name="shares_number" type="number" placeholder="Enter number of Shares you wish to purchase" onChange={handleChange} />
        </Form.Group>
        <Button disabled = {disableSubmitButton} type="submit" className="w-100">
          Submit
        </Button>
      </Form>}
      { purchaseInfo && <PurchaseDetailsComponent purchaseInfo = {purchaseInfo}/>}
      { purchaseInfo && <GiftDetailsComponent purchaseInfo = {purchaseInfo}/>}

    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    userObj: state.userReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserLoggedInStatus: (loggedInStatus) => {
      dispatch(setLoggedInStatus(loggedInStatus));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);