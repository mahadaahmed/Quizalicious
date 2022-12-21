import HeaderView from "../views/headerView.jsx";
import ProfileMenuView from "../views/profileMenuView.jsx";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const auth = getAuth();

export default function HeaderPresenter(props) {
    let navigate = useNavigate();

    const [profileMenuOpen, setProfileMenuOpen] = React.useState(false);
    const [hidingMenu, setHidingMenu]           = React.useState(false); //For closing animation
    const [, setPhotoURL]                       = React.useState("");

    function profilePicClick(event) {
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
        props.model.setProfileMenuOpen(!profileMenuOpen);
    }

    function logOut() {

        signOut(auth).then(() => {
            navigate("/Login");
            props.model.currentUser = null;
        }).catch((error) => {
            Alert("Error logging out");
        });
        props.model.setProfileMenuOpen(false);
    }

    function yourSettings() {
        props.model.setProfileMenuOpen(false);
        navigate("/Settings");
    }

    function yourProfile() {
        props.model.setProfileMenuOpen(false);
        navigate("/Profile");
    }

    function homeButtonPress() {
        navigate("/Home");
    }

    function stopProp(event) {
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
    }

    function modelUpdate(payload) {
        if (payload) {
            if (payload["profileMenuOpen"] !== undefined) {
                if (!payload.profileMenuOpen)
                    setHidingMenu(true);
                if (payload.profileMenuOpen)
                    setProfileMenuOpen(true);
            }
            if( payload["photoURL"] )
                setPhotoURL(props.model.currentUser.photoURL);
        }
    }

    React.useEffect(() => {
        if (hidingMenu) {
            setTimeout(() => {
                setProfileMenuOpen(false);
                setHidingMenu(false);
            }, 500)
        }
    }, [hidingMenu]);

    React.useEffect(() => {
        setProfileMenuOpen(props.model.profileMenuOpen);
        props.model.addObserver(modelUpdate);
        return () => { props.model.removeObserver(modelUpdate) }
    }, []);

    if (!props.model.currentUser)
        return "";
    return <HeaderView  user={props.model.currentUser}
                        homeButtonPress={homeButtonPress}
                        profilePicClick={profilePicClick}
                        profileMenuOpen={props.model.profileMenuOpen}>
                        {profileMenuOpen && ( <ProfileMenuView  stopProp={stopProp}
                                                                hidingMenu={hidingMenu}
                                                                user={props.model.currentUser}
                                                                logOut={logOut}
                                                                yourSettings={yourSettings}
                                                                yourProfile={yourProfile} />)}
    </HeaderView>;
}