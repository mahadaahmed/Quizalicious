import HomeScreenView from "../views/homeScreenView.jsx";
import NotLoggedIn from "./notLoggedInPresenter.jsx";
import { useNavigate } from "react-router-dom";

export default function HomeScreen(props) {
    let navigate = useNavigate();
    const [didClick, setDidClick]   = React.useState(false);
    const [hideOwl, setHideOwl]     = React.useState(props.model.hideOwl);
    
    function newQuickGame() {
        setDidClick(true);
        setTimeout(() => {
            props.model.quickGameMode = true;
            navigate("/QuickGame");
        }, 800)
    }

    function newSeason() {
        setDidClick(true);
        setTimeout(() => {
            navigate("/Season");
            props.model.resetSeason();
            props.model.quickGameMode = false;
        }, 800)
    }

    function showHighscores() {
        setDidClick(true);
        setTimeout(() => {
            navigate("/Highscore");
        }, 800)
    }

    React.useEffect(() => {
        props.model.hideOwl = hideOwl;
        console.log(props.model.hideOwl);
        console.log(hideOwl);
    },[hideOwl]);

    if (!props.model.currentUser)
        return <NotLoggedIn />;

    return <HomeScreenView didClick={didClick}
        newSeason={newSeason}
        newQuickGame={newQuickGame}
        showHighscores={showHighscores}
        hideOwl={hideOwl}
        toggl={() => setHideOwl(!hideOwl)} />
}