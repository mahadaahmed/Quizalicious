import NotLoggedInView from '../views/notLoggedInView.jsx';
import { useNavigate } from 'react-router-dom';

export default function NotLoggedIn(props) {
    let navigate = useNavigate();
    function goToLogin() {
        navigate("/Login");
    }

    return <NotLoggedInView goToLogin={goToLogin} />;
}