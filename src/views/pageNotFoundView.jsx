import { Link } from "react-router-dom"

export default function PageNotFoundView(props) {
    return <div>
        <h1>Page not found!</h1>
        <img src="Bubo.svg" height="200px" alt="" /><br />
        <Link to={"/Login"}>Try to go to login and start from there :)</Link>
    </div>
}