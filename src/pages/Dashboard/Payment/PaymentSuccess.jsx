import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({});
  const sessionId = searchParams.get("session_id");
  const axisoSecure = useAxiosSecure();

  console.log(sessionId);

  useEffect(() => {
    if (sessionId) {
      axisoSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId,
          });
        });
    }
  }, [axisoSecure, sessionId]);

  return (
    <div>
      <h2 className="text-4xl text-secondary font-bold">Payment Successful!</h2>
      <h2 className="text-4xl text-secondary font-bold">
        Your Transsction Id: {paymentInfo.transactionId}
      </h2>
      <h2 className="text-4xl text-secondary font-bold">
        Your Parcel Tracking Id : {paymentInfo.trackingId}
      </h2>
    </div>
  );
};

export default PaymentSuccess;
