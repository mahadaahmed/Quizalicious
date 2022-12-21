import '../styles/headerView.css';
import ProfileMenuView from "../views/profileMenuView.jsx";

export default function HeaderView(props) {
    return <header>
        <div className="headerWidthRestricted">
            {/* <button className="homeButton" onClick={props.homeButtonPress}><img src="Quizalicious logo full dark theme.svg"></img></button> */}
            <div className="homeButton" ><img src="Quizalicious logo full dark theme.svg"></img></div>
            <div className="profile button" onClick={props.profilePicClick}>
                <div className={"triangle " + ((props.profileMenuOpen) && ("rotate90"))}></div>
                <img className="profile" src={props.user.photoURL} alt="" />
            </div>
            {props.children}
        </div>
    </header>;
}