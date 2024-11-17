// PaymentPage.tsx
import React from "react";
import SectionHeader from "../SectionHeader";
const PaymentPage: React.FC = () => {
  return (
    
    <div className="p-6 md:p-8 rounded-lg">
      <SectionHeader
        id="payment"
        sectionTitle={"Payment Details"}
        sectionDescription={
          ""
        }
        sectionButtonText={""}
        sectionButtonHref={""}
      />
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Payment Page</h2>
      <p className="mb-4">Please follow the instructions below to complete your payment.</p>
      {/* Add form or payment instructions here */}
      <div className="bg-white p-4 rounded-lg shadow mt-4">
        <h3 className="text-lg font-semibold mb-2">Bank Transfer Details</h3>
        <p>Account Name: Research Conclave</p>
        <p>Account Number: 1234567890</p>
        <p>IFSC Code: ABCD0123456</p>
        <p>Bank: XYZ Bank</p>
      </div>
    </div>
  );
};

export default PaymentPage;
