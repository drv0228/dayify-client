import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import SummaryCardItems from "../../components/SummaryCardItems/SumaryCardItems";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import PropTypes from "prop-types";

function Payment({ cartItems }) {
  Payment.propTypes = {
    cartItems: PropTypes.array.isRequired,
  };
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch(process.env.REACT_APP_SERVER_URL + "/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch(process.env.REACT_APP_SERVER_URL + "/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (result) => {
      var { clientSecret } = await result.json();
      console.log(clientSecret);
      setClientSecret(clientSecret);
    });
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <SummaryCardItems cartItems={cartItems} />
      </div>
      {clientSecret && stripePromise && (
        <div style={{ marginRight: "20px" }}>
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm />
          </Elements>
        </div>
      )}
    </div>
  );
}

export default Payment;
