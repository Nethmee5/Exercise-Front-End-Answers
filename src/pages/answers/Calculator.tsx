import React, { useState } from "react";
import "./calculator.css";

const AddTwoNumbers: React.FC = () => {
  const [firstNumber, setFirstNumber] = useState<number | string>(0);
  const [secondNumber, setSecondNumber] = useState<number | string>(0);
  const [total, setTotal] = useState<number | null>(null);

  const handleAddition = () => {
    setTotal(Number(firstNumber) + Number(secondNumber));
  };
  return (
    <div className="container">
      <h1>Adding Two Numbers</h1>
      <div>
        <input
          type="number"
          className="firstnumber"
          placeholder="First Number"
          value={firstNumber}
          onChange={(e) => setFirstNumber(e.target.value)}
        />
        <br />
        <input
          type="number"
          className="secondnumber"
          placeholder="Second Number"
          value={secondNumber}
          onChange={(e) => setSecondNumber(e.target.value)}
        />
      </div>
      <button onClick={handleAddition} className="btn-add">
        Add Two Numbers
      </button>
      <h2>Total:{total !== null ? total : ""}</h2>
    </div>
  );
};
export default AddTwoNumbers;
