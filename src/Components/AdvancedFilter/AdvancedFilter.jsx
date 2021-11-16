import React, {Component} from "react";
import "./AdvancedFilter.css";

class AdvancedFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className="AdvancedFilterPosition">
                <div className="form-floating mb-3">
                    <label htmlFor="floatingInput">Song Title</label>
                    <input type="songTitle" className="form-control" id="floatingInput" placeholder="Song Title"/> 
                </div>

                <div className="form-floating mb-3">
                    <label htmlFor="floatingInput">Album</label>
                    <input type="album" className="form-control" id="floatingInput" placeholder="Album"/>
                </div>

                <div className="form-floating mb-3">
                    <label htmlFor="floatingInput">Artist</label>
                    <input type="artist" className="form-control" id="floatingInput" placeholder="Artist"/>                    
                </div>

                <div className="form-floating mb-3">
                    <label htmlFor="floatingInput">Genre</label>
                    <input type="genre" className="form-control" id="floatingInput" placeholder="Genre"/>
                    
                </div>

                <div className="form-floating mb-3">
                    <label htmlFor="floatingInput">Release Date</label>
                    <input type="releaseDate" className="form-control" id="floatingInput" placeholder="Release Date"/>                    
                </div>

                <div className="SearchButtonPosition">
                    <input class="btn btn-primary" type="button" value="Search"/>
                </div>
            </div>
        )
    }
}

export default AdvancedFilter;