import React, {Component} from "react";
import "./AdvancedFilter.css";

class AdvancedFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            album: "",
            artist: "",
            genre: "",
            releaseDate: "",
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.findASong(this.state);
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="AdvancedFilterPosition">
                    <div className="form-floating mb-3">
                        <label htmlFor="floatingInput">Song Title</label>
                        <input name="title" type="title" className="form-control" id="floatingInput" placeholder="Song Title" onChange={this.handleChange} value={this.state.title}/> 
                    </div>

                    <div className="form-floating mb-3">
                        <label htmlFor="floatingInput">Album</label>
                        <input name="album" type="album" className="form-control" id="floatingInput" placeholder="Album" onChange={this.handleChange} value={this.state.album}/>
                    </div>

                    <div className="form-floating mb-3">
                        <label htmlFor="floatingInput">Artist</label>
                        <input name="artist" type="artist" className="form-control" id="floatingInput" placeholder="Artist" onChange={this.handleChange} value={this.state.artist}/>                    
                    </div>

                    <div className="form-floating mb-3">
                        <label htmlFor="floatingInput">Genre</label>
                        <input name="genre" type="genre" className="form-control" id="floatingInput" placeholder="Genre" onChange={this.handleChange} value={this.state.genre}/>
                    </div>

                    <div className="form-floating mb-3">
                        <label htmlFor="floatingInput">Release Date</label>
                        <input name="releaseDate" type="releaseDate" className="form-control" id="floatingInput" placeholder="Release Date" onChange={this.handleChange} value={this.state.releaseDate}/>                    
                    </div>

                    <div className="SearchButtonPosition">
                        <input className="btn btn-primary" type="submit" value="Search"/>
                    </div>
                </div>
            </form>
        )
    }
}

export default AdvancedFilter;