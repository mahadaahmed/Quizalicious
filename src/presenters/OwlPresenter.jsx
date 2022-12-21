import { render } from "react-dom";
import OwlView from "../views/OwlView.jsx";

export default function Owl(props) {
    const [page, setPage] = React.useState(0);
    const [text, setText] = React.useState("");

    function nextPage() {
        setPage(page + 1);
    }

    function previousPage() {
        if (page > 0) setPage(page - 1);
    }

    function close() {
        setHeight(0);
    }

    React.useEffect(() => {
        switch (page) {
            case 0: setText(<><b>Welcome!</b><br /><b>*Hoot*</b> Welcome to Quizalicious, the fun trivia game! If you need to know how to play, press the right arrow!</>)
                break;
            case 1: setText(<><b>Seasons</b><br />The game is based on seasons. In order to hit the highscore board you need to play a season and get a really good score!😃</>)
                break;
            case 2: setText(<><b>More about seasons</b><br />Each season consists of 2 easy games, 2 medium games and 1 hard game.</>)
                break;
            case 3: setText(<><b>Games</b><br />Each game contains 5 questions, for a total of 25 questions for a season, I know right, thats a lot of questions 😮</>)
                break;
            case 4: setText(<><b>The highscore board</b><br />But if you try really hard, you will get points, one point for each right answer, and if you have enough, that top place is yours!😎</>)
                break;
            case 5: setText(<><b>Quick games</b><br />Thats, it. Oh wait, you can also play a quick game to sharpen your skills. This score will not be saved 🚫</>)
                break;
            case 6: setText(<><b>Time for action</b><br />Now you're ready for the adventures ahead, I wish you good luck, I'm here if you need help. <b>*Hoo hoo*</b>🦉</>)
                break;
        }
    }, [page])

    return <OwlView nextPage={nextPage}
        previousPage={previousPage}
        page={page}
        text={text}
        onX={props.onX}
        hide={props.hide} />;
}