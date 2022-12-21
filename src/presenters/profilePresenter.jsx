import ProfileView from "../views/profileView.jsx";
import NotLoggedIn from "./notLoggedInPresenter.jsx";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Profile(props) {
    let navigate = useNavigate();

    const [backClicked, setBackClicked] = React.useState(false);

    function backClick() {
        setBackClicked(true);
        setTimeout(() => {
            navigate("/Home");
        }, 800);
    }

    if (!props.model.currentUser)
        return <NotLoggedIn />;

    return <ProfileView backClicked={backClicked}
                        backClick={backClick}
                        usersUsername={props.model.currentUser.displayName}
                        displayPhoto={props.model.currentUser.photoURL}
                        displaySeasons={props.model.last5Seasons}
                        displayTotalSeasons={props.model.seasonsPlayed} />
}