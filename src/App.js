import React from 'react';
import './App.css';
import Products from './Products';
// import Products2 from './products2';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

// import { useState } from 'react';
// import Counter from './counter';
// import List from './list';
// import UseEffectDemo from './useeffectdemo';

function App() {
  // React.useState();  //can be used instead of import and code below:
  // const state = useState("devsnest");  //devsnest is the initial value
  // const text = state[0]; //value
  // const updateText = state[1];  //method
  // console.log(state);

  // console.log("app component rendered");
  // const handleChange = (event) => {
  //   updateText(event.target.value);
  //   console.log("update value of text");
  // }
  return (
    // <div className="App">
    //  <input type="text" name="content" id="content" onChange={handleChange}/>
    //  {text}
    // </div>
    <div>
      {/* <Counter /> */}
      {/* <List /> */}
      {/* <UseEffectDemo /> */}
      <Products />
      {/* <Products2 /> */}

    </div>

  );


  //   const [count, setCount] = useState(0);

  //   return (
  //     <div>
  //       <p>You clicked {count} times</p>
  //      <button onClick={() => setCount(count + 1)}>
  //       Click me
  //      </button>
  //    </div>
  //  );


}

export default App;
