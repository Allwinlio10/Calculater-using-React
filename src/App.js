import logo from "./logo.svg";
import "./App.css";
import Wrapper from "./Components.js/Wrapper";
import Screen from "./Components.js/Screen";
import ButtonBox from "./Components.js/ButtonBox";
import Button from "./Components.js/Button";
import CalcProvider from "./context/CalcContext";

const btnvalues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];
function App() {
  return (
      <CalcProvider>
        <Wrapper>
        <Screen />
        <ButtonBox>
          {btnvalues.flat().map((btn, i) => (
            <Button
             value={btn} 
             key={i} 
             />
          ))}
        </ButtonBox>
        </Wrapper>
      </CalcProvider>
    
  );
}

export default App;
