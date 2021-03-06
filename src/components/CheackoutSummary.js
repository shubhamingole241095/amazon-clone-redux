import React, { useState, useEffect } from "react";

const CheckoutSummary = (props) => {
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  useEffect(() => {
		const { basket } = props;
    const calcSubtotal = (basket) => {
      let sum = 0;
      basket.forEach((item) => {
        sum += item.price * (item.count || 1);
			});
      return sum.toFixed(2);
    };
    setSubtotal(calcSubtotal(basket));
    const shippingCost = subtotal > 100 ? 20 : 50;
    setShipping(shippingCost);
  }, [props, subtotal]);
  return (
    <div className="py-4 px-5">
      <h3 className="font-weight-bold mb-4">Checkout summary</h3>
      <hr />
      <div className="d-flex justify-content-between border-bottom my-3">
        <h4>Subtotal</h4>
        <h4>{subtotal} $</h4>
      </div>
      <div className="d-flex justify-content-between border-bottom my-3">
        <h4>Shipping</h4>
        <h4>{shipping} $</h4>
      </div>

      <div className="d-flex justify-content-between my-3">
        <h4 className="font-weight-bold">Payable total</h4>
        <h4 className="font-weight-bold">
          {(parseFloat(subtotal) + parseFloat(shipping)).toFixed(2)} $
        </h4>
      </div>
    </div>
  );
};

export default CheckoutSummary;