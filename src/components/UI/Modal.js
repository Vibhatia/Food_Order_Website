import classes from './Modal.module.css';
import ReactDOM from 'react-dom';
const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onHide} />

};
const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};
const element = document.getElementById('overlays');
const Modal = (props) => {
    return <>
       {ReactDOM.createPortal(<Backdrop onHide={props.onHide}/>,element)}
        {/* <ModalOverlay>{props.children}</ModalOverlay> */}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,element)}
    </>
};
export default Modal;