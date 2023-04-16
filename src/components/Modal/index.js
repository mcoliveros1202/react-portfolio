import React from 'react';

// modal structure for gallery
function Modal({onClose, currentPhoto }) {
    // destructure currentPhoto properties into constants to assign values into the modal
    const {name, category, description, index} = currentPhoto;

    return (
        // modal markup
        <div className='modalBackdrop'>
            <div className='modealContainer'>
                <div className='modalTitle'>{name}</div>
                <img 
                src={require(`../../assets/small/${category}/${index}.jpg`)}
                alt='current category' />
                <p> {description}</p>
                <button onClick={onClose} type='button'>Close this modal</button>
            </div>
        </div>
    );
};

export default Modal;