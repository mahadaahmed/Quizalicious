import {
	firebaseModelPromise,
	updateFirebaseFromModel,
	updateModelFromFirebase,
} from "./firebaseModel.jsx";

import resolvePromise 	from "./resolvePromise.jsx";
import promiseNoData 	from "./views/promiseNoData.jsx";
import App 				from "./App.jsx";
import { filterProps } from "framer-motion";

export default function Root() {
	const [promiseState] = React.useState({});
	const [, setError] = React.useState({});
	const [, setData] = React.useState({});

	function resolve(thePromise) {
		function promiseStateChangedACB() {
			setError(promiseState["error"]);
			setData(promiseState["data"]);
			if (promiseState.data) {
				updateFirebaseFromModel(promiseState.data);
				updateModelFromFirebase(promiseState.data);
			}
		}
		resolvePromise(thePromise, promiseState, promiseStateChangedACB);
	}

	React.useEffect(() => {
		resolve(firebaseModelPromise());
	}, []);

	return promiseNoData(promiseState) || <App model={promiseState.data} />;
}