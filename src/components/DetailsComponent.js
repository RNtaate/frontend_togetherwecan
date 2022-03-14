import React from 'react';
import { Card } from 'react-bootstrap';

const PurchaseDetailsComponent = ({ purchaseInfo }) => {
  
  return (
    <>
      <Card className='p-3 mt-3' style={{ width: '25rem' }}>
        <Card.Body>
          <Card.Title>Purchased  {purchaseInfo.purchases.length} shares </Card.Title>
          <Card.Text>
            Each share was sold at {purchaseInfo.original_capital_amount} Euros, bringing your shares total to   {purchaseInfo.shares_total_amount} euros
          </Card.Text>
        </Card.Body>
      </Card>

    </>
  );
};


const GiftDetailsComponent = ({ purchaseInfo }) => {

  let total_gift_amount = 0
  purchaseInfo.purchases.map((purchase) => {
    total_gift_amount += parseFloat(purchase.purchase_gift_amount)
    return
  })

  return (
    <>
      <Card className='p-3 mt-3' style={{ width: '25rem' }}>
        <Card.Body>
          <Card.Title> Total gifts earned are equal to {total_gift_amount} euros </Card.Title>
          <Card.Text>
            Each purchase accumulates capitals over time which capitals earn a gift after a certain period of time, and at the moment, your gifts have amounted to the above total in euros

          </Card.Text>

        </Card.Body>
      </Card>

    </>
  );
};

export { PurchaseDetailsComponent, GiftDetailsComponent };