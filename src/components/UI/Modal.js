import {Fragment} from "react";
import ReactDOM from 'react-dom'
import classes from "./Modal.module.css"

const Backdrop = (props) => {
    return <div className={classes.backdrop} />
}

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal} >
            <div className={classes.content}>{props.children}</div>
        </div>

    );
}

function Modal(props) {
  return (
    <Fragment>
        {ReactDOM.createPortal(<Backdrop />, document.getElementById('overlays'))}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,document.getElementById('overlays'))}
    </Fragment>
  )
}

export default Modal