import React, { useState } from 'react';


function App() {
  const [rupees, setRupees] = useState("");

  const convertToDollars = (rupeeAmount) => {
    return (rupeeAmount / 87).toFixed(2);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Rupee to Dollar Converter</h2>
      <input
        type="number"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
        placeholder="Enter INR amount"
      />
      {rupees && (
        <p>
          {rupees} INR = {convertToDollars(rupees)} USD
        </p>
      )}
    </div>
  );
 
}

export default App;
