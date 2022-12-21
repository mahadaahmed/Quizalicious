import '../styles/owlView.css';
import { motion } from "framer-motion";

const transition = { duration: 5, yoyo: Infinity, ease: "easeIn" }

export default function OwlView(props) {
    return <motion.div className={"OwlView " + (props.hide?"hide":"")}
        animate={{ opacity: 1 }}
        transition={{ duration: .5, ease: "", delay: 0.2 }}>
        <img src="/Bubo no bubble.svg" className="bubo" alt="" />
        <motion.div className="bubble"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, }}
            transition={{ type: "spring", delay: 0.7 }}>
            {props.text}
            <br />
            <button style={{ top: 5, right: 4 }} onClick={props.onX}>x</button>
            <button style={{ right: 40 }} onClick={props.previousPage} disabled={!props.page}>&lt;</button>
            <button style={{ right: 4 }} onClick={props.nextPage} disabled={props.page === 6}>&gt;</button>
            <svg width="70" height="70" className="bubbleSvg">
                <path className="bubbleTab"
                    d="M 37.816976,34.920055 C 33.828755,45.13286 33.725379,48.180866 35.696704,49.738634 37.668029,51.296402 55.38324,47.135371 60.474587,34.920055"
                />
            </svg>
        </motion.div>
    </motion.div>;
}