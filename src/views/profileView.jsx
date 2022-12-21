import '../styles/profileView.css';

export default function ProfileView(props) {
    /* 
        ---PROFILE TODO---
        2 Main div, within first div have 2 smaller divs **DONE**
        in the smaller div to the left, show profile picture, name and played seasons **DONE**
        in the smaller div to the right, show last 5 seasons with season info and score **DONE**
        in the second larger div, show achievements
    */
    function renderSeasons(season, index) {
        return <tr key={index}>
            <td>{season.date}</td>
            <td>{season.score}</td>
        </tr>;
    }

    return <div className={"profileView appear " + (props.backClicked && "implode")}>
        <span>
            <span className="profileInfo">
                <img className="profilePic" src={props.displayPhoto || "./loid.jpg"} alt="" />
                <br></br>
                {props.usersUsername}
                <br></br>
                {props.displayTotalSeasons} seasons played
            </span>
            <h2>Last 5 seasons</h2>
            <table className="seasons">
                <thead>
                    <tr>
                        <th>Season</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {props.displaySeasons.map(renderSeasons)}
                </tbody>
            </table>
        </span>
        <button onClick={props.backClick}>Back to home</button>
    </div>
}