import React, {Component} from "react";
import axios from "axios";
import "./App.css"
import TitleBar from "./TitleBar/TitleBar";
import AdvancedFilter from "./AdvancedFilter/AdvancedFilter";
import TableComponent from "./TableComponent/TableComponent";
import Footer from "./FooterComponent/FooterComponent";

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        music: []
      }
    }

    componentDidMount() {
      this.makeGetRequest();
    }
  
    async makeGetRequest() {
      try{
          let response = await axios.get("http://www.devcodecampmusiclibrary.com/api/music");
          console.log(response.data);
          this.setState({
              music: response.data
          })
      }
      catch{
          console.log("Error in API call!")
      }
    }

    findSong = (userInput) => {
      console.log("Hello", userInput)
    }

    render() {
      return (
        <div className="container-fluid">
          <TitleBar />
          <AdvancedFilter />
            <h1 className="TableComponent-logo">Music Library</h1>
            <div className="Table-body">{this.state.music.length > 0 ? 
                <TableComponent songs={this.state.music} />
             : null}
            </div>
          <Footer />
        </div>
        
      ) 
    }
}

export default App;
