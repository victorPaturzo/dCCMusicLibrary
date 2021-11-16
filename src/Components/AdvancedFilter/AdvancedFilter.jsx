import React, {Component} from "react";
import "./AdvancedFilter.css";

class AdvancedFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className="AdvancedFilterInput">
                <div className="form-floating mb-3">
                    <input type="songTitle" className="form-control" id="floatingInput" placeholder="Song Title"/>
                    <label htmlFor="floatingInput">Song Title</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="album" className="form-control" id="floatingInput" placeholder="Album"/>
                    <label htmlFor="floatingInput">Album</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="artist" className="form-control" id="floatingInput" placeholder="Artist"/>
                    <label htmlFor="floatingInput">Artist</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="genre" className="form-control" id="floatingInput" placeholder="Genre"/>
                    <label htmlFor="floatingInput">Genre</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="releaseDate" className="form-control" id="floatingInput" placeholder="Release Date"/>
                    <label htmlFor="floatingInput">Release Date</label>
                </div>
            </div>
        )
    }
}

export default AdvancedFilter;