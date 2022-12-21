import '../styles/gameView.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export default function GameView(props) {
    function presentQuestion(question) {

        let duration = 10;
        if (question.difficulty === "easy")
            duration = 14;
        else if (question.difficulty === "medium")
            duration = 18;
        else if (question.difficulty === "hard")
            duration = 20;

        if (!question.options)
            return <span>Wait!</span>;
            
        return <div className="question" key={question.question}>
            <div className="countDownTimer">
                <CountdownCircleTimer size={100}
                    isPlaying={!props.revealCorrect}
                    duration={duration}
                    colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                    colorsTime={[10, 6, 3, 0]}
                    onComplete={() => props.timeout()}
                    >
                    {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
            </div>
            <br />
            <span>Difficulty:</span>
            <span className={"difficulty " + question.difficulty}>{question.difficulty}</span>
            <div>
                {props.gameScores.map((score, index) => {
                    if (score===undefined)
                        return <span className="number circle" key={index}></span>;
                    if (score > 0)
                        return <span className="number green" key={index}></span>;
                    return <span className="number red" key={index}></span>;
                })}
            </div>
            <div className="wrapper">
                <div className="category">{question.category}</div>
                <div className="text" dangerouslySetInnerHTML={{ __html: question.question }}></div>
                <div className="buttonWrapper">
                    {question.options.map((text) => {
                        if (!props.revealCorrect)
                            return <button
                                onClick={() => props.optionClick(text)}
                                key={text}
                                className="option"
                                dangerouslySetInnerHTML={{ __html: text }}>
                            </button>
                        else
                        return <button
                            key={text}
                            className={"option "+(text===props.correctAnswer?"correct":"incorrect")}
                            dangerouslySetInnerHTML={{ __html: text }}>
                        </button>
                    })}
                </div>
            </div>
        </div>;
    }

    function gameDone() {
        return <div className="zoom">
            <img src="Quizalicious logo.svg" className="image blob" />
            <h1>Game done!</h1>
            {props.gameScores.map((score, index) => {
                if (score)
                    return <span className="number green"></span>;
                return <span className="number red"></span>;
            })}
            <div className="result">You got {props.rightAnswers} points.</div>
            <button onClick={props.backClick}>Back</button>
        </div>
    }

    return <div className={"gameView appear " + (props.exiting && "implode")}>
        {props.showWrong && (<img src="./wrong.gif" className="wrong show" />)}
        <div className={"right " + (props.showRight && "show")}>+1 points!</div>
        <div className={"timeout " + (props.showTimeout && "show")}>You're too slow!</div>
        {props.gameDone ? gameDone() : presentQuestion(props.questions[props.currentQuestion])}
    </div>;
}