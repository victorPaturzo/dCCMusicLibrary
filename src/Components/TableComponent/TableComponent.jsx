import "./TableComponent.css";

    function MusicTable(props) {
    
        let renderedMusic = props.songs.map(song => {
            return(
                <tr className="Word-spacer">
                    <td className="Word-spacer">{song.title}</td>
                    <td className="Word-spacer">{song.album}</td>
                    <td className="Word-spacer">{song.artist}</td>
                    <td className="Word-spacer">{song.genre}</td>
                    <td className="Word-spacer">{song.releaseDate}</td>
                </tr> 
            )
        })
        return(
            <table className="Word-spacer">
                 <tr>
                    <th className="Word-spacer">Song Title</th>
                    <th className="Word-spacer">Album</th>
                    <th className="Word-spacer">Artist</th>
                    <th className="Word-spacer">Genre</th>
                    <th className="Word-spacer">Release Date</th>
                </tr>
                {renderedMusic}
            </table>
            
            )
    }

    export default MusicTable;