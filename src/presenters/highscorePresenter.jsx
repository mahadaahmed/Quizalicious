import HighscoreView from "../views/highscoreView.jsx";
import NotLoggedIn from "./notLoggedInPresenter.jsx";
import { useNavigate } from "react-router-dom";

export default function Highscore(props) {
    let navigate = useNavigate();

    const [highScoreList, setHighScoreList] = React.useState(props.model.highScoreList);
    const [hideView, setHideView] = React.useState(false);

    React.useEffect(wasCreatedACB, []);

    function observerACB() { setHighScoreList(props.model.highScoreList); }

    function wasCreatedACB() {
        props.model.addObserver(observerACB);
        function isTakenDownACB() { props.model.removeObserver(observerACB); }
        return isTakenDownACB;
    }

    function backClick() {
        setHideView(true);
        setTimeout(() => {
            navigate("/Home");
        }, 800)
    }

    function sort(highScoreList) {
        return highScoreList.sort((a, b) => {
            if (a.score === b.score) {
                return b.score - a.score;
            }
            else {
                return b.score - a.score;
            }
        }).slice(0, 10);
    }

    if (!props.model.currentUser)
        return <NotLoggedIn />;

    return <HighscoreView backClick={backClick}
        hideView={hideView}
        highScoreList={sort(highScoreList)} />
}