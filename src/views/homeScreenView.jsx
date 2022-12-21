import '../styles/homeScreenView.css';
import Owl from "../presenters/OwlPresenter";

function HomeScreenView(props) {
    console.log(props.hideOwl);
    return <div className={"homeScreen appear " + (props.didClick?"implode":"")}>
        <Owl onX={props.toggl} hide={props.hideOwl}/>
        <br /> 
        <a href=""
            className={"showOwl " + (props.hideOwl?"":"hide")}
            onClick={(e) => {e.preventDefault(); props.toggl();}}>(Please show me Mr. Owl again)</a>
        <img src="Quizalicious logo.svg" className="smallLogo" alt="" />
        <span className="menuTitle">Game menu</span>
        <img src="Quizalicious logo.svg" className="smallLogo" alt="" />
        <div className="buttonWrapper">
            <button className="homeScreen scale-in-center" onClick={props.newSeason}>New Season</button>
            <button className="homeScreen scale-in-center" onClick={props.newQuickGame}>New quick game</button>
            <button className="homeScreen scale-in-center" onClick={props.showHighscores}>Show highscores</button>
        </div>
    </div>;
}

export default HomeScreenView;