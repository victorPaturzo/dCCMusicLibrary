import { Component } from "react/cjs/react.production.min";

class TitleBar extends Component {
    constructor(props) {
    super(props);
    this.state = {};
    }

    render() {
        return(
            <header className="App">
          <div className="App-header">
            <h1>devCodeCamp Music Library</h1>
            <p>Here you can filter through the "vast array" of songs provided to <br></br> you courtesy of devCodeCamp.  Use the filter function below to <br></br>find your song!</p>
          </div>
        </header>
        )
    }
}

export default TitleBar;