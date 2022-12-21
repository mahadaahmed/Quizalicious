import './styles/animations.css';
import './styles/App.css'
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	BrowserRouter as Router,
	Routes,
	RouterProvider,
	Navigate,
} from "react-router-dom";
import HomeScreen 		from "./presenters/homeScreenPresenter.jsx";
import Header 			from "./presenters/headerPresenter.jsx";
import Login 			from './presenters/loginPresenter';
import CreateACC 		from './presenters/createAccountPresenter.jsx';
import Season 			from './presenters/seasonPresenter.jsx';
import Game 			from './presenters/gamePresenter.jsx';
import Highscore 		from './presenters/highscorePresenter.jsx';
import Profile 			from './presenters/profilePresenter.jsx';
import QuickGame 		from './presenters/quickGamePresenter.jsx';
import Settings 		from './presenters/settingsPresenter.jsx';
import PageNotFound		from './presenters/pageNotFoundPresenter.jsx';

export default function App(props) {
    function onClick() {
        props.model.closeProfileMenu();
    }

    return <div className="app" onClick={onClick}>
        <Router>
            <Routes path="/" errorElement={<PageNotFound/>}>
                <Route exact path="/" 		element={<Navigate  to="/Login"/>}/>
                <Route path="Login" 		element={<Login 	model={props.model} />} />
                <Route path="CreateAccount" element={<CreateACC model={props.model} />} />
                <Route path="Home" 			element={<><Header 	model={props.model} /><HomeScreen   model={props.model} /></>} />
                <Route path="Season" 		element={<><Header 	model={props.model} /><Season 	    model={props.model} /></>} />
                <Route path="Game" 			element={<><Header 	model={props.model} /><Game 		model={props.model} /></>} />
                <Route path="QuickGame" 	element={<><Header 	model={props.model} /><QuickGame 	model={props.model} /></>} />
                <Route path="Profile" 		element={<><Header 	model={props.model} /><Profile 	    model={props.model} /></>} />
                <Route path="Highscore" 	element={<><Header 	model={props.model} /><Highscore 	model={props.model} /></>} />
                <Route path="Settings" 		element={<><Header 	model={props.model} /><Settings 	model={props.model} /></>} />
            </Routes>
        </Router>
    </div>;
}
