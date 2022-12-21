import SeasonView from "../views/seasonView.jsx";
import NotLoggedIn from "./notLoggedInPresenter.jsx";
import { useNavigate } from "react-router-dom";

export default function SeasonPresenter(props) {
    let navigate = useNavigate();

    const [,update]                                                         = React.useState({});
    const [,setCurrentGame]                                                 = React.useState(0);
    const [gameClicked, setGameClicked ]                                    = React.useState(false);

    const [backClickPleaseConfirm, setBackClickPleaseConfirm]               = React.useState(false); //Used for going back warning
    const [closingBackClickPleaseConfirm, setClosingBackClickPleaseConfirm] = React.useState(false); //Used for going back warning
    
    const [resetPleaseConfirm, setResetPleaseConfirm]                       = React.useState(false); //Used for reset warning
    const [closingResetPleaseConfirm, setClosingResetPleaseConfirm]         = React.useState(false); //Used for reset warning

    let gameList = [
        { name: "Easy game 1",      difficulty: "easy" },
        { name: "Easy game 2",      difficulty: "easy" },
        { name: "Medium game 3",    difficulty: "medium" },
        { name: "Medium game 4",    difficulty: "medium" },
        { name: "Hard game 5",      difficulty: "hard" },
    ]

    function backClickConfirm() {
        setBackClickPleaseConfirm(true);
    }

    function cancelBack() {
        setClosingBackClickPleaseConfirm(true);
        setTimeout(() => {
            setClosingBackClickPleaseConfirm(false);
            setBackClickPleaseConfirm(false);
        }, 300);
    }

    function backClick() {
        setTimeout(() => {
            navigate("/Home");
        }, 800)
        setGameClicked(true);
    }
    
    function resetConfirm() {
        setResetPleaseConfirm(true);
    }

    function cancelReset() {
        setClosingResetPleaseConfirm(true);
        setTimeout(() => {
            setClosingResetPleaseConfirm(false);
            setResetPleaseConfirm(false);
        }, 300);
    }
    
    function resetSeason() {
        setGameClicked(true);
        setTimeout(() => {
            setCurrentGame(0);
            props.model.resetSeason();
            setGameClicked(false);
            setResetPleaseConfirm(false);

        }, 800)
    }

    function gameClick(number) {
        setTimeout(() => {
            props.model.setCurrentGame(number);
            navigate("/Game");
        }, 800)
        setGameClicked(true);
    }

    function updateFromModel(payload) {
        if (payload&&payload["currentGame"] !== undefined) {
            setCurrentGame(payload["currentGame"]);
            update({});
        }
    }

    React.useEffect(()=>{
        props.model.addObserver(updateFromModel);
        return () => {props.model.removeObserver(updateFromModel);}
    }, []);

    if (!props.model.currentUser)
        return <NotLoggedIn />;

    return <SeasonView  currentGame={props.model.currentGame}
                        seasonCorrectAnswers={props.model.getSeasonScore()}
                        gameList={gameList}
                        gameClicked={gameClicked}
                        
                        /*For popup 1*/
                        backClickConfirm={backClickConfirm}
                        backClickPleaseConfirm={backClickPleaseConfirm}
                        closingBackClickPleaseConfirm={closingBackClickPleaseConfirm}
                        cancelBack={cancelBack}
                        backClick={backClick}

                        /*For popup 2*/
                        resetConfirm={resetConfirm}
                        resetPleaseConfirm={resetPleaseConfirm}
                        closingResetPleaseConfirm={closingResetPleaseConfirm}
                        cancelReset={cancelReset}
                        resetSeason={resetSeason}
                        
                        gameClick={gameClick}
                        />;
}