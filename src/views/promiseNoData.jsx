import "../styles/promiseNoData.css";

export default function promiseNoDataView(promise) {
    if (!promise.promise) {
        return <div>No data</div>;
    }
    if (!promise.data) {
        if (!promise.error) {
            return <div className="promiseNoData">
                <img src="Quizalicious logo.svg" className="logo" alt="" />
                <h1 className="laden">Loading....</h1>
                <div className="loading_bar"></div>
            </div>;
        }
        if (promise.error) {
            return <div>{props.promise.error.toString()}</div>;
        }
    }
    if (!promise.error) {
        return "";
    }
}