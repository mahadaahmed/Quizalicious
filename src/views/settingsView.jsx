import '../styles/settingsView.css';

export default function SettingsView(props) {
    return (
        <div className={"settingsView appear " + (props.backClicked && "implode")}>
            <h2>Settings</h2>
            <div className="wrap">
                <h4>Profile picture update</h4>
                <img src={props.photoURL} className="profilePicture" /><br />
                <input type="file" onChange={props.handleChange} />
                <button disabled={props.loading || !props.photo} onClick={props.handleClick}>Upload</button><br />
                <button onClick={props.backClick} className="back">Back</button>
            </div>
        </div>
    );
}