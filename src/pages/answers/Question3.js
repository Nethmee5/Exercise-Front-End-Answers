import React, { useState } from "react";

const twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
};
const TwoSumComponent = () => {
  const [numbers, setNumbers] = useState([2, 7, 9, 11, 15]);
  const [target, setTarget] = useState(9);
  const [result, setResult] = useState([]);
  const [showOutput, setShowOutput] = useState(false);

  const handleSubmit = () => {
    if (Array.isArray(numbers) && numbers.every((num) => !isNaN(num))) {
      const indices = twoSum(numbers, target);
      setResult(indices);
      setShowOutput(true);
    } else {
      alert("Please enter a valid list of numbers");
    }
  };

  return (
    <div>
      <h2> Two Sum II - Input Array Is Sortet</h2>
      <div>
        <label>
          Enter Numbers(comma-seperated):
          <input
            type="text"
            value={numbers}
            onChange={(e) => setNumbers(e.target.value.split(",").map(Number))}
            placeholder="2,7,11,15"
          />
        </label>
      </div>
      <div>
        <label>
          Target sum:
          <input
            type="number"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            placeholder="9"
          />
        </label>
      </div>

      <button onClick={handleSubmit}>Find Indices</button>
      {showOutput && (
        <div>
          <h4>Output:</h4>
          <p>
            <strong>Input:</strong>
            numbers = [{numbers.join("")}], target = {target}
          </p>
          <p>
            <strong>Explanation:</strong>
            The sum of {numbers[result[0] - 1]} and {numbers[result[1] - 1]} is{" "}
            {target}. Therefore, index1 = {result[0]}, index2 = {result[1]}. We
            return [{result.join(",")}].{" "}
          </p>
        </div>
      )}
    </div>
  );
};
export default TwoSumComponent;
