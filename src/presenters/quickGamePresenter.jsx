import QuickGameView from '../views/quickGameView.jsx';
import NotLoggedIn from "./notLoggedInPresenter.jsx";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function QuickGame(props) {
    let navigate = useNavigate();

    const [category, setCategory]       = React.useState(0);
    const [difficulty, setDifficulty]   = React.useState(0);

    const [exiting, setExiting]         = React.useState(false);

    function backClick() {
        setExiting(true);
        setTimeout(() => {
            navigate("/Home");
        }, 800);
    }

    function randomGame() {
        setExiting(true);
        setTimeout(() => {
            navigate("/Game");
            props.model.setQuickGame("", "");
        }, 800);
    }

    function categoryChange(val) {
        setCategory(val);
    }

    function difficultyChange(diff) {
        setDifficulty(diff);
    }

    function startGame() {
        setTimeout(() => {
            props.model.setQuickGame(category, difficulty);
            navigate("/Game");
        }, 800);
        setExiting(true);
    }

    if (!props.model.currentUser)
        return <NotLoggedIn />;

    return <QuickGameView   backClick={backClick}
                            exiting={exiting}
                            randomGame={randomGame}
                            categoryChange={categoryChange}
                            difficultyChange={difficultyChange}
                            startGame={startGame} />;
}