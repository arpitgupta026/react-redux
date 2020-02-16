// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Creat a react Component
const App = () => {
  const labelText = "Enter Name :";
  const buttonText = { text: "Click Me" };
  {
    /* We can replace this with number or array 
    = 123456 or ['Hi','There'] or [10,20] */
  }
  return (
    <div>
      {/* Class is chnaged to class ClassName */}
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      {/* HTML Styling
      <button style="background-color:blue;color:white;">Submit</button>       
      */}
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
