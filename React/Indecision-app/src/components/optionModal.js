import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.clearPick}
        contentLabel="selected Option"
        ariaHideApp={false}
        closeTimeoutMs={200}
        className="modal"
    >
        <h3 className="modal__title">selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.clearPick}>OK</button>
    </Modal>
)

export default OptionModal;