// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Creat a react Component
const App = () => {
  return (
    <div>
      {/* Class is chnaged to class ClassName */}
      <label className="label" for="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      {/* HTML Styling
      <button style="background-color:blue;color:white;">Submit</button>       
      */}
      <button style={{ backgroundColor: "blue", color: "white" }}>
        Submit
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
