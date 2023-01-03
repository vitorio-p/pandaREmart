import React from 'react'

export default function ViewCart(props) {
  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      
      <div>
        <h4>Time</h4>
        <h3>Your order from pandamart (RedHill)
        </h3>
        <h5>Cart content</h5>
        <h6>Subtotal</h6>
        <h6>Delivery fee</h6>
        <h6>Platform fee</h6>
        <h6>Including GST</h6>
        <h6>Discount</h6>
        <h6><b>Total (incl. GST where applicable)</b></h6>
        <button className="btn pink">
            Go to checkout
          </button>
      </div>
    </React.Fragment>
  )
}