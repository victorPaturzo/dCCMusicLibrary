import React, {Component} from "react";
import "./App.css"
import TitleBar from "./TitleBar/TitleBar";
import AdvancedFilter from "./AdvancedFilter/AdvancedFilter";


class App extends Component {
    constructor(props) {
    super(props);
    this.state = {};
    }

    render() {
      return (
        <div className="container-fluid">
          <TitleBar />
          <AdvancedFilter />
        </div>
        
      ) 
    }
}

export default App;
