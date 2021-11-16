import React, {Component} from "react";
import "./AdvancedFilter.css";

class AdvancedFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div class="form-floating mb-3">
                <input type="songtitle" class="form-control" id="floatingInput" placeholder="Song Title"/>
                <label for="floatingInput">Song Title</label>
            </div>
        )
    }
}

export default AdvancedFilter;