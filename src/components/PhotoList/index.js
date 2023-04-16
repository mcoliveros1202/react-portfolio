import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
const [currentPhoto, setCurrentPhoto] = useState();
const [isModalOpen, setIsModalOpen] = useState(false);

    const [photos] = useState([
        { name: 'Run Buddy', category: 'JavaScript', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { name: 'JS Quiz', category: 'JavaScript', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { name: 'PetPortal', category: 'group projects', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { name: 'Reach Teach', category: 'group projects', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { name: 'Photo Portfolio', category: 'React', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    ]);

    const currentPhotos = photos.filter((photo) => photo.category === category);

    // define toggleModal for onClick in image
    const toggleModal = (image, i) => {
        setCurrentPhoto({...image, index: i})
        setIsModalOpen(!isModalOpen);
    }
    return (
        <div>
            {/* allows modal to open when clicked and closed when button is clicked */}
            {isModalOpen && (<Modal currentPhoto={currentPhoto} onClose={toggleModal}/>)}
            <div className='flex-row'>
                {currentPhotos.map((image, i) => (
                    <img
                    src={require(`../../assets/small/${category}/${i}.jpg`)}
                    alt={image.name}
                    onClick={() => toggleModal(image, i)}
                    className='img-thumbnail mx-1'
                    key={image.name}
                    />
                ))}
                </div>
        </div>
    )
}

export default PhotoList;