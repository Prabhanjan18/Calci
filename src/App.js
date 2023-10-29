import { useState } from 'react';
import './App.css';

function App() {
  const[one,setOne] = useState(0);
  const[two,setTwo] = useState(0);
  const[out,setOut] = useState(0);
  var res = 0;

  function handleClick(event){
    if(one === 0){
        setOne(parseInt(event.target.value))
    }
    else if(two === 0){
      setTwo(parseInt(event.target.value))
    }
    else if(out !== 0){
      setOne(res);
      setTwo(0);
    }
  }

  function addition(){
    // console.log("add")
    res = one + two;
  }
  function subtraction(){
    if(one>two){
      res = one - two;
    }
    else{
      res = two - one;
    }
  }

  function multiply(){
    res = one * two;
  }

  function divide(){
    res = one / two;
  }
  function handleDisplay(){
    setOut(res)
  }

  function handleReset(){
    setOne(0);
    setTwo(0);
    setOut(0);
  }
  console.log("one is" + one)
  console.log("two is" + two)
  console.log("res is" + out)
  return (
    <div className="App">
      <div className="frame">
        <div>
        <div className='res'>{out}</div>
        </div>
        <div>
          <div className="second" style={{"border": "1px solid black"}}>
            <button type="submit" value="1" onClick={handleClick}>1</button></div>
          <div className="second" style={{"border": "1px solid black"}}>
          <button type="submit" value="2" onClick={handleClick}>2</button>
          </div>
          <div className="second" style={{"border": "1px solid black"}}>
          <button type="submit" value="3" onClick={handleClick}>3</button></div> 
          <div className='second'>
              <button onClick={handleDisplay}>=</button>
          </div>
        </div>
        <div>
          <div className="second" style={{"border": "1px solid black"}}>
          <button type="submit" value="4" onClick={handleClick}>4</button>
          </div>
          <div className="second" style={{"border": "1px solid black"}}>
          <button type="submit" value="5" onClick={handleClick}>5</button>
          </div>
          <div className="second" style={{"border": "1px solid black"}}>
          <button type="submit" value="6" onClick={handleClick}>6</button></div> 
          <div className='second'>
              <button onClick={addition}>+</button>
          </div>
        </div>
        <div>
          <div className="second" style={{"border": "1px solid black"}}>
          <button type="submit" value="7" onClick={handleClick}>7</button>
          </div>
          <div className="second" style={{"border": "1px solid black"}}>
          <button type="submit" value="8" onClick={handleClick}>8</button>
          </div>
          <div className="second" style={{"border": "1px solid black"}}>
          <button type="submit" value="9" onClick={handleClick}>9</button></div> 
          <div className='second'>
              <button style={{"border": "1px solid black"}} onClick={subtraction}>-</button>
          </div>
        </div>
        <div>
        <div className='second'>
              <button style={{"border": "1px solid black"}} onClick={multiply}>*</button>
          </div>
          <div className="second" style={{"border": "1px solid black"}}>
          <button type="submit" value="0" onClick={handleClick}>0</button></div>
          <div className='second'>
              <button style={{"border": "1px solid black"}} onClick={divide}>/</button>
          </div>
          <div className="second" style={{"border": "1px solid black"}}>
          <button type="submit"  onClick={handleReset}>C</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
