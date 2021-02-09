import React from "react";
import './App.css';

// let myDate = new Date()
// let myHour = myDate.getHours().toString();
// let myMinute = myDate.getMinutes().toString();
// let mySecond = myDate.getSeconds().toString();

// let myTime = (mySecond.length === 1) ? (myHour + ":" + myMinute + ":0" + mySecond) : (myHour + ":" + myMinute + ":" + mySecond);

// let handleClick = () => {
//     myDate = new Date()
// }

class App extends React.Component {

    state = {
        myDate: new Date(),
        myHour: this.myDate.getHours().toString(),
        myMinute: this.myDate.getMinutes().toString(),
        mySecond: this.myDate.getSeconds().toString()
    }

    render() {
        return (
            <div className="App">
                {this.state.myDate}
                <div className="RefreshButton">Refresh</div>
            </div>
        );
    }
}

export default App;
