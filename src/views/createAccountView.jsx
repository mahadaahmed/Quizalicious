import '../styles/createAccountView.css';
import { Link } from "react-router-dom";

export default function CreateAccountView(props) {
    return <div className="CreateAccountView">
        <img src="Quizalicious logo.svg" className="image blob" />
        <img src="./Bubo.svg" className="bubo" alt="Bubo!" />
        <div className="error">{errorHandling()}</div>
        <div className="registerBox">
            <form onSubmit={creatingUserACB}>
                <label htmlFor="email">Email address:</label><br />
                <input type="email" onChange={onUserEmailACB}></input> <div>
                    <label htmlFor="username">Username:</label><br />
                    <input type="username" onChange={onUsernameACB}></input></div>
                <label htmlFor="password">Password:</label><br />
                <input type="password" onChange={onUserPasswordACB} ></input>
                <Link to={"/Login"}>back</Link>
                <button type='submit'>Create account</button>
            </form>
        </div>
        <img src="./Quizalicious logo full dark theme.svg" className="quiza" alt="" />
    </div>;

    function creatingUserACB(event) {
        event.preventDefault()
        props.onUserCreate()
    }

    function onUserEmailACB(event) {
        props.userEmail(event.target.value)
    }
    function onUsernameACB(event) {
        props.userName(event.target.value)
    }

    function onUserPasswordACB(event) {
        props.userPassword(event.target.value)
    }

    function errorHandling() {
        if (!props.error.message)
            return;
        if (props.error.message.includes("auth/email-already-in-use")) {
            return "Email is already in use";
        }

        if (props.error.message.includes("auth/invalid-email")) {
            return "Email not valid, try again";
        }

        if (props.error.message.includes("auth/weak-password")) {
            return "Password should be at least 6 characters.";
        }

        if (props.error.message.includes("auth/internal-error")) {
            return "Please enter a password";
        }
    }
}