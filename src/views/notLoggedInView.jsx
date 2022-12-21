import '../styles/notLoggedInView.css';

export default function NotLoggedInView(props) {
    return <div className="notLoggedIn">
        <h1>No user logged in</h1>
        <button onClick={props.goToLogin}>Press here to log in</button>
    </div>;
}
