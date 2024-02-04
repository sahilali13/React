import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputValidity = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputIdentifier]: +newValue };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} input={userInput} />
      {!inputValidity && (
        <p className='center'>Please enter a duration greater than 0!!!</p>
      )}
      {inputValidity && <Results input={userInput} />}
    </>
  );
}

export default App;
