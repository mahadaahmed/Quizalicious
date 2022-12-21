import '../styles/highscoreView.css';

export default function HighscoreView(props) {
    function Player(value, index) {
        return <tr key={index}>
            <td style={{ margin: '10px' }}>{value.username}</td>
            <td style={{ margin: '10px' }}>{value.score}</td>
            <td style={{ margin: '10px' }}>{value.date}</td>
        </tr>;
    }

    return <div className={"highscoreView appear " + (props.hideView && "implode")}>
        <h2>Highscores</h2>
        <table>
            <thead>
                <tr>
                    <th>User</th>
                    <th>Points</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {props.highScoreList.map(Player)}
            </tbody>
        </table>
        <button onClick={props.backClick}>Back</button>
    </div>
}