import React from "react";
import './App.css';

let myDate = new Date()
let myHour = myDate.getHours().toString();
let myMinute = myDate.getMinutes().toString();
let mySecond = myDate.getSeconds().toString();

let myTime = (mySecond.length === 1) ? (myHour + ":" + myMinute + ":0" + mySecond) : (myHour + ":" + myMinute + ":" + mySecond);

let handleClick = () => {
    myDate = new Date()
}

function App() {
    return (
        <div className="App">
          {myTime}
          <div className="RefreshButton" onClick={handleClick}>Refresh</div>
        </div>
    );
}

export default App;
