import React from "react";
import './App.css';

class App extends React.Component {

    state = {
        myDate: new Date(),
        background: "pinkBackground",
    }

    myAudio = new Audio("soundy.mp3");

    componentDidMount() {
        this.intervalHandle = setInterval(
            () => this.tick(),1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.intervalHandle)
    }

    tick = () => {
        this.setState({myDate: new Date()})
        if (this.state.myDate.getSeconds()>=43) {
            this.myAudio.play()
        }
    }

    render() {
        return (
            <div className={"App " + this.state.background}>
                {this.state.myDate.toString()}
            </div>
        );
    }
}

export default App;
