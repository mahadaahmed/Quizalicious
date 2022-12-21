import CreateAccountView from "../views/createAccountView";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CreateACC(props) {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");

    async function handleCreateAccountACB() {
        try {
            await props.model.createUser(email, username, password)
        }
        catch (error) {
            console.log(error.message)
            setError(error)
        }
        if (props.model.currentUser != null) {
            navigate("/Home");
        }
    }

    function userEmailACB(event) {
        setEmail(event)
    }

    function usernameACB(event) {
        setUsername(event)
    }

    function userPasswordACB(event) {
        setPassword(event)
    }

    return <CreateAccountView onUserCreate={handleCreateAccountACB} userEmail={userEmailACB} userName={usernameACB} userPassword={userPasswordACB} error={error} />
}