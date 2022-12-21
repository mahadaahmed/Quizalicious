import '../styles/profileMenuView.css';
import { useReducer } from 'react';

export default function ProfileMenuView(props) {
    return <div className={"profileMenu " + (props.hidingMenu && "hide")} onClick={props.stopProp}>
        <div className="name item">Signed in as {props.user.displayName}</div>
        <div className="divider"></div>
        <div className="profile item" onClick={props.yourProfile}>Your profile</div>
        <div className="settings item" onClick={props.yourSettings}>Your settings</div>
        <div className="logOut item" onClick={props.logOut}>Log out</div>
    </div>;
}
