import React from 'react';

// modal structure for gallery
function Modal({onClose, currentPhoto }) {
    // destructure currentPhoto properties into constants to assign values into the modal
    const {name, category, description, index} = currentPhoto;

    return (
        // modal markup
        <div className='modalBackdrop'>
            <div className='modalContainer'>
                <div className='modalTitle'>{name}</div>
                <img 
                src={require(`../../assets/large/${category}/${index}.jpg`)}
                alt='current category' />
                <p className='modalDescription'> {description}</p>
                <button onClick={onClose} type='button'>Close this modal</button>
            </div>
        </div>
    );
};

export default Modal;